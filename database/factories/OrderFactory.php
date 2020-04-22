<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\{User, Order};
use Faker\Generator as Faker;

$factory->define(Order::class, function (Faker $faker) {
    return [
      'user_id' => factory(User::class),
      'total' => 1000,
      'sub_total' => 1000,
      'completed_at' => $faker->dateTime(),
    ];
});
