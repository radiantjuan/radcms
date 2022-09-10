<?php

namespace Database\Seeders;

use App\Models\ContentType;
use Illuminate\Database\Seeder;

class ContentTypeSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        //
        $content_types = [
            'row',
            'column',
            'text',
            'textarea',
            'image',
            'button',
            'header'
        ];

        foreach($content_types as $content_type) {
            ContentType::create([
                'name' => $content_type
            ]);
        }

    }
}
