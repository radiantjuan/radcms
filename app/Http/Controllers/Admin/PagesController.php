<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\PagesResources;
use App\Models\Contents;
use App\Models\Pages;
use Illuminate\Http\Request;

class PagesController extends Controller {
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request) {
        //
        return response()->json(Pages::orderBy($request->sorting, $request->direction)->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request) {
        //
        $request->validate([
            'title' => 'required|min:6'
        ]);

        $create = new Pages();
        $create->title = $request->title;
        $create->published = $request->published;
        $create->save();

        return response()->json($create->id);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \App\Http\Resources\PagesResources
     */
    public function show($id) {
        //
        return new PagesResources(Pages::with(['contents' => function($query) {
            return $query->with('children_content')->with('content_types')->where('parent_id', null);
        }])->find($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int                      $id
     * @return void
     */
    public function update(Request $request, $id) {
        //
        $request->validate([
            'title' => 'required|min:6'
        ]);

        $update = Pages::find($id);
        $update->title = $request->title;
        $update->published = $request->published;
        $update->update();

        return $update;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {
        //
    }
}
