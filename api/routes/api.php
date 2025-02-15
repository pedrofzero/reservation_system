<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Route;


// Authentication
Route::post('/auth/login', [AuthController::class, 'login']);
Route::post('/auth/register', [AuthController::class, 'register']);

Route::middleware('auth:sanctum')->group(function () {
    Route::group(['prefix' => '/product'], function () {
        Route::get('/list', [ProductController::class, 'index']);
        Route::get('/details/{id}', [ProductController::class, 'show']);
        Route::post('/create', [ProductController::class, 'store']);
        Route::post('/edit/{id}', [ProductController::class, 'update']);
        Route::delete('/delete/{id}', [ProductController::class, 'destroy']);
    },
    // Route::group(['prefix' => '/product'], function () {
    //     Route::get('/list', [ProductController::class, 'index']);
    //     Route::get('/list', [ProductController::class, 'index']);
    // }

    )->middleware(['abilities:test']);
});

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
