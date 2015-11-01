<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use \App\Model\AddUserModel;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Pagination\LengthAwarePaginator;

class AddUserController extends Controller
{
    public function index()
    {

        $info_employee = AddUserModel::orderBy('ZZ','ASC')->paginate(12);
        $info_employee->setPath('/ais/addUser');

        return view('ais/addUser', ['info_employee'=>$info_employee]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $id = $request->input('empId');
        if($id!=null) {
            $emp = AddUserModel::find($id);
            $emp->A = $request->input('empNo');
            $emp->B = $request->input('empTitle');
            $emp->C = $request->input('empFirstName') . "   " . $request->input('empLastName');
            $emp->D0 = $request->input('empPriority');

            $emp->save();
            session()->flash('message', ' Info save successfuly.');
        }else{
            $maxId = DB::table('mmemployee_table')->max('ZZ');
            $emp = new AddUserModel();
            $emp->ZZ = $maxId+1;
            $emp->A = $request->input('empNo');
            $emp->B = $request->input('empTitle');
            $emp->C = $request->input('empFirstName') . "   " . $request->input('empLastName');
            $emp->D0 = $request->input('empPriority');
            $emp->save();
            session()->flash('message', ' Info save successfuly.');
        }
        return redirect('ais/addUser');
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
    public function update(Request $request, $id)
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

//        AddUserModel::find(explode(',', $id));
//        alert($id);
    //$id=$request->input('empId');
        foreach($_GET['checkbox'] as $check) {
            //echo $check . ', ';
            AddUserModel::find($check)->delete();
        }
        return redirect('ais/addUser');
    }

    public function destroy($id)
    {
        AddUserModel::find($id)->delete();

        return redirect('ais/addUser');
    }
}
