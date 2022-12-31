<?php

namespace App\Pipes;

use App\GeneratorSettings;

class SetViewPathsConfigPipe extends PipeAbstract
{
    public function handle(GeneratorSettings $generatorSettings, \Closure $next): GeneratorSettings
    {
        config()->set('view.paths', array_merge(config('view.paths'), [$generatorSettings->themeDirectory]));

        return $next($generatorSettings);
    }
}
