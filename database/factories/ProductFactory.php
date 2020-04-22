<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\{Product, Category};
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'category_id' => factory(Category::class),
        'description' => $faker->paragraph(2, true),
        'specifications' => $faker->text,
        'price' => $faker->randomFloat(NULL, 500, 5000),
    ];
});