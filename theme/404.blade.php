@extends('layouts.app', ['language' => $language, 'seo' => $seo])

@section('content')
    <div class="py-10 sm:py-32">
        <div class="mx-auto md:w-2/4 lg:w-1/4">
            <div class="px-4 py-24 text-center sm:px-16 bg-dark-400">
                <h1 class="mb-3 font-bold leading-none tracking-tighter text-xxl text-primary">404</h1>
                <p class="text-lg mb-12">Oops! That page can’t be found.</p>
                <a class="inline-flex items-center px-3 py-2 border border-white text-md border-opacity-5 text-opacity-70 hover:border-opacity-10 hover:text-opacity-100" href="index.html" role="button">
                    < Back to home
                </a>
            </div>
        </div>
    </div>
@endsection
