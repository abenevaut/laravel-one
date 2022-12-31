<?php

namespace App;

use Spatie\LaravelData\Data;

class GeneratorSettings extends Data
{
    public string $contentDirectory;

    public string $cacheDirectory;

    public string $themeDirectory;

    public array $processes;

    public function __construct(
        public string $url,
        public array $plugins,
    ) {
    }
}
