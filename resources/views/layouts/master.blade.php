<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Laravel</title>
  <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
<div>
  @include('includes.header')
  <main>
    <div class="max-w-7xl mx-auto container">
      <!-- Main layout content -->
        @yield('content')
      <!-- End  -->
    </div>
  </main>
</div>

@include('includes.footer')
