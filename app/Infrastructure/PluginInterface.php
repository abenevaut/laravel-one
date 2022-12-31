<?php

namespace App\Infrastructure;

use App\Domain\Pages\Pages\Page;

interface PluginInterface extends \SplObserver
{
    public function update(Page|\SplSubject $subject): void;

    public function generate(): void;
}
