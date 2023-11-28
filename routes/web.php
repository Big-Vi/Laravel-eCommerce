<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\CollectionsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/products', [ProductsController::class, 'index'])->name('products');
Route::post('/products', [ProductsController::class, 'store'])->name('products.store');
Route::get('/products/new', [ProductsController::class, 'create'])->name('products.create');
Route::get('/products/{product}/edit', [ProductsController::class, 'edit'])->name('products.edit');
Route::put('/products/{product}', [ProductsController::class, 'update'])->name('products.update');
Route::delete('/products/{product}', [ProductsController::class, 'destroy'])->name('products.destroy');

Route::get('/collections', [CollectionsController::class, 'index'])->name('collections');
Route::post('/collections', [CollectionsController::class, 'store'])->name('collections.store');
Route::get('/collections/new', [CollectionsController::class, 'create'])->name('collections.create');
Route::get('/collections/{collection}/edit', [CollectionsController::class, 'edit'])->name('collections.edit');
Route::put('/collections/{collection}', [CollectionsController::class, 'update'])->name('collections.update');
Route::delete('/collections/{collection}', [CollectionsController::class, 'destroy'])->name('collections.destroy');
