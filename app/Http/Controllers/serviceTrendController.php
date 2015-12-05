<?php
/**
 * User: kosit araomsava
 * Date: 28/11/15
 * Time: 15:32
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

class serviceTrendController  extends Controller{
    
    
    public function getDataHru($point,$unit,$startTime,$endTime){
        
        Log::info("Into getDataHru");
        $query="select EvTime, $point from datahru$unit 
                WHERE EvTime BETWEEN  '$startTime' AND '$endTime'";
        $reslutQuery = DB::select($query);
        /*write flie here start.*/
        
        $strFileName = "fileTrend/trendJsonHru.txt";
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
        
        //return json_encode($reslutQuery);
   
    //Example http://localhost:9998/ais/serviceTrend/getDataHru/D1,D2,D3/04/2014-05-01%2000:00:00/2014-05-01%2005:00:00
    }
    
    public function readDataHru(){
    
        Log::info("Into readDataHru");
        
        $strFileName = "fileTrend/trendJsonHru.txt";
        $objFopen = fopen($strFileName, 'r');
        if ($objFopen) {
            while (!feof($objFopen)) {
                $file = fgets($objFopen, 4096);
                echo $file;
            }
            fclose($objFopen);
        }
                     
                     
    }
    
    
    
    public function getDataDayu($point,$unit,$startTime,$endTime){
    
        Log::info("Into getDataDayu");
        $query="select EvTime, $point from datadayu$unit
        WHERE EvTime BETWEEN  '$startTime' AND '$endTime'";
        $reslutQuery = DB::select($query);
        /*write flie here start.*/
    
        $strFileName = "fileTrend/trendJsonDayu.txt";
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
    
                    //return json_encode($reslutQuery);
                     
 //Example http://localhost:9998/ais/serviceTrend/getDataDayu/D1,D2,D3/04/2014-05-01%2000:00:00/2014-05-05%2005:00:00
    }
    
  public function readDataDayu(){

  Log::info("Into readDataDayu");

      $strFileName = "fileTrend/trendJsonDayu.txt";
      $objFopen = fopen($strFileName, 'r');
      if ($objFopen) {
      while (!feof($objFopen)) {
          $file = fgets($objFopen, 4096);
          echo $file;
      }
      fclose($objFopen);
      }
       
       
  }
    
    
    
    
    
    
}