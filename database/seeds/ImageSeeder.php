<?php

use App\{Image, Product};
use Illuminate\Database\Seeder;

class ImageSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(Image::class, 100)->create();
  }
}
