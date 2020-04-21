@extends('layouts.master')

@section('content')

<header class="bg-white shadow container mx-auto">
  <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
    <h1 class="text-3xl font-bold leading-tight text-gray-900">
      Filters goes here
    </h1>
  </div>
</header>

    <div id="example"></div>

    <div class="mt-8 grid grid-cols-4 row-gap-8 col-gap-6">
      @php
      for ($i=1; $i <= 12; $i++) {
        echo '
        <div>
          <img src="/images/computer.png" class="bg-gray-200 object-cover w-full h-48 rounded-lg mb-px" />
            <div class="flex justify-between mt-2 items-center">
              <a href="'.route('products.show', $i).'" class="hover:underline font-bold">Animated Sticker Pack</a>
              <span
                class="rounded bg-gray-100 border border-gray-200 text-sm px-2 py-px text-blue-700"
                title="Precio del art&iacute;culo">$25.00</span>
            </div>
            <p class="text-sm">Por <span class="font-medium text-gray-800 hover:underline cursor-pointer">Carrot Labs</span> en <a href="#" class="text-blue-500 hover:underline">Pc\'s</a></p>
        </div>';
      }
      @endphp
    </div>
@endsection
