<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run() {
        $this->call([
            PagesSeeder::class,
            MenuSeeder::class,
            ContentTypeSeeder::class,
            ContentsSeeder::class
        ]);
    }
}
