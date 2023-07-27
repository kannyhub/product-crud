<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use PDF;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::join('categorys','products.brand','=','categorys.id')
        ->select('products.id','title','brand_name as brand','category','type','seller','rating')
        ->get();
        return response()->json(['status' => 'success','result' => $products],200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $rules = [
            'title' =>  'required',
            'brand' =>  'required',
            'price' =>  'required',
            'category' =>  'required',
            'type' =>  'required',
            'rating' =>  'required',
            'seller' =>  'required'
        ];
        $validation = validator($request->all(),$rules);
        if ($validation->fails()) {
            return response()->json(['status'=> 'error', 'message' => $validation->errors()],400);
        }

        try {
            Product::create(
                [
                    'title' =>  $request->title,
                    'brand' =>  $request->brand,
                    'type'  =>  $request->type,
                    'category'=>$request->category,
                    'price' =>  $request->price,
                    'rating'=>  $request->rating,
                    'seller'=>  $request->seller
                ]
            );
            return response()->json(['status' => 'success','message' => 'data inserted successfully'],200);
        } catch(\Exception $e) {
            return response()->json(['status' => 'error','message' => $e->getMessage()],500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getSingleProduct($id)
    {
        try {
            $product = Product::where('id',$id)->first();
            if ($product) {
                return response()->json(['status' => 'success', 'result' => $product],200);
            } else {
                return response()->json(['status' => 'error', 'result' => 'product not found'],400);
            }
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'result' => $e->getMessage()],500);
        }
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
        $rules = [
            'title' =>  'required',
            'brand' =>  'required',
            'price' =>  'required',
            'category' =>  'required',
            'type' =>  'required',
            'rating' =>  'required',
            'seller' =>  'required'
        ];
        $validation = validator($request->all(),$rules);
        if ($validation->fails()) {
            return response()->json(['status'=> 'error', 'message' => $validation->errors()],400);
        }

        try {
            $product = Product::where('id',$id)->first();
            if ($product) {
                $product->title = $request->title;
                $product->brand = $request->brand;
                $product->price = $request->price;
                $product->type = $request->type;
                $product->rating = $request->rating;
                $product->category = $request->category;
                $product->seller = $request->seller;
                $product->update();
                return response()->json(['status' => 'success', 'message' => 'product updated successfully'],200);
            } else {
                return response()->json(['error' => 'error', 'message' => 'product not found'],400);
            }
        } catch(\Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $product = Product::where('id',$id)->first();
            if ($product) {
                $product->delete();
                return response()->json(['status' => 'success', 'message' => 'product deleted successfully'],200);
            } else {
                return response()->json(['status' => 'error', 'message' => 'product not found'],400);
            }
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()],500);
        }
    }

    public function search($keyword) {
        // dd($keyword);
        try {
            $data = Product::join('categorys','products.brand','=','categorys.id')
                    ->where('title','like',"%".$keyword."%")
                    ->orWhere('type','like',"%".$keyword."%")
                    ->orWhere('category','like',"%".$keyword."%")
                    ->orWhere('categorys.brand_name','like',"%".$keyword."%")
                    ->orWhere('seller','like',"%".$keyword."%")
                    ->select('products.id','title','brand_name as brand','category','type','seller','rating')
                    ->get();
            return response()->json(['status' => 'success', 'data' => $data],200);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()],500);
        }
    }

    public function generatePDF() {
        $data = ['title' => 'Welcome to ItSolutionStuff.com'];
        $pdf = PDF::loadView('welcome', $data);
  
        return $pdf->stream('itsolutionstuff.pdf');
    }
}
