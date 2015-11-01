<?php

namespace App\Http\Controllers;

use \App\Model\StatisticsModel;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Input;
use Log;
use DB;
class StatisticsController extends Controller
{
    //
    public  function search(){
//        $datas = \App\Model\StatisticsModel::where(function($query){
//
//            $search_input = Input::has('search') ? Input::get('search') : null;
//
//            if(isset($search_input)){
//                $query->orWhere('first_name','=',$search_input)
//                    ->orWhere('last_name','=' ,$search_input);
//            }
//
//        })->get();
//
//        return view('ais/statistics', ['datas'=>$datas]);
//    }

        $datas = StatisticsModel::query();

        if (Input::has('search')) {
            $queryString = Input::get('search');
            $datas->orWhere('first_name', 'LIKE', "%$queryString%")
                ->orWhere('last_name', 'LIKE', "%$queryString%");
        }
// ... more clauses from the querystring
        $lists = $datas->orderBy('user_login_log_id','ASC')->paginate(5);

        return view('ais/statistics', ['lists'=>$lists]);
    }

}
