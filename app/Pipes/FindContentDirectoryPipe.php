<?php

namespace App\Pipes;

use App\GeneratorSettings;
use Illuminate\Support\Facades\Lang;

class FindContentDirectoryPipe extends PipeAbstract
{
    public function handle(GeneratorSettings $generatorSettings, \Closure $next): GeneratorSettings
    {
        $generatorSettings->contentDirectory = $this->executionPath('content');

        if (!is_dir($generatorSettings->contentDirectory)) {
            throw new \Exception('`content` directory not found!');
        }

        return $next($generatorSettings);
    }
}
