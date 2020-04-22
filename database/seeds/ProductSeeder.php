<?php

use App\{Product, Category};
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(Product::class, 50)
      ->create()
      ->each(function ($product) {
        $product->category()->associate(
          factory(Category::class)->make()
        );
      });
  }
}
