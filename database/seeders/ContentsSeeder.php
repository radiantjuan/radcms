<?php

namespace Database\Seeders;

use App\Models\Contents;
use Database\Factories\ContentsFactory;
use Illuminate\Database\Seeder;

class ContentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Contents::factory(ContentsFactory::class)->count(20)->create();
    }
}
