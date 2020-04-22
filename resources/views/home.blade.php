@extends('layouts.master')

@section('content')
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
