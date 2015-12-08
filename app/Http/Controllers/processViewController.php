<?php
/**
 * User: kosit araomsava
 * Date: 8/12/15
 * Time: 13:45
 */

namespace App\Http\Controllers;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
//use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Input;
 use Illuminate\Support\Facades\DB;
 use Illuminate\Pagination\LengthAwarePaginator;
 use Log;

class processViewController  extends Controller{
    
    
   
    
    
    public function createDataPCVSteam47($paramPCV,$paramUnit,$parmEmpId,$paramFromDate,$paramToDate){
    
        Log::info("Into createDataPCVSteam47");
        
        $query="SELECT EvTime,D1,D2,D3,D4,D5,D6,D7,D8,D9,D10,D11,D12,D13,D2
                ,D14,D15,D16,D17,D18,D19
                ,D15,D16,D17,D18,D19,D20
                ,D16,D17,D18,D19,D20,D21
                from datau0$paramUnit 
                WHERE EvTime BETWEEN  '$paramFromDate' AND '$paramToDate'";
        $reslutQuery = DB::select($query);
        
        
        //return json_encode($reslutQuery);
        
        /*Create File*/
 
        $strFileName = "processView/flieProcessView/processViewJson-$paramPCV-$paramUnit-$parmEmpId.txt";
        $objCreate = fopen($strFileName, 'w');
        if($objCreate)
        {
            //echo '["createJsonSuccess"]';
            /*write flie here start.*/
            
            $strFileName = "processView/flieProcessView/processViewJson-$paramPCV-$paramUnit-$parmEmpId.txt";
            $objFopen = fopen($strFileName, 'w');
            $strText1 = json_encode($reslutQuery);
            fwrite($objFopen, $strText1);
            if($objFopen)
            {
                echo '["createJsonSuccess"]';
            }
            else
            {
                echo '["error"]';
            }
            fclose($objFopen);
            
            /*write flie here end.*/
        
        }else{
            echo "File Not Create.";
        }
        
        
        
       //http://localhost:9999/ais/processView/createDataPCVSteam47/11/4/11/2014-05-01%2000:00:00/2014-05-01%2001:00:00
  }
  
      public function readDataPCVSteam47($paramPCV,$paramUnit,$parmEmpId,$paramDate){
      
          Log::info("Into readDataPCVSteam47");
          
          /*
          $query="SELECT EvTime,D1,D2,D3,D4,D5,D6,D7,D8,D9,D10,D11,D12,D13,D2
          ,D14,D15,D16,D17,D18,D19
          ,D15,D16,D17,D18,D19,D20
          ,D16,D17,D18,D19,D20,D21
          from datau0$paramUnit
          WHERE EvTime ='$paramDate'";;
          $reslutQuery = DB::select($query);
          return json_encode($reslutQuery);
          */
          
         
      }
 
    
    
    
    
    
}