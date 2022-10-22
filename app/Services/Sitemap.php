<?php

namespace App\Services;

use Spatie\Sitemap\Sitemap as SpatieSitemap;

class Sitemap extends SpatieSitemap
{
    public function render(): string
    {
        $tags = collect($this->tags)->unique('url')->filter();

        return view('sitemap')
            ->with(compact('tags'))
            ->render();
    }
}
