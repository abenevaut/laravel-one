<url>
    @if (! empty($tag->url))
    <loc>{{ $tag->url }}</loc>
    @endif
@if (count($tag->alternates))
@foreach ($tag->alternates as $alternate)
    <xhtml:link rel="alternate" hreflang="{{ $alternate->locale }}" href="{{ $alternate->url }}" />
    @endforeach
@endif
@if (! empty($tag->lastModificationDate))
    <lastmod>{{ $tag->lastModificationDate->format(DateTime::ATOM) }}</lastmod>
@endif
    @if (! empty($tag->changeFrequency))
    <changefreq>{{ $tag->changeFrequency }}</changefreq>
    @endif
@if (! empty($tag->priority))
    <priority>{{ number_format($tag->priority,1) }}</priority>
    @endif
    @each('image', $tag->images, 'image')
</url>
