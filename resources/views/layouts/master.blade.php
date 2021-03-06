<!DOCTYPE html>
<html lang="es_DO">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>E-Commerce</title>
  <link rel="stylesheet" href="{{ asset('css/app.css') }}">
  <style>
    .product-card-container:hover .product-card-hover{
       background: #1d1d1d;
       display: block;
     }
 </style>
</head>
<body style="background: #353535;">
  @include('includes.header')
  <main>
    <div class="max-w-7xl mx-auto container relative">
        @yield('content')
    </div>
  </main>

@include('includes.footer')
