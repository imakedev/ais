<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Log;
use DB;
class HelloController extends Controller
{
    //
    public function index()
    {
        $title = 'Laravel 5 Fundamental';

        $subtitle = 'From basic to expert';
        //$articles2 = DB::select('select * from articles ');
        $articles = \App\Article::all();
        //  count((array)$obj);
        Log::info($articles[0]->EvTime);
        //Log::info($articles2[1]->name);
        return view('hello.index',
           // ['articles'=>compact($articles)]);
            ['title' => $title, 'subtitle' => $subtitle,'articles'=>$articles]);
    }

}
