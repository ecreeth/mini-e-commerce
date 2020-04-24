<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\{Product};
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
  return [
    'name' => $faker->name,
    'cover' => $faker->randomElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
    'category_id' => $faker->randomElement([1, 2, 3, 4, 5, 6, 7]),
    'description' => $faker->paragraph(2, true),
    'specifications' => $faker->text,
    'price' => $faker->randomFloat(NULL, 10, 200),
  ];
});
