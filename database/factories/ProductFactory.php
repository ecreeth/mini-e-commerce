<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\{Product};
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {

  $products = [
    'Panasonic Smart Viera VT50',
    'Microsoft Surface RT',
    'Amazon Kindle Fire HD',
    'Dell UltraSharp U2713HM',
    'Lenovo IdeaCentre A720',
    'Sony Bloggie Live TS55 ',
    'Nvidia GeForce GTX 680',
    'Radeon 7970 GHz Edition',
    'Astro Wireless Headset ',
    'Logitech Ultrathin',
    'Sensible Vision Access',
    'Vizio M3D470KD',
    'Netgear NeoTV Max',
    'Epson WorkForce WP-4540',
    'Lytro Light-Field Camera',
    'Western Digital Passport',
    'Maingear Shift Stock',
    'Panasonic HC-V700M',
    'Logitech HD Pro Webcam ',
    'Asus Xonar Essence One',
    'Sony Handycam HDR',
    'Stardock Multiplicity 2.0',
    'Seagate Momentus Hybrid',
    'Sony Cyber-shot RX100',
    'Pinball Arcade',
  ];

  return [
    'name' => $faker->unique()->randomElement($products),
    'cover' => $faker->randomElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
    'category_id' => $faker->randomElement([1, 2, 3, 4, 5, 6, 7]),
    'description' => $faker->paragraph(2, true),
    'specifications' => $faker->text,
    'price' => $faker->randomFloat(NULL, 10, 200),
  ];
});
