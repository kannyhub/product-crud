<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

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

Route::get('/products',[ProductController::class,'index']);
Route::post('product/create',[ProductController::class,'create']);
Route::get('/product/{id}',[ProductController::class,'getSingleProduct']);
Route::put('product/update/{id}',[ProductController::class,'update']);
Route::delete('product/delete/{id}',[ProductController::class,'destroy']);
Route::get('product/search/{keyword}',[ProductController::class,'search']);
Route::get('brands',[ProductController::class,'getBrands']);
