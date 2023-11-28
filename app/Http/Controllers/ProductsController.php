<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Collection;
use Illuminate\Support\Facades\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;
use App\Http\Resources\ProductResource;
use App\Http\Resources\CollectionResource;
use App\Http\Resources\CollectionCollection;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
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
        $collections = Collection::all();

        return Inertia::render('Products/Create', [
            'collections' => new CollectionCollection($collections)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(): RedirectResponse
    {
        $validated = Request::validate([
            'title' => 'required|string|max:150',
            'collectionsSelected' => 'array'
        ]);

        $product = new Product($validated);
        $product->save();
        $product->collections()->attach($validated['collectionsSelected']);

        // Redirect to the index page
        return redirect(route('products'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        $product = $product->load('collections');
        $collections = Collection::all();

        return Inertia::render('Products/Edit', [
            'product' => new ProductResource($product),
            'collections' => new CollectionCollection($collections),
            'collectionsSelected' => new CollectionCollection($product->collections)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Product $product): RedirectResponse
    {
        $validated = Request::validate([
            'title' => 'required|string|max:150',
            'collectionsSelected' => 'array'
        ]);

        $product->update($validated);
        
        // If empty option selection from front-end, remove the data from pivot table else update.
        if(!$validated['collectionsSelected'] or $validated['collectionsSelected'][0] == null) {
            $product->collections()->detach();
        } else {
            $product->collections()->sync($validated['collectionsSelected']);
        }

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
