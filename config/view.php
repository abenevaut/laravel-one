<?php

return [
    'paths' => [
        base_path('resources/views'),
    ],

    'compiled' => env(
        'VIEW_COMPILED_PATH',
        realpath(storage_path('framework/views'))
    ),
];
