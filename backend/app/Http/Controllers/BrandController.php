<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Brand;

class BrandController extends Controller
{
    public function index() {
        $data = Brand::select('id','name')->get();
        try {
            return response()->json(['status' => 'success', 'data' => $data],200);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()],500);
        }
    }
}
