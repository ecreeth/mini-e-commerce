<?php

namespace App\Http\Controllers;

use App\{Category, Product};
use App\Http\Resources\{CategoryResource, ProductResource};

class CategoryController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return CategoryResource::collection(Category::paginate(10));
  }

  /**
   *
   * @return \Illuminate\Http\Response
   */
  public function categoryProducts(int $category)
  {
    return ProductResource::collection(
      Product::where('category_id', $category)->paginate(10)
    );
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Category  $category
   * @return \Illuminate\Http\Response
   */
  public function show(Category $category)
  {
    return new CategoryResource($category);
  }
}
