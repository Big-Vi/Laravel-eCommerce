<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Collection extends Model
{
    use HasFactory;

    protected $fillable = ['title'];

    public function products() {
        return $this->belongsToMany(Product::class, 'collection_product', 'collections_id', 'products_id');
    }

    public function scopeFilter($query, array $filters) {
        if(isset($filters['search'])) {
            $query->where('title', 'like', '%' . $filters['search'] . '%');
        }
    }
}
