<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pages extends Model {
    use HasFactory;

    protected $fillable = ['title', 'published'];

    /**
     * contents relationship
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function contents() {
        return $this->hasMany(Contents::class);
    }
}
