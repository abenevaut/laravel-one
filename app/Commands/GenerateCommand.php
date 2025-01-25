<?php

namespace App\Commands;

use abenevaut\Infrastructure\Console\Commands\ProcessPoolCommandAbstract;
use App\Domain\Pages\Sitemaps\Services\Sitemap;
use App\GeneratorSettings;
use App\Pipes\FindOrCreateCacheDirectoryPipe;
use App\Pipes\SetViewCompiledConfigPipe;
use App\Pipes\SetViewPathsConfigPipe;
use App\Pipes\ListPagesPipe;
use App\Pipes\FindOrCreateDistributionDirectoryPipe;
use App\Pipes\FindContentDirectoryPipe;
use App\Pipes\FindThemeDirectoryPipe;
use Illuminate\Pipeline\Pipeline;
use Illuminate\Support\Facades\Validator;

class GenerateCommand extends ProcessPoolCommandAbstract
{
    protected $signature = 'generate
        {url : Website base URL, starting with `https://`}
        {--concurrency=4 : Process pool concurrency}';

    protected $description = 'Generate static web pages';

    public function title(): string
    {
        return "{$this->getQueueLength()} pages to generate";
    }

    public function boot(): self
    {
        try {
            Validator::validate($this->arguments(), [
                'url' => 'required|url',
                'concurrency' => 'number|min:1',
            ]);

            $generatorSettings = new GeneratorSettings(
                $this->argument('url'),
                [
                    new Sitemap(),
                ]
            );

            $pages = app(Pipeline::class)
                ->send($generatorSettings)
                ->through([
                    FindContentDirectoryPipe::class,
                    FindThemeDirectoryPipe::class,
                    FindOrCreateCacheDirectoryPipe::class,
                    FindOrCreateDistributionDirectoryPipe::class,
                    SetViewCompiledConfigPipe::class,
                    SetViewPathsConfigPipe::class,
                    ListPagesPipe::class,
                ])
                ->thenReturn();

            $this->push($pages->processes);

            foreach ($generatorSettings->plugins as $plugin) {
                $plugin->generate();
            }
        } catch (\Exception $exception) {
            $this->error($exception->getMessage());
        }

        return $this;
    }

    protected function defaultConcurrency(): int
    {
        return $this->option('concurrency') ?? 4;
    }
}
