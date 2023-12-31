<?php

namespace App\Http\Controllers;

use App\Models\Inventory;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $product = Product::all();
        return $product;

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $existingProduct = Product::where('name', $request->name)->first();

    if ($existingProduct) {
        if ($existingProduct->price != $request->price) {

            $product = Product::create([
                "name" => $request->name,
                "description" => $request->description,
                "price" => $request->price,
                "product_category_id" => $request->product_category_id,
            ]);

            return response()->json($product, 201);
        } else {
            return response()->json(['message' => 'Product with the same name and price already exists.'], 409);
        }
    }

    $product = Product::create([
        "name" => $request->name,
        "description" => $request->description,
        "price" => $request->price,
        "product_category_id" => $request->product_category_id,
    ]);

    return response()->json($product, 201);
}



    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        $product = Product::where('id', $request->id)
            ->orwhere('name', $request->name)
            ->orwhere('price', $request->price)
            ->orwhere('product_category_id', $request->product_category_id)->get();
        return $product;

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request)
    {
        $product = Product::where('id', $request->id)
            ->orwhere('name', $request->name)->get();
        return $product;

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {

        $product = Product::where('id', $request->id)->first();

        $product->update([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,


        ]);

        $product->save();
        return $product;

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $product = Product::find($request->id);

    if (!$product) {
        return response()->json(['message' => 'Product not found'], 404);
    }

    $existingProductOnInventory = Inventory::where('product_id', $request->id)->first();
    
    if ($existingProductOnInventory) {
        return response()->json(['message' => 'Product is being used in the inventory'], 409);
    }

    $product->delete();
    return response()->json(['message' => 'Product deleted successfully'], 200);



    }
}
