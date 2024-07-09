<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasUuids, HasFactory;

    protected $fillable = [
        'name',
        'description',
        'logo'
    ];

    public function reservations(): HasMany
    {
        return $this->hasMany(Reservation::class);
    }
}
