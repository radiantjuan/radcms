<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ContentTypesResource;
use App\Models\ContentType;
use Illuminate\Http\Request;

class ContentTypesController extends Controller {
    /**
     * Handle the incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function __invoke(Request $request) {
        //
        return ContentTypesResource::collection(ContentType::all());
    }
}
