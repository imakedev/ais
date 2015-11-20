<?php
/**
 * User: imake
 * Date: 12/11/15
 * Time: 16:35
 */

namespace App\Http\Controllers\Ajax;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use \App\Model\MmtrendModel;
use \App\Model\MmnameModel;
use \App\Model\MmpointModel;
use Log;
class TrendDesignAjax extends Controller
{
    public function listMmTrend(Request $request){
        Log::info("Into TrendDesignAjax callAjax");
        //Log::info(request('xx')['yy']);
        $g_data=request('zz');
        $mmnameM = DB::table('mmname_table')->where('ZZ', $g_data)->first();
        $trendDesignsM = DB::table('mmtrend_table as mmtrend ')
          //  ->join('mmname_table as mmname ', 'mmtrend.G', '=', 'mmname.ZZ')
            //   ->join('orders', 'users.id', '=', 'orders.user_id')
            //   ->select('users.*', 'contacts.phone', 'orders.price')
          //  ->select('mmtrend.*', 'mmname.A')
            ->where('mmtrend.G', '=', $g_data)
            ->orderBy('mmtrend.A','ASC')
            ->paginate(10);
       // $data   = array('value' => request('xx').' some data');
       // return response()->json(['name' => 'Abigail', 'state' => 'CA']);
        //return response()->json($trendDesignsM);
        return response()->json(['trendDesignsM'=>$trendDesignsM->toJson(),
            'paging' => $trendDesignsM->render(),
            'mmnameM'=>json_encode($mmnameM)]);
    }
    public function getMmTrend(Request $request){
        $zz_data=request('ZZ');
        $g_data=request('G');
        Log::info("Into getMmTrend callAjax ZZ[".$zz_data."],G[".$g_data."]");

        $mmtrendM = DB::table('mmtrend_table')->where('ZZ', $zz_data)->first();
        $mmnameM =null;
        $mmpointM=null;

        $mmnameM = DB::table('mmname_table')->where('ZZ', $g_data)->first();

        if($mmtrendM!=null) {
            Log::info("H " . $mmtrendM->H);
            $mmpointM = DB::table('mmpoint_table')->where('A', $mmtrendM->H)->first();
        }

       // Log::info("lenth ".sizeof($mmtrendM));
        return response()->json(['mmtrendM'=>json_encode($mmtrendM),
            'mmnameM'=>json_encode($mmnameM),
            'mmpointM'=>json_encode($mmpointM)]);
    }
    public function getMmname(Request $request){
        Log::info("Into getMmname callAjax");
        // do something
        $mmnameM = MmnameModel::where('ZZ', request('ZZ'))
           // ->orderBy('name', 'desc')
           // ->take(10)
            ->get();
        //return response()->json(['mmnameM'=>json_encode($mmnameM)]);
        return response()->json(['mmnameM'=>json_encode($mmnameM)]);
    }

