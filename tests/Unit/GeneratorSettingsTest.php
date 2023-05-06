<?php

use App\GeneratorSettings;


test('GeneratorSettings', function () {

    $url = fake()->url;
    $plugins = [];

    $generatorSettings = new GeneratorSettings($url, $plugins);

    expect($generatorSettings->url)->toBe($url);
    expect($generatorSettings->plugins)->toBe($plugins);
});
