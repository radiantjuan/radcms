<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ContentsFactory extends Factory {
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition() {
        return [
            'content_types_id' => 1,
            'parent_id' => null,
            'value' => null,
            'widgets_id' => null,
            'attributes' => '{"className":"row", "id":"InitialRow"}',
            'sorting' => 1,
            'pages_id' => rand(1,20),
        ];
    }
}
