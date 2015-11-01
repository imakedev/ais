<?php

namespace App\Http\Controllers;

use \App\Model\PointConfigModel;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Input;
use Illuminate\Pagination\LengthAwarePaginator;
use DB;
class PointConfigController extends Controller
{
    //
    public  function index(){
        $points_config = PointConfigModel::orderBy('A','ASC')->paginate(12);
        $points_config->setPath('/ais/pointConfiguration');
        return view('ais/pointConfiguration', ['points_config'=>$points_config]);
    }
    public function store(Request $request)
    {
        $id = $request->input('poiId');
        if($id!=null) {
            $avgChk = Input::has('avg') ? Input::get('avg') : null;
            $point = PointConfigModel::find($id);
            $point->D = $request->input('poiAtom');
            if(isset($avgChk)){
                $point->E = "Yes";
            }else{
                $point->E = "No";
            }
            $point->F = $request->input('poiUnit');
            $point->G0 = $request->input('poiMax');
            $point->G1 = $request->input('poiMin');

            $point->save();
            session()->flash('message', ' Info save successfuly.');
        }else{
            $maxId = DB::table('mmpoint_table')->max('A');
            $avgChk = Input::has('avg') ? Input::get('avg') : null;
            $point = new PointConfigModel();
            $point->A = $maxId+1;
            $point->D = $request->input('poiAtom');
            if(isset($avgChk)){
                $point->E = "Yes";
            }else{
                $point->E = "No";
            }
            $point->F = $request->input('poiUnit');
            $point->G0 = $request->input('poiMax');
            $point->G1 = $request->input('poiMin');

            $point->save();
            session()->flash('message', ' Info save successfuly.');
        }
        return redirect('ais/pointConfiguration');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteSelect(Request $request){

        foreach($_GET['checkbox'] as $check) {

            PointConfigModel::find($check)->delete();
        }
        return redirect('ais/pointConfiguration');
    }

    public function destroy($id)
    {
        PointConfigModel::find($id)->delete();

        return redirect('ais/pointConfiguration');
    }
}