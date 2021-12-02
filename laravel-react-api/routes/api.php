<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserCtrl;

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

Route::post('/register', [UserController::class, 'register']);
Route::post('/login2', [UserController::class, 'login']);
Route::post('/login', [UserCtrl::class, 'login']);

Route::get('/users', [UserCtrl::class, 'index']);
Route::post('/users', [UserCtrl::class, 'store']);
Route::get('/users/{id}', [UserCtrl::class, 'show']);
Route::put('/users/{id}', [UserCtrl::class, 'update']);
Route::delete('/users/{id}', [UserCtrl::class, 'destroy']);



// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
