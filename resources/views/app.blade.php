<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}" />
        <title>Project Management Webapp</title>
    </head>
    <body>
        <div id="app">
            <router-link :to="{ name: 'home' }" exact>Home</router-link>
            <router-link :to="{ name: 'projects' }">Projects</router-link>
            <hr>
            <router-view></router-view>
        </div>

        <script src=" {{ asset('js/app.js') }} "></script>
    </body>
</html>
