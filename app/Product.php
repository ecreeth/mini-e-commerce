<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'name', 'description', 'specifications', 'price',
  ];

  public function category()
  {
    return $this->belongsTo(Category::class);
  }

  public function images()
  {
    return $this->hasMany(Image::class);
  }

  public function orders()
  {
    return $this->belongsToMany(Order::class);
  }
}
