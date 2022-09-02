<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Vikka Easy Recipes</title>
        @vite('resources/js/app.js')
    </head>

    <body>
    <script>
        window.clientData = {!!json_encode([
            'isLoggedin' => true,
            'user' => Auth::user()
        ])!!}
    </script>


    <div id="app">
      <app></app>
    </div>
    </body>

</html>
