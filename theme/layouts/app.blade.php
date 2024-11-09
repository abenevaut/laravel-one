<!DOCTYPE html>
<html lang="{{ $language }}">
    <head>
        <meta charset="UTF-8">
        <meta name="robots" content="index, follow">

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=rubik:400,500,600&display=swap" rel="stylesheet" />

        <title>{{ $seo['title'] }}</title>
        <meta name="description" content="{{ $seo['description'] }}">
        <meta name="keywords" content="{{ $seo['keywords'] }}">
        <meta name="author" content="{{ $seo['author'] }}">

        <meta property="og:type" content="website">
        <meta property="og:url" content="{{ $seo['url'] }}">
        <meta property="og:title" content="{{ $seo['title'] }}">
        <meta property="og:description" content="{{ $seo['description'] }}">
        <meta property="og:image" content="{{ $seo['og-image'] }}">

        <meta property="twitter:card" content="summary_large_image">
        <meta name=”twitter:creator” content=”{{ $seo['twitter'] }}”>
        <meta property="twitter:url" content="{{ $seo['url'] }}">
        <meta property="twitter:title" content="{{ $seo['title'] }}">
        <meta property="twitter:description" content="{{ $seo['description'] }}">
        <meta property="twitter:image" content="{{ $seo['og-image'] }}">
        <meta property="twitter:image:alt" content="{{ $seo['description'] }}">

        @yield('meta')

        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="favicon/favicon.ico" type="image/x-icon">
        <link rel="stylesheet" href="assets/app.css">
        <!-- sentry v4 -->
{{--        <script src="https://js.sentry-cdn.com/bf032283abab4fdb9fbcd7328ed39b28.min.js" crossorigin="anonymous"></script>--}}
{{--        <script>--}}
{{--          Sentry.init({--}}
{{--            environment: "production",--}}
{{--          });--}}
{{--        </script>--}}
    </head>
    <body class="font-sans antialiased">
{{--        <script type="text/javascript">--}}
{{--          (function(window, document, dataLayerName, id) {--}}
{{--            window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:"stg.start"});var scripts=document.getElementsByTagName('script')[0],tags=document.createElement('script');--}}
{{--            function stgCreateCookie(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toUTCString()}document.cookie=a+"="+b+d+"; path=/"}--}}
{{--            var isStgDebug=(window.location.href.match("stg_debug")||document.cookie.match("stg_debug"))&&!window.location.href.match("stg_disable_debug");stgCreateCookie("stg_debug",isStgDebug?1:"",isStgDebug?14:-1);--}}
{{--            var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName),isStgDebug&&qP.push("stg_debug");var qPString=qP.length>0?("?"+qP.join("&")):"";--}}
{{--            tags.async=!0,tags.src="https://abenevaut.containers.piwik.pro/"+id+".js"+qPString,scripts.parentNode.insertBefore(tags,scripts);--}}
{{--            !function(a,n,i){a[n]=a[n]||{};for(var c=0;c<i.length;c++)!function(i){a[n][i]=a[n][i]||{},a[n][i].api=a[n][i].api||function(){var a=[].slice.call(arguments,0);"string"==typeof a[0]&&window[dataLayerName].push({event:n+"."+i+":"+a[0],parameters:[].slice.call(arguments,1)})}}(i[c])}(window,"ppms",["tm","cm"]);--}}
{{--          })(window, document, 'dataLayer', '2c54d796-5f59-434c-85e2-1381de1d0d07');--}}
{{--        </script>--}}
        <div id="root"></div>
    </body>
</html>
