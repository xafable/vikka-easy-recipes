<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryCollection;
use App\Http\Resources\SubCategoryCollection;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    function index(){
        return response()->json([
            'success' => true,
            'categories' => new CategoryCollection(Category::all()),
        ]);
    }

    function getSubCategories($categoryId){
            return response()->json([
                'success' => true,
                'subCategories' => new SubCategoryCollection(
                    Category::query()
                    ->findOrFail($categoryId)
                    ->subCategories)
            ]);
    }
}
