<?php

namespace App\Http\Controllers;

use App\Models\Supplier;
use Illuminate\Http\Request;

class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $supplier = Supplier::all();
        return $supplier;


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

        $supplier = Supplier::create([
            'name' => $request->name,

        ]);

        $supplier->save();
        return $request;

    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {

        $supplier = Supplier::where('id', $request->id)
            ->orwhere('name', $request->name)->get();
        return $supplier;

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request)
    {

        $supplier = Supplier::where('id', $request->id)
            ->orwhere('name', $request->name)->get();
        return $supplier;



    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {

        $supplier = Supplier::where('id', $request->id)->first();

        $supplier->update([
            'name' => $request->name

        ]);
        $supplier->save();
        return $supplier;


    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {

        $supplier = Supplier::where('id', $request->id)
            ->orwhere('name', $request->name)->delete();
            
        return $supplier;

    }
}
