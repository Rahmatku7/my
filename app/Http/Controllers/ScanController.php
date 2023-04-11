<?php

namespace App\Http\Controllers;

use App\Models\Device;
use App\Models\Number;
use Illuminate\Http\Request;

class ScanController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Device $number)
    {
      
       return view('scan',[
           'number' => $number
       ]);
    }
}
