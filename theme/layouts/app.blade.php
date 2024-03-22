<!DOCTYPE html>
<html lang="{{ $language }}">
<head>
    <meta charset="UTF-8" />
    <meta name="robots" content="index, follow">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>{{ \Illuminate\Support\Facades\Lang::get($seo['title'], [], 'en') }}</title>
    <meta name="author" content="{{ \Illuminate\Support\Facades\Lang::get($seo['author'], [], 'en') }}" />
    <meta name="description" content="{{ \Illuminate\Support\Facades\Lang::get($seo['description'], [], 'en') }}" />
    <meta name="keywords" content="{{ \Illuminate\Support\Facades\Lang::get($seo['keywords'], [], 'en') }}" />
    @yield('head')
</head>
<body class="bg-gray-100 font-sans leading-normal tracking-normal">
    <script type="text/javascript">
        (function(window, document, dataLayerName, id) {
            window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:"stg.start"});var scripts=document.getElementsByTagName('script')[0],tags=document.createElement('script');
            function stgCreateCookie(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toUTCString()}document.cookie=a+"="+b+d+"; path=/"}
            var isStgDebug=(window.location.href.match("stg_debug")||document.cookie.match("stg_debug"))&&!window.location.href.match("stg_disable_debug");stgCreateCookie("stg_debug",isStgDebug?1:"",isStgDebug?14:-1);
            var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName),isStgDebug&&qP.push("stg_debug");var qPString=qP.length>0?("?"+qP.join("&")):"";
            tags.async=!0,tags.src="https://abenevaut.containers.piwik.pro/"+id+".js"+qPString,scripts.parentNode.insertBefore(tags,scripts);
            !function(a,n,i){a[n]=a[n]||{};for(var c=0;c<i.length;c++)!function(i){a[n][i]=a[n][i]||{},a[n][i].api=a[n][i].api||function(){var a=[].slice.call(arguments,0);"string"==typeof a[0]&&window[dataLayerName].push({event:n+"."+i+":"+a[0],parameters:[].slice.call(arguments,1)})}}(i[c])}(window,"ppms",["tm","cm"]);
        })(window, document, 'dataLayer', '2c54d796-5f59-434c-85e2-1381de1d0d07');
    </script>
    @yield('content')
</body>
</html>
