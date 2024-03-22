@extends('layouts.app', ['language' => $language, 'seo' => $seo])

@section('head')
    <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"/>
@endsection

@section('content')
    <div class="py-10 sm:py-32">
        <div class="mx-auto md:w-2/4 lg:w-1/4">
            <div class="px-4 py-24 text-center sm:px-16 bg-dark-400">
                <h1 class="mb-3 font-bold leading-none tracking-tighter text-xxl text-primary">{{ \Illuminate\Support\Facades\Lang::get($error['number'], [], 'en') }}</h1>
                <p class="text-lg mb-12">{{ \Illuminate\Support\Facades\Lang::get($error['title'], [], 'en') }}</p>
                <a class="inline-flex items-center px-3 py-2 border border-white text-md border-opacity-5 text-opacity-70 hover:border-opacity-10 hover:text-opacity-100" href="index.html" role="button">{{ \Illuminate\Support\Facades\Lang::get($error['btnTitle'], [], 'en') }}</a>
            </div>
        </div>
    </div>
@endsection
