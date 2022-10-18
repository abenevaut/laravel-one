<?php

namespace App\Commands;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Str;
use LaravelZero\Framework\Commands\Command;
use Symfony\Component\Yaml\Yaml;

class GenerateCommand extends Command
{
    /**
     * The signature of the command.
     *
     * @var string
     */
    protected $signature = 'generate';

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
        if (!is_dir($this->path('dist'))) {
            mkdir($this->path('dist'));
        }

        $files = array_merge(
            glob($this->path('content/*.yml')),
            glob($this->path('content/**/*.yml')),
        );

        if (count($files) === 0) {
            return self::FAILURE;
        }

        foreach ($files as $file) {
            $content = Yaml::parse(file_get_contents($file));
            $dirPath = Str::replace('content', 'dist', dirname($file));

            if (!is_dir($dirPath)) {
                mkdir($dirPath, 0777, true);
            }

            $distPath = Str::remove($this->path('content/'), $file);
            $distPath = Str::replace('yml', 'html', $distPath);

            $page = View::make($content['view'], $content['data']);

            file_put_contents($this->path("dist/{$distPath}"), $page);
        }

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
        return getenv('PWD') . DIRECTORY_SEPARATOR . $path;
    }
}
