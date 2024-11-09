@extends('layouts.app', ['language' => $language, 'seo' => $seo])

@section('meta')
    <script>
      window.data = '@json(['bio' => $bio])';
    </script>
    <script type="module" src="assets/Profile.js"></script>
@endsection
