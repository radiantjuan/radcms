<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PagesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence(1),
            'published' => $this->faker->boolean()
        ];
    }
}
