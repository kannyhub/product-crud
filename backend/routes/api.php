<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\CategoryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'product', 'as' => 'product.'],function() {
    Route::get('/all',[ProductController::class,'index']);
    Route::post('/create',[ProductController::class,'create']);
    Route::get('/{id}',[ProductController::class,'getSingleProduct']);
    Route::put('/update/{id}',[ProductController::class,'update']);
    Route::delete('/delete/{id}',[ProductController::class,'destroy']);
    Route::get('/search/{keyword}',[ProductController::class,'search']);
});

Route::group(['prefix' => 'brand', 'as' => 'brand.'],function() {
    Route::get('/all',[BrandController::class,'index']);
});

Route::group(['prefix' => 'category', 'as' => 'category.'],function() {
    Route::get('/all',[CategoryController::class,'index']);
});