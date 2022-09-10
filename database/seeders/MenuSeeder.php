<?php

namespace Database\Seeders;

use App\Models\Menu;
use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        $built_in_menu = [
            [
                'menu_type' => 'admin',
                'order' => 0,
                'label' => 'Dashboard',
                'route_name' => 'dashboard',
                'url' => '/admin',
                'classes' => 'nav-link text-white',
                'menu_id' => null,
            ],
            [
                'menu_type' => 'admin',
                'order' => 0,
                'label' => 'Pages',
                'route_name' => 'pages',
                'url' => '/admin/pages',
                'classes' => 'nav-link text-white',
                'menu_id' => null,
            ],
            [
                'menu_type' => 'admin',
                'order' => 0,
                'label' => 'Blogs',
                'route_name' => 'blogs',
                'url' => '/admin/blogs',
                'classes' => 'nav-link text-white',
                'menu_id' => null,
            ],
            [
                'menu_type' => 'admin',
                'order' => 0,
                'label' => 'Widgets',
                'route_name' => 'widgets',
                'url' => '/admin/widgets',
                'classes' => 'nav-link text-white',
                'menu_id' => null,
            ],
        ];

        foreach ($built_in_menu as $menu) {
            Menu::create([
                'menu_type' => $menu['menu_type'],
                'order' => $menu['order'],
                'label' => $menu['label'],
                'route_name' => $menu['route_name'],
                'url' => $menu['url'],
                'classes' => $menu['classes'],
                'menu_id' => $menu['menu_id']
            ]);
        }
    }
}
