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
        echo <<<HTML
        <div>
          <div class="bg-gray-200 h-48 rounded-lg mb-px"></div>
            <div class="flex justify-between mt-2 items-center">
              <h2>Animated Sticker Pack</h2>
              <span class="rounded bg-gray-300 text-sm px-2 py-px text-blue-600">\$25.00</span>
            </div>
            <p class="text-sm">Por <span class="font-medium text-gray-800 hover:underline cursor-pointer">Carrot Labs</span> en <a href="#" class="text-blue-500 hover:underline">Pc's</a></p>
        </div>
HTML;
      }
      @endphp
    </div>
@endsection