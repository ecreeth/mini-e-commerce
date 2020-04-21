<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Laravel</title>
  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
  <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
<div>
  @include('includes.header')

  <header class="bg-white shadow container mx-auto">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold leading-tight text-gray-900">
        Filters goes here
      </h1>
    </div>
  </header>
  <main>
    <div class="max-w-7xl mx-auto container">
      <!-- Main layout content -->
        @yield('content')
      <!-- End  -->
    </div>
  </main>
</div>

<footer>
  <div class="h-24 mt-6" style="background-color: #1D1D1D;">

  </div>
</footer>
    <script src="/js/manifest.js"></script>
    <script src="/js/vendor.js"></script>
    <script src="/js/app.js"></script>
  </body>
</html>
