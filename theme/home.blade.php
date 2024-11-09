@extends('layouts.app', ['language' => $language, 'seo' => $seo])

@section('meta')
    <link rel="canonical" href="//index.html" />
    <script>
      window.data = '@json($portfolio)';
    </script>
    <script type="module" src="assets/Home.js"></script>
@endsection
