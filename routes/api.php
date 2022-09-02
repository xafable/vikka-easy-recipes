<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/get_me', function (Request $request) {
    return response()->json([
        'success' => true,
        'message' => 'Вход выполнен',
        'user' => $request->user(),
    ],200);

});


Route::controller(\App\Http\Controllers\CategoryController::class)->group(function () {
    Route::get('/categories/', 'index');
    Route::get('/category/{id}/sub_categories', 'getSubCategories');

});

Route::controller(\App\Http\Controllers\UserController::class)->group(function () {
    Route::post('/register/', 'store');
    Route::post('/login/', 'auth');
});

Route::controller(\App\Http\Controllers\RecipeController::class)->group(function () {
    Route::get('/recipes/', 'index');
    Route::get('/recipe/{id}', 'get');

});

Route::get('/exec',function (){
    \App\Models\Recipe::factory()->count(50)->create();
    return 200;
});

