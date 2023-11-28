<?php

namespace App\Http\Controllers;

use App\Models\Collection;
use Illuminate\Support\Facades\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;
use App\Http\Resources\CollectionResource;

class CollectionsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Collections/Index', [
            'filters' => Request::all('search'),
            'collections' => Collection::latest()
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
        return Inertia::render('Collections/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(): RedirectResponse
    {
        $validated = Request::validate([
            'title' => 'required|string|max:150',
        ]);

        $collection = new Collection($validated);
        $collection->save();

        // Redirect to the index page
        return redirect(route('collections'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Collection $collection)
    {
        return Inertia::render('Collections/Edit', [
            'collection' => new CollectionResource($collection)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Collection $collection)
    {
        $validated = Request::validate([
            'title' => 'required|string|max:150',
        ]);

        $collection->update($validated);

        return redirect(route('collections'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Collection $collection): RedirectResponse
    {
        $collection->delete();

        return redirect(route('collections'));
    }
}
