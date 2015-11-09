<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/hello', function () {
    return "hello";
});

Route::get('welcome/hello','WelcomeController@hello');

Route::get('/hello/index' ,'HelloController@index');

Route::get('/ais/index' ,function()
{
    return view('ais.index');
});

Route::resource('/test', 'SearchController'
//    function(){
//    $datas = \App\UserLoginLog::where(function($query){
//
//    $search_input = Input::has('search') ? Input::get('search') : null;
//
//    if(isset($search_input)){
//        $query->orWhere('first_name','=',$search_input)
//              ->orWhere('last_name','=' ,$search_input);
//    }
//
//    })->get();
//
//    return view('ais.test',compact(['datas']));
//}
);

Route::resource('articles', 'HelloController');

/* Dashboard */

Route::get('/ais/trend', function(){
    return view('ais.trend');
});

Route::get('/ais/process_view', function(){
    return view('ais.process_view');
});


Route::get('/ais/soot_blower', function(){
    return view('ais.soot_blower');
});

Route::get('/ais/trend_color', function(){
    return view('ais.trend_color');
});

Route::get('/ais/design_trend', function(){
    return view('ais.design_trend');
});

Route::get('/ais/design_calculation', function(){
    return view('ais.design_calculation');
});

Route::get('/ais/form_calculation', function(){
    return view('ais.form_calculation');
});
    




Route::get('ais/test', ('SearchController@index'));

Route::get('/ais/test2' ,('SearchController@test'));

Route::get('/edit/{user_login_log_id}', ('searchController@edit'));

Route::get('/a', function(){
    return view('ais.new');
});

/* ทั่วไป */


Route::resource('/ais/statistics', 'StatisticsController@search');


Route::resource('/ais/addUser', 'AddUserController');

Route::get('/ais/addUser/store', 'AddUserController@store');

Route::get('/addUser/deleteSelect', 'AddUserController@deleteSelect');

Route::get('/addUser/destroy/{ZZ}', 'AddUserController@destroy');


Route::resource('/ais/tagConfiguration', 'TagConfigController');

Route::get('/ais/tagConfiguration/store', 'TagConfigController@store');

Route::get('/tagConfiguration/deleteSelect', 'TagConfigController@deleteSelect');

Route::get('/tagConfiguration/delete/{A}', 'TagConfigController@destroy');


Route::resource('/ais/pointConfiguration', 'PointConfigController');

Route::get('/ais/pointConfiguration/store', 'PointConfigController@store');

Route::get('/pointConfiguration/deleteSelect', 'PointConfigController@deleteSelect');

Route::get('/pointConfiguration/delete/{A}', 'PointConfigController@destroy');


Route::resource('/ais/serverSetting', 'ServController');

Route::get('/ais/serverSetting/store', 'ServController@store');


Route::get('/ais/login', function(){
    return view('ais.login');
});


    

