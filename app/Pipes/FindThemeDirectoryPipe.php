<?php

namespace App\Pipes;

use App\GeneratorSettings;

class FindThemeDirectoryPipe extends PipeAbstract
{
    public function handle(GeneratorSettings $generatorSettings, \Closure $next): GeneratorSettings
    {
        $generatorSettings->themeDirectory = $this->executionPath('theme');

        if (!is_dir($generatorSettings->themeDirectory)) {
            throw new \Exception('`theme` directory not found!');
        }

        config()->set('view.paths', array_merge(config('view.paths'), [$generatorSettings->themeDirectory]));

        return $next($generatorSettings);
    }
}
