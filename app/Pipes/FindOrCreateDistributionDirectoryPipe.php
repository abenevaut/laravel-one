<?php

namespace App\Pipes;

use App\GeneratorSettings;

class FindOrCreateDistributionDirectoryPipe extends PipeAbstract
{
    public function handle(GeneratorSettings $generatorSettings, \Closure $next): GeneratorSettings
    {
        if (!is_dir($this->executionPath('dist'))) {
            mkdir($this->executionPath('dist'));
        }

        return $next($generatorSettings);
    }
}
