<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Support\Facades\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;
use App\Http\Resources\ProductResource;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Product $product): Response
    {
        return Inertia::render('Products/Index', [
            'filters' => Request::all('search'),
            'products' => Product::latest()
                          ->filter(Request::only('search'))
                          ->paginate(10)
                          ->appends(Request::all())
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Products/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(): RedirectResponse
    {
        $validated = Request::validate([
            'title' => 'required|string|max:150',
        ]);

        $product = new Product($validated);
        $product->save();

        // Redirect to the index page
        return redirect(route('products'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        return Inertia::render('Products/Edit', [
            'product' => new ProductResource($product)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Product $product): RedirectResponse
    {
        $validated = Request::validate([
            'title' => 'required|string|max:150',
        ]);

        $product->update($validated);

        return redirect(route('products'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product): RedirectResponse
    {
        $product->delete();

        return redirect(route('products'));
    }
}
