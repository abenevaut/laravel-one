@extends('layouts.app', ['language' => $language, 'seo' => $seo])

@php
    $article = json_encode(app(\Spatie\LaravelMarkdown\MarkdownRenderer::class)->toHtml($article)) ?? '';
@endphp

@section('meta')
    <link rel="canonical" href="//index.html" />
    <script>
      window.article = {!! $article !!}
    </script>
    <script type="module" src="assets/Article.js"></script>
@endsection
