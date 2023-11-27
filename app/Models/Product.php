<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['title'];

    public function scopeFilter($query, array $filters) {
        if(isset($filters['search'])) {
            $query->where('title', 'like', '%' . $filters['search'] . '%');
        }
    }
}
