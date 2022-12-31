<?php

namespace App\Pipes;

abstract class PipeAbstract
{
    protected function path($path)
    {
        return getcwd() . DIRECTORY_SEPARATOR . $path;
    }
}
