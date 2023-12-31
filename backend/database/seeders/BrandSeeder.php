<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Brand;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Brand::insert(
            [
                [
                    'name' => 'levis'
                ],
                [
                    'name' => 'zara'
                ],
                [
                    'name' => 'adidas'
                ],
                [
                    'name' => 'nike'
                ],
                [
                    'name' => 'H&M'
                ]
            ]
        );
    }
}
