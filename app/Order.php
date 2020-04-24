<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'total', 'sub_total', 'completed_at'
  ];

  public function user()
  {
    return $this->belongsTo(User::class);
  }

  public function products()
  {
    return $this->belongsToMany(Product::class);
  }
}
