<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Validator;

class UserCtrl extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return User::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $validator = Validator::make($request->all(), [
        //     'name' => 'required|min:3|max:255',
        //     'email' => 'required|email|max:255|unique:users',
        //     'password' => 'required|min:6|max:20',
        // ], [
        //     'email.unique' => 'Email already exists. Try another.',
        // ]);

        $inputs = $request->all();
        $rules = [
            'name' => 'required|min:3|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6|max:20',
        ];
        $messages = [
            'email.unique' => 'Email already exists. Try another.',
        ];
        $validator = Validator($inputs, $rules, $messages);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        if ($user) {
            // return response()->json($user, 201);
            return response()->json(['message' => 'User created successfully.', 'user' => $user], 201);
        } else {
            return response()->json(['message' => 'User not created'], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $validator = Validator::make(['id' => $id], [
            'id' => 'required|exists:users,id',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        //
        return User::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $validator = Validator::make($request->all(), [
            'name' => 'min:3|max:255',
            'email' => 'email|max:255',
            'password' => 'min:6|max:20',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = User::find($id);
        $user->update($request->all());

        return response()->json([
            'message' => 'Successfully updated user!',
            'user' => $user
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $validator = Validator::make(['id' => $id], [
            'id' => 'required|exists:users,id',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = User::find($id);
        $user->delete();

        return response()->json([
            'message' => 'Successfully deleted user!'
        ]);
    }

    public function login(Request $request)
    {

        // return $request->all();

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|min:6|max:20',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        if (password_verify($request->password, $user->password)) {
            return response()->json(['responseCode' => 0, 'message' => 'Login successful', 'user' => $user], 200);
        } else {
            return response()->json(['message' => 'Invalid password'], 400);
        }
    }
}
