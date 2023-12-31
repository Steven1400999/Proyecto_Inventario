<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Inventory;

class InventorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $inventory = new Inventory();
        $inventory->product_id = 1;
        $inventory->stock = 250;
        $inventory->admission_date = '2023-10-29';
        $inventory->supplier_id = 1;
        $inventory->save();


        $inventory = new Inventory();
        $inventory->product_id = 2;
        $inventory->stock = 564;
        $inventory->admission_date = '2023-10-30';
        $inventory->supplier_id = 2;
        $inventory->save();


        $inventory = new Inventory();
        $inventory->product_id = 3;
        $inventory->stock = 250;
        $inventory->admission_date = '2023-10-29';
        $inventory->supplier_id = 1;
        $inventory->save();

        $inventory = new Inventory();
        $inventory->product_id = 5;
        $inventory->stock = 564;
        $inventory->admission_date = '2023-10-30';
        $inventory->supplier_id = 1;
        $inventory->save();


        $inventory = new Inventory();
        $inventory->product_id = 8; 
        $inventory->stock = 150;
        $inventory->admission_date = '2023-11-01';
        $inventory->supplier_id = 2;
        $inventory->save();

        $inventory = new Inventory();
        $inventory->product_id = 1;
        $inventory->stock = 250;
        $inventory->admission_date = '2023-10-29';
        $inventory->supplier_id = 1;
        $inventory->save();

        $inventory = new Inventory();
        $inventory->product_id = 5;
        $inventory->stock = 564;
        $inventory->admission_date = '2023-10-30';
        $inventory->supplier_id = 1;
        $inventory->save();

        $inventory = new Inventory();
        $inventory->product_id = 7;
        $inventory->stock = 150;
        $inventory->admission_date = '2023-11-01';
        $inventory->supplier_id = 2;
        $inventory->save();

        $inventory = new Inventory();
        $inventory->product_id = 10;
        $inventory->stock = 100;
        $inventory->admission_date = '2023-11-02';
        $inventory->supplier_id = 3;
        $inventory->save();

        $inventory = new Inventory();
        $inventory->product_id =4;
        $inventory->stock = 300;
        $inventory->admission_date = '2023-11-03';
        $inventory->supplier_id = 4;
        $inventory->save();
    }
}
