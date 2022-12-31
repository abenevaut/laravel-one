<?php

namespace App\Pipes;

use App\GeneratorSettings;

class FindOrCreateCacheDirectoryPipe extends PipeAbstract
{
    public function handle(GeneratorSettings $generatorSettings, \Closure $next): GeneratorSettings
    {
        $generatorSettings->cacheDirectory = $this->path('.cache');

        if (!is_dir($generatorSettings->cacheDirectory)) {
            mkdir($generatorSettings->cacheDirectory);
        }

        return $next($generatorSettings);
    }
}
