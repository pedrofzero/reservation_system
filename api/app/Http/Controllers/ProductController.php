<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Lib\Responses;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $list = ProductResource::collection(Product::where('user_id', auth()->user()->id)->get());

        return $this->response(Responses::SUCCESS, $list);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $name = $request->input('name');
        $logo = $request->file('logo');

        if (!$name || !$logo) return $this->response(Responses::ERROR['invalid_data']);

        $product = new Product();
        $product->name = $name;
        $product->user_id = Auth::user()->id;

        $imgName = str()->random();
        
        $product->logo = $imgName . '.' . $logo->extension();
        $logo->storeAs(
            'images',
            $imgName . '.' . $logo->extension(),
            'public'
        );

        $product->save();

        return $this->response(Responses::SUCCESS);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::find($id);
        if (!$product) return $this->response(Responses::ERROR['invalid_data']);

        return $this->response(Responses::SUCCESS, new ProductResource($product));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $product = Product::find($id);
        if (!$product) return $this->response(Responses::ERROR['invalid_data']);

        if ($product->user_id !== Auth::user()->id) return $this->response(Responses::ERROR['no_permission']);

        $name = $request->input('name');
        $logo = $request->input('logo');

        if ($name) $product->name = $name;
        if ($logo) {
            $imgName = str()->random();
        
            $product->logo = $imgName . '.' . $logo->extension();
            $logo->storeAs(
                'images',
                $imgName . '.' . $logo->extension(),
                'public'
            );
        }

        $product->save();
        return $this->response(Responses::SUCCESS, ['a' => $name]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = Product::find($id);

        if (!$product) return $this->response(Responses::ERROR['invalid_data']);
        if ($product->user_id !== Auth::user()->id) return $this->response(Responses::ERROR['no_permission']);

        $product->delete();
        return $this->response(Responses::SUCCESS);
    }
}
