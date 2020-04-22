<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request)
  {
    return [
      'id' => $this->id,
      'category' => new CategoryResource($this->category),
      'name' => $this->name,
      'cover' => $this->cover,
      'description' => $this->description,
      'specifications' => $this->specifications,
      'price' => number_format($this->price, 2, '.', ','),
      'created_at' => $this->created_at,
      'updated_at' => $this->updated_at,
    ];
  }
}
