<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\OfficeSpaceResource;
use App\Models\OfficeSpace;
use Illuminate\Http\Request;

class OfficeSpaceController extends Controller
{
    public function index()
    {
        $cities = OfficeSpace::with('city')->get();
        return OfficeSpaceResource::collection($cities);
    }

    public function show(OfficeSpace $officeSpace)
    {

        $officeSpace->load(['city', 'photos', 'benefits']);
        return new OfficeSpaceResource($officeSpace);
    }
}
