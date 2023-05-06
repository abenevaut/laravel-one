@extends('layouts.app', ['language' => $language, 'seo' => $seo])

@section('content')
<div class="container w-full md:max-w-3xl mx-auto pt-20 pb-12">
    <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" style="font-family:Georgia,serif;">

        <div class="font-sans">
            <h1 class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">laravel-one documentation</h1>
        </div>


        Tool to generate static webpages based on <a class="inline-block text-primary hover:underline" href="https://laravel.com/docs/9.x/blade">Blade Templates</a>.

        <ul class="rounded-circle">
            <li>credits to <a class="inline-block text-primary hover:underline" href="https://github.com/tailwindtoolbox/Minimal-Blog">tailwindtoolbox</a> for the HTML template</li>
        </ul>

        <h2 class="py-2 font-sans">Install</h2>

        <ul class="rounded-circle">
            <li><a class="inline-block text-primary hover:underline" href="https://packagist.org/packages/abenevaut/laravel-one" target="_blank">Available on Packagist.org - abenevaut/laravel-one</a></li>
        </ul>

        <h3 class="py-2 font-sans">Globally</h3>
        <pre class="bg-gray-900 rounded text-white font-mono text-base p-2 md:p-4">
            <code class="break-words whitespace-pre-wrap">
composer global require abenevaut/laravel-one
            </code>
        </pre>

        <h4 class="py-2 font-sans">Usage</h4>
        <pre class="bg-gray-900 rounded text-white font-mono text-base p-2 md:p-4">
            <code class="break-words whitespace-pre-wrap">
laravel-one generate
            </code>
        </pre>

        <a class="inline-block text-primary hover:underline" href="https://github.com/abenevaut/laravel-one/wiki" target="_blank">To setup your first website, follow the wiki</a>

        <h2 class="py-2 font-sans">Build</h2>
        <pre class="bg-gray-900 rounded text-white font-mono text-base p-2 md:p-4">
            <code class="break-words whitespace-pre-wrap">
php laravel-one app:build laravel-one
php laravel-one app:build laravel-one --build-version=0.0.X
            </code>
        </pre>

    </div>

</div>
@endsection
