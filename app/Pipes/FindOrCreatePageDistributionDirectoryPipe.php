<?php

namespace App\Pipes;

use App\Domain\Pages\Pages\Page;
use Illuminate\Support\Str;

class FindOrCreatePageDistributionDirectoryPipe extends PipeAbstract
{
    public function handle(Page $page, \Closure $next): Page
    {
        $distFilePath = Str::replace('content', 'dist', dirname($page->file));

        if (!is_dir($distFilePath)) {
            mkdir($distFilePath, 0777, true);
        }

        return $next($page);
    }
}
