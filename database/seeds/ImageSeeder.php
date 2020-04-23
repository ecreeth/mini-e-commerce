<?php

use App\Image;
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
    factory(Image::class, 25)->create();
  }
}
