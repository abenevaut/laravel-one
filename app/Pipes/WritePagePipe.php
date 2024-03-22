<?php

namespace App\Pipes;

use App\Domain\Pages\Pages\Page;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Str;
use Symfony\Component\Yaml\Yaml;

class WritePagePipe extends PipeAbstract
{
    public function handle(Page $page, \Closure $next): Page
    {
        $page->content = Yaml::parse(file_get_contents($page->file));

        $distPath = Str::remove($this->executionPath('content/'), $page->file);
        $distPath = Str::replace('yml', 'html', $distPath);

        $translationsDirectory = $this->executionPath('content/lang');
        if (is_dir($translationsDirectory)) {
            Lang::addNamespace('content', $translationsDirectory);
        }

        config()->set('view', $page->viewConfig);

        file_put_contents(
            $this->executionPath("dist/{$distPath}"),
            View::make($page->content['view'], $page->content)
        );

        return $next($page);
    }
}
