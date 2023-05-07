<?php

namespace App\Domain\Pages\Pages;

use Spatie\LaravelData\Data;

class Page extends Data implements \SplSubject
{
    private array $observers = [];

    public function __construct(
        public string $file,
        public string $distUrl,
        public string $distUri,
        public array $content
    ) {
    }

    public function attach(\SplObserver $observer): void
    {
        $this->observers[] = $observer;
    }

    public function detach(\SplObserver $observer): void
    {
        $key = array_search($observer, $this->observers, true);

        if ($key) {
            unset($this->observers[$key]);
        }
    }

    public function notify(): void
    {
        foreach ($this->observers as $observer) {
            $observer->update($this);
        }
    }

    public function toJson($options = 0): string
    {
        return json_encode([
            'file' => $this->file,
            'distUrl' => $this->distUrl,
            'distUri' => $this->distUri,
            'content' => $this->content,
        ], $options);
    }
}
