@extends('layouts.master')

@section('content')

<header class="bg-white shadow container mx-auto">
  <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
    <h1 class="text-3xl font-bold leading-tight text-gray-900">
      Filters goes here
    </h1>
  </div>
</header>

<style>
  .product-card-container, .product-card-hover{
    transition: all 2s;
  }
   .product-card-container:hover .product-card-hover{
      background: #1d1d1d;
      /* opacity: 0.8; */
      display: block;
    }
</style>

    <div id="products"></div>
@endsection
