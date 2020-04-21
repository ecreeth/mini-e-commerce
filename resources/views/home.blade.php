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

    <div id="example"></div>
    <div class="mt-8 grid grid-cols-4 row-gap-8 col-gap-6">
      @php
      for ($i=1; $i <= 12; $i++) {
        echo '
        <div class="product-card-container relative">
          <img src="/images/computer.png" class="bg-gray-200 object-cover w-full h-48 rounded-lg mb-px" />
            <div class="flex justify-between mt-2 items-center ">
              <a href="'.route('products.show', $i).'" class="hover:underline font-bold">Animated Sticker Pack</a>
              <span
                class="rounded bg-gray-100 border border-gray-200 text-sm px-2 py-px text-blue-700"
                title="Precio del art&iacute;culo">$25.00</span>
            </div>
            <p class="text-sm">Por <span class="font-medium text-gray-800 hover:underline cursor-pointer">Carrot Labs</span> en <a href="#" class="text-blue-500 hover:underline">Pc\'s</a></p>
            <div
            class="absolute top-0 rounded-lg right-0 w-full h-48 bg-gray-300 hidden product-card-hover">
              <div class="flex flex-col items-center justify-center h-full text-sm">
                <img class="h-6" src="/images/icon-cart.svg" alt="">
                <a href="#" class="shadow-lg text-white rounded px-4 py-1 mt-4" style="background: #353535;">+ Agregar al carrito</a>
              </div>
            </div>
        </div>';
      }
      @endphp
    </div>
@endsection