    public function postMmTrend(Request $request){
        Log::info("Into postMmTrend callAjax");
        $mode=request("mode");
        $a=request("A");
        $g0=request("G0");
        $g1=request("G1");
        $f=request("F");
        $b=request("B");
        $g=request("G");
        $mmname_zz=request("ZZ");


        $mmnameModel=null;
        Log::info("test->".$request->input('A'));
        $mmpointM = DB::table('mmpoint_table')->where('A', $a)->first();
        $c=null;
        $d=null;
        if($mmpointM!=null){
            $c=$mmpointM->B;
            if($b=='4'){
                $d=$mmpointM->C4;
            }else if($b=='5'){
                $d=$mmpointM->C5;
            }else if($b=='6'){
                $d=$mmpointM->C6;
            }else if($b=='7'){
                $d=$mmpointM->C7;
            }
        }
        if($mode=='add'){
            $mmtrendModel = new MmtrendModel();
            $maxId = DB::table('mmtrend_table')->where("G",$g)->max('A');
            Log::info("maxId->".$maxId);
            $mmtrendModel->A =$maxId+1;;

            $mmtrendModel->B =$b;
            $mmtrendModel->C =$c;
            $mmtrendModel->D =$d;
            $mmtrendModel->E =$f;
            $mmtrendModel->F0 =$g0;
            $mmtrendModel->F1 =$g1;
            $mmtrendModel->G =$g;
            $mmtrendModel->H =$a;
            $mmtrendModel->ZZ =$mmname_zz;
            $mmtrendModel->save();
            session()->flash('message', ' Info save successfuly.');
        }else{
            $mmtrendModel = MmtrendModel::find($mmname_zz);
            $mmtrendModel->B =$b;
            $mmtrendModel->C =$c;
            $mmtrendModel->D =$d;
            $mmtrendModel->E =$f;
            $mmtrendModel->F0 =$g0;
            $mmtrendModel->F1 =$g1;
            $mmtrendModel->G =$g;
            $mmtrendModel->H =$a;
            //$mmtrendModel->ZZ =$mmname_zz;
            $mmtrendModel->save();
            session()->flash('message', ' Info update successfuly.');
        }

        return response()->json(['mmtrendM'=>json_encode($mmnameModel)]);

    }

    public function postMmname(Request $request){
        Log::info("Into postMmnam callAjax");
        // do something
        $mode=request("mode");
        $mmname_a=request("A");
        $mmname_zz=request("ZZ");
        $mmnameModel=null;
        Log::info("test->".$request->input('A'));
        if($mode=='add'){
            $mmnameModel = new MmnameModel();
            $mmnameModel->A =$mmname_a;
            $mmnameModel->save();
            session()->flash('message', ' Info save successfuly.');
        }else{
            $mmnameModel = MmnameModel::find($mmname_zz);
            $mmnameModel->A =$mmname_a;
            $mmnameModel->save();
            session()->flash('message', ' Info update successfuly.');
        }

        return response()->json(['mmnameM'=>json_encode($mmnameModel)]);
    }
    public function deleteMmname(Request $request){
        $mode=request('mode');
        $mmnameM=null;
        if($mode=='deleteAll'){
            $ids=request('ids');
            foreach($ids as $id) {
                $mmnameM= MmnameModel::find($id);
                $mmnameM->delete();
            }

        }else{
            $id=request('ZZ');
            Log::info("deleteMmname [".$id."] x");
            $mmnameM= MmnameModel::find($id);
            $mmnameM->delete();
        }
        session()->flash('message', ' Info Delete successfuly.');
        return response()->json(['mmnameM'=>json_encode($mmnameM)]);
    }
    public function deleteMmtrend(Request $request){
        $mode=request('mode');
        $mmtrendM=null;
        if($mode=='deleteAll'){
            $ids=request('ids');
            foreach($ids as $id) {
                $mmtrendM= MmtrendModel::find($id);
                $mmtrendM->delete();
            }

        }else{
            $id=request('ZZ');
            Log::info("deleteMmtrend [".$id."] x");
            $mmtrendM= MmtrendModel::find($id);
            $mmtrendM->delete();
        }
        session()->flash('message', ' Info Delete successfuly.');
        return response()->json(['mmtrendM'=>json_encode($mmtrendM)]);
    }
    public  function searchMmpoint(Request $request){


        $keyword=request('keyword');
        $h_id=request('H');
        $datas = MmpointModel::query();
        Log::info("keyword [".$keyword."] ");
        if (sizeof($keyword)>0) {
            $datas->where('B','LIKE', "%".$keyword."%");
        }
        $lists = $datas->take(9);
        if($h_id!='0'){
            $lists = DB::table('mmpoint_table')->where('A',$h_id)->union($lists);
        }
            $lists =$lists->get();


        //$lists = $datas->orderBy('B','ASC')->take(9)->union($old_mmpoint)->get();
        return response()->json(['mmpointM'=>json_encode($lists)]);
    }
}
