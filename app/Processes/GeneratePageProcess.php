<?php

namespace App\Processes;

use App\Domain\Pages\Pages\Page;
use Phar;
use Symfony\Component\Process\Process;

class GeneratePageProcess extends Process
{
    public function __construct(Page $page)
    {
        /*
         * we construct command line to generate pages:
         * `/path/to/phar/laravel-one generate:page {'json'}`
         * or
         * `php /path/to/laravel-one generate:page {'json'}`
         */
        $commandLine = !!Phar::running()
            ? [Phar::running(false)]
            : ['php', base_path('laravel-one')];
        $commandLine = array_merge($commandLine, ['generate:page', $page->toJson()]);

        parent::__construct($commandLine);
    }
}
