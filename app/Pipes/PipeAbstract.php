<?php

namespace App\Pipes;

abstract class PipeAbstract
{
    protected function executionPath($path)
    {
        return getcwd() . DIRECTORY_SEPARATOR . $path;
    }
}
