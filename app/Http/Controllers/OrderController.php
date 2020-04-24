<?php

namespace App\Http\Controllers;

use App\{Order, User};
use Illuminate\Http\Request;

class OrderController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    $user = User::with('orders')->findOrFail(1);
    $orders = $user->orders()->paginate(10);
    return view('pages.orders.index', compact('user', 'orders'));
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $user = User::findOrFail(1);
    $order = $user
      ->orders()
      ->create([
        'total' => $request->total,
        'sub_total' => $request->total,
      ]);

    array_map(function ($product) use ($order) {
      $order->products()->attach([
        $product['id'] => ['quantity' => $product['quantity']]
      ]);
    }, $request->products);

    return [
      'message' => 'La orden ha sido creada con exito!'
    ];
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Order  $order
   * @return \Illuminate\Http\Response
   */
  public function show(Order $order)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Order  $order
   * @return \Illuminate\Http\Response
   */
  public function destroy(Order $order)
  {
    $order->products()->detach();
    return $order->delete();
  }
}
