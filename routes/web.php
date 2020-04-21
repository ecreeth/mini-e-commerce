<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/', 'home');

Route::view('/user/{user}/cart', 'cart.index')->name('cart.index');

Route::view('/product/{product}', 'products.show')->name('products.show');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
