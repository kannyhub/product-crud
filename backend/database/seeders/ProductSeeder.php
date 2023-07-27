<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = [
            [
                'title' => 'pant',
                'type'  => 'pant',
                'brand' => 3,
                'price' => 800,
                'seller'=> 'amazon',
                'rating'=> 4.2,
                'category'=> 'male'
            ],
            [
                'title' => 'kurta',
                'type'  => 'kurta',
                'brand' => 4,
                'price' => 1200,
                'seller'=> 'amazon',
                'rating'=> 4.2,
                'category'=> 'kids'
            ],
            [
                'title' => 'shirt',
                'type'  => 'shirt',
                'brand' => 5,
                'price' => 1200,
                'seller'=> 'amazon',
                'rating'=> 4.2,
                'category'=> 'male'
            ],[
                'title' => 'plain shirt',
                'type'  => 'shirt',
                'brand' => 2,
                'price' => 400,
                'seller'=> 'flipkart',
                'rating'=> 4.3,
                'category'=> 'kids'
            ],
            [
                'title' => 'plain black pant',
                'type'  => 'pant',
                'brand' => 3,
                'price' => 900,
                'seller'=> 'amazon',
                'rating'=> 4.2,
                'category'=> 'kids'
            ],
            [
                'title' => 'kurta',
                'type'  => 'kurta',
                'brand' => 4,
                'price' => 1200,
                'seller'=> 'amazon',
                'rating'=> 4.2,
                'category'=> 'male'
            ],
            [
                'title' => 'shari',
                'type'  => 'shari',
                'brand' => 1,
                'price' => 1000,
                'seller'=> 'flipkart',
                'rating'=> 4.2,
                'category'=> 'female'
            ]
        ];
        Product::insert($products);
    }
}
