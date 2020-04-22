<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\{Image, Product};
use Faker\Generator as Faker;

$factory->define(Image::class, function (Faker $faker) {
  return [
    'product_id' => factory(Product::class),
    'name' => $faker->imageUrl(),
  ];
});
