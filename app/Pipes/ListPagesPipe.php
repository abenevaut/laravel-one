<?php

namespace App\Pipes;

use App\Domain\Pages\Pages\Page;
use App\GeneratorSettings;
use App\Processes\GeneratePageProcess;
use Illuminate\Support\Str;
use Symfony\Component\Yaml\Yaml;

class ListPagesPipe extends PipeAbstract
{
    /**
     * @throws \Exception
     */
    public function handle(GeneratorSettings $generatorSettings, \Closure $next): GeneratorSettings
    {
        $files = array_merge(
            glob("{$generatorSettings->contentDirectory}/*.yml"),
            glob("{$generatorSettings->contentDirectory}/**/*.yml"),
        );

        if (count($files) === 0) {
            throw new \Exception('`content` directory does not contain any content files (`*.yml`)!');
        }

        foreach ($files as $file) {
            $content = Yaml::parse(file_get_contents($file));

            $distUri = Str::remove($this->path('content/'), $file);
            $distUri = Str::replace('yml', 'html', $distUri);

            $page = new Page(
                $file,
                $generatorSettings->url,
                $distUri,
                $content,
                config('view')
            );

            // Attach observers
            foreach ($generatorSettings->plugins as $plugin) {
                $page->attach($plugin);
            }

            $page->notify();

            $generatorSettings->processes[] = new GeneratePageProcess($page);
        }

        return $next($generatorSettings);
    }
}
