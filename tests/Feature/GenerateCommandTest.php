<?php

beforeEach(function () {
    if (is_dir('./dist')) {
        $files = array_diff(scandir('./dist'), ['.', '..']);

        foreach ($files as $file) {
            unlink("./dist/$file");
        }

        rmdir('./dist');
    }

    if (is_dir('./.cache')) {
        $files = array_diff(scandir('./.cache'), ['.', '..']);

        foreach ($files as $file) {
            unlink("./.cache/$file");
        }

        rmdir('./.cache');
    }
});

it('generate laravel-one web pages', function () {
    $this
        ->artisan('generate', ['url' => 'https://laravel-one.test'])
        ->expectsOutput('2 pages to generate')
        ->assertExitCode(0);

    expect('./dist')->toBeWritableDirectory();
    expect('./.cache')->toBeWritableDirectory();

    $files = array_diff(scandir('./dist'), ['.', '..']);
    expect(count($files))->toBe(3);

    $files = array_diff(scandir('./.cache'), ['.', '..']);
    expect(count($files))->toBe(2);
});
