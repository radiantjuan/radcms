<?php

namespace Database\Seeders;

use App\Models\Pages;
use Database\Factories\PagesFactory;
use Illuminate\Database\Seeder;

class PagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Pages::factory(PagesFactory::class)->count(20)->create();
    }
}
