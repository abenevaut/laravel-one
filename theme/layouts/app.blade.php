<!DOCTYPE html>
<html lang="{{ $language }}">
<head>
    <meta charset="UTF-8" />
    <meta name="robots" content="index, follow">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>{{ $seo['title'] }}</title>
    <meta name="author" content="{{ $seo['author'] }}" />
    <meta name="description" content="{{ $seo['description'] }}" />
    <meta name="keywords" content="{{ $seo['keywords'] }}" />
    <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"/>
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
    <nav id="header" class="fixed w-full z-10 top-0">
        <div id="progress" class="h-1 z-20 top-0" style="background:linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0);"></div>
        <div class="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
            <div class="pl-4">
                <a class="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl" href="#">
                    laravel-one
                </a>
            </div>
        </div>
    </nav>
    @yield('content')
    <footer class="bg-white border-t border-gray-400 shadow">
        <div class="container max-w-4xl mx-auto flex py-8">
            <div class="w-full mx-auto flex flex-wrap">
                <div class="flex w-full md:w-1/2 ">
                    <div class="px-8">
                        <h3 class="font-bold text-gray-900">About</h3>
                        <p class="py-4 text-gray-600 text-sm">
                            Tool to generate static webpages based on <a href="https://laravel.com/docs/9.x/blade">Blade Templates</a>.
                        </p>
                    </div>
                </div>
                <div class="flex w-full md:w-1/2">
                    <div class="px-8">
                        <h3 class="font-bold text-gray-900">Project</h3>
                        <ul class="list-reset items-center text-sm pt-3">
                            <li>
                                <a class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1" href="https://github.com/abenevaut/laravel-one" target="_blank">laravel-one</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <script>
        /* Progress bar */
        //Source: https://alligator.io/js/progress-bar-javascript-css-variables/
        var h = document.documentElement,
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight',
            progress = document.querySelector('#progress'),
            scroll;
        var scrollpos = window.scrollY;
        var header = document.getElementById("header");
        var navcontent = document.getElementById("nav-content");

        document.addEventListener('scroll', function() {
            /*Refresh scroll % width*/
            scroll = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
            progress.style.setProperty('--scroll', scroll + '%');
            /*Apply classes for slide in bar*/
            scrollpos = window.scrollY;
            if (scrollpos > 10) {
                header.classList.add("bg-white");
                header.classList.add("shadow");
                navcontent.classList.remove("bg-gray-100");
                navcontent.classList.add("bg-white");
            } else {
                header.classList.remove("bg-white");
                header.classList.remove("shadow");
                navcontent.classList.remove("bg-white");
                navcontent.classList.add("bg-gray-100");

            }
        });
        //Javascript to toggle the menu
        document.getElementById('nav-toggle').onclick = function() {
            document.getElementById("nav-content").classList.toggle("hidden");
        }
    </script>
</body>
</html>
