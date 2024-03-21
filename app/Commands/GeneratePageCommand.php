<?php

namespace App\Commands;

use App\Domain\Pages\Pages\Page;
use App\Pipes\FindOrCreatePageDistributionDirectoryPipe;
use App\Pipes\WritePagePipe;
use Illuminate\Pipeline\Pipeline;
use Illuminate\Support\Facades\Validator;
use LaravelZero\Framework\Commands\Command;

class GeneratePageCommand extends Command
{
    protected $signature = 'generate:page
        {page : Page to generate}';

    protected $description = 'Generate static web page';

    public function handle(): bool
    {
        try {
            Validator::validate($this->arguments(), [
                'page' => 'string',
            ]);

            $page = json_decode($this->argument('page'), true);
            $page = new Page(...$page);

            app(Pipeline::class)
                ->send($page)
                ->through([
                    FindOrCreatePageDistributionDirectoryPipe::class,
                    WritePagePipe::class,
                ])
                ->thenReturn();
        } catch (\Exception $exception) {
            $this->error($exception->getMessage());
        }

        return self::SUCCESS;
    }
}
