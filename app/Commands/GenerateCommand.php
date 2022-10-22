<?php

namespace App\Commands;

use App\Services\Sitemap;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Str;
use LaravelZero\Framework\Commands\Command;
use Spatie\Sitemap\Tags\Url;
use Symfony\Component\Yaml\Yaml;

class GenerateCommand extends Command
{
    /**
     * The signature of the command.
     *
     * @var string
     */
    protected $signature = 'generate
        {url : Website base URL, ctarting with "http://"}';

    /**
     * The description of the command.
     *
     * @var string
     */
    protected $description = 'Generate static web pages';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        config()->set('view.compiled', $this->path('.cache'));
        config()->set('view.paths', array_merge(config('view.paths'), [$this->path('theme')]));

        if (!is_dir($this->path('dist'))) {
            mkdir($this->path('dist'));
        }

        if (!is_dir($this->path('.cache'))) {
            mkdir($this->path('.cache'));
        }

        $files = array_merge(
            glob($this->path('content/*.yml')),
            glob($this->path('content/**/*.yml')),
        );

        if (count($files) === 0) {
            return self::FAILURE;
        }

        $sitemap = Sitemap::create();

        foreach ($files as $file) {
            $content = Yaml::parse(file_get_contents($file));
            $dirPath = Str::replace('content', 'dist', dirname($file));

            if (!is_dir($dirPath)) {
                mkdir($dirPath, 0777, true);
            }

            $distPath = Str::remove($this->path('content/'), $file);
            $distPath = Str::replace('yml', 'html', $distPath);

            $page = View::make($content['view'], $content);

            file_put_contents($this->path("dist/{$distPath}"), $page);

            $url = URL::create($this->argument('url') . "/{$distPath}")
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
                ->setPriority(0.1)
            ;
            $sitemap->add($url);
        }

        $sitemap->writeToFile($this->path("dist/sitemap.xml"));

        return self::SUCCESS;
    }

    /**
     * Define the command's schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    public function schedule(Schedule $schedule)
    {
        // $schedule->command(static::class)->everyMinute();
    }

    private function path($path)
    {
        return getcwd() . DIRECTORY_SEPARATOR . $path;
    }
}