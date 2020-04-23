<?php

namespace App\Http\Controllers;

use App\Product;
use App\Http\Resources\{ProductResource};

class ProductController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return ProductResource::collection(Product::paginate(10));
  }

  /**
   *
   * @return \Illuminate\Http\Response
   */
  public function orderBy(string $type)
  {
    return ProductResource::collection(
      Product::orderBy('name', $type)->paginate(10)
    );
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Product  $product
   * @return \Illuminate\Http\Response
   */
  public function show(Product $product)
  {
    return new ProductResource($product);
  }
}
