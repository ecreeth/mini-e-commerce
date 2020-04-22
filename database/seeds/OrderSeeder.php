<?php

use App\{User, Order};
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(Order::class, 50)
      ->create()
      ->each(function ($order) {
        $order->user()->associate(
          factory(User::class)->make()
        );
      });
  }
}
