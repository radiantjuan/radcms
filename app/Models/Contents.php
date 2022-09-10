<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contents extends Model {
    use HasFactory;

    public function pages() {
        return $this->belongsTo(Pages::class);
    }

    public function widgets() {
        return $this->hasOne(Widgets::class, 'id', 'widgets_id');
    }

    public function content_types() {
        return $this->hasOne(ContentType::class, 'id', 'content_types_id');
    }

    public function children_content() {
        return $this->hasMany(self::class, 'parent_id', 'id');
    }
}
