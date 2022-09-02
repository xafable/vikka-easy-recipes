<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    function store(Request $request){

        //echo json_encode($request);

        $user = User::query()->create([
            'name'=> $request->name,
            'email'=> $request->email,
            'password' => Hash::make($request->password),
        ]);

        $token = $user->createToken('personal');


        return response()->json([
            'success' => true,
            'user_id' => $user->id,
            'token' => $token,
        ]);

    }

    function auth(Request $request){

      //  return response()->json([
      //      'success' => $request->email,
      // ]);

        $authenticated = Auth::attempt([
             'email'=>$request->email,
             'password'=>$request->password
        ]);

        if(!$authenticated)
            return response()->json([
                'success' => false,
                'message' => 'Неверный логин или пароль',
            ],401);


        $user = Auth::user();

        return response()->json([
            'success' => true,
            'message' => 'Вход выполнен',
            'user_id' => $user->id,
            'token' => $user->createToken('personal')->plainTextToken,
        ],200);
    }
}
