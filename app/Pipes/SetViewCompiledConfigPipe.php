<?php

namespace App\Pipes;

use App\GeneratorSettings;

class SetViewCompiledConfigPipe extends PipeAbstract
{
    public function handle(GeneratorSettings $generatorSettings, \Closure $next): GeneratorSettings
    {
        config()->set('view.compiled', $generatorSettings->cacheDirectory);

        return $next($generatorSettings);
    }
}
