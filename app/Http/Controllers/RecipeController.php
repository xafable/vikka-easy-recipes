<?php

namespace App\Http\Controllers;

use App\Http\Resources\RecipeCollection;
use App\Http\Resources\RecipeResource;
use App\Models\Recipe;
use Illuminate\Http\Request;

class RecipeController extends Controller
{
    function index(){
        return response()->json([
            'success' => true,
            'recipes' => new RecipeCollection(Recipe::query()->paginate(10)),
        ]);
    }

    function get($id){
        return response()->json([
            'success' => true,
            'recipe' => new RecipeResource(Recipe::query()->find($id)),
        ]);
    }


}
