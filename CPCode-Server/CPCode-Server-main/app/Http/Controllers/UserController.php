<?php

namespace App\Http\Controllers;


use App\Models\User ;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function emailCheck(Request $request)
    {
        $exists = User::where('email', $request->email)->exists();
        return response()->json(['exists' => $exists]);
    }

    public function signup(Request $request)
    {
        $validatedData = $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|min:8',
        ]);

        $user = User::create([
            'full_name' => $validatedData['full_name'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
        ]);

        return response()->json(['user' => $user ]);
    }

    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string|min:8',
        ]);

        // $user = DB::table('users')
        //     ->where('email', $validatedData['email']);
        $user = User::where('email', $validatedData['email'])->first();

        // Verify that the password matches the hashed password in the database
        if (!Hash::check($validatedData['password'], $user->password)) {
            return response()->json(['message' => 'Incorrect Password'],400);
        }

        return response()->json(['user'=>$user],200);
        
    }
}
