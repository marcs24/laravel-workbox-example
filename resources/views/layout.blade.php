<html>
<head>
    <title>@yield('title')</title>
    <script type="text/javascript" src="{{ mix('/js/app.js')}} "></script>
    <style>
        {{ file_get_contents(public_path('/css/inline.css')) }}
    </style>
    @stack('css')
    @stack('font')
</head>
<body>
    @yield('content')
</body>
</html>
