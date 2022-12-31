<?php

namespace App\Pipes;

use App\GeneratorSettings;

class FindContentDirectoryPipe extends PipeAbstract
{
    public function handle(GeneratorSettings $generatorSettings, \Closure $next): GeneratorSettings
    {
        $generatorSettings->contentDirectory = $this->path('content');

        if (!is_dir($generatorSettings->contentDirectory)) {
            throw new \Exception('`content` directory not found!');
        }

        return $next($generatorSettings);
    }
}
