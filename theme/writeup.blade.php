@extends('layouts.app', ['language' => $language, 'seo' => $seo])

@php
    $writeup = json_encode(app(\Spatie\LaravelMarkdown\MarkdownRenderer::class)->toHtml($writeup)) ?? '';
@endphp

@section('meta')
    <link rel="canonical" href="//index.html" />
    <script>
      window.article = '@json($article)'
      window.writeup = {!! $writeup !!}
    </script>
    <script type="module" src="assets/Writeup.js"></script>
@endsection
