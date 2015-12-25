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
    
    public function __construct(){
        //$numberHasZero="";
    }
    public function getDataHru($point,$unit,$startTime,$endTime){
        
        Log::info("Into getDataHru");
        $query="select EvTime, $point from datahru$unit 
                WHERE EvTime BETWEEN  '$startTime' AND '$endTime'";
        $reslutQuery = DB::select($query);
        /*write flie here start.*/
        
        $strFileName = "webservice/fileTrend/trendJsonHru.txt";
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
        
        $strFileName = "webservice/fileTrend/trendJsonHru.txt";
        $objFopen = fopen($strFileName, 'r');
        if ($objFopen) {
            while (!feof($objFopen)) {
                $file = fgets($objFopen, 4096);
                echo $file;
            }
            fclose($objFopen);
        }
                     
                     
    }
    /*##################### GET DATA MONTH SART ######################*/
    public function getDataMonthu($point,$unit,$startTime,$endTime){
    
        Log::info("Into getDataMonthu");
        
        $pointArray=explode(",",$point);
        $pointAvg="";
        for($i=0;$i<count($pointArray);$i++){
            if($i==0){
                $pointAvg.="avg($pointArray[$i])";
            }else{
                $pointAvg.=",avg($pointArray[$i])";
            }
        }
        //echo $pointAvg;
         $query="select EvTime, $point from datahru$unit
        WHERE EvTime BETWEEN   '$startTime' AND '$endTime'
        GROUP BY month(EvTime)";
         /*
        $query="select EvTime, $point from datahru$unit
        WHERE EvTime BETWEEN  '$startTime' AND '$endTime'";*/
        $reslutQuery = DB::select($query);
        //write flie here start.
    
        $strFileName = "webservice/fileTrend/trendJsonMonthu.txt";
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
        
    //write flie here end.
    //return json_encode($reslutQuery);         
    //Example http://localhost:9998/ais/serviceTrend/getDataMonthu/D1,D2,D3/04/2014-05-01%2000:00:00/2014-05-01%2005:00:00

    }
    
    public function readDataMonthu(){
    
        Log::info("Into readDataMonthu");
        
        $strFileName = "webservice/fileTrend/trendJsonMonthu.txt";
            $objFopen = fopen($strFileName, 'r');
            if ($objFopen) {
            while (!feof($objFopen)) {
                    $file = fgets($objFopen, 4096);
                    echo $file;
                    }
                    fclose($objFopen);
            }
                 
                 
    }
    
//Example http://localhost:9999/ais/serviceTrend/readDataMonthu
    
   /*##################### GET DATA MONTH END ######################*/
    
    
    /*##################### GET DATA SECOND END ######################*/
    public function addZeroToNumber($number){
     
    	if(intval($number)==0){
    	    return "00";
    	}else if(intval($number)==1){
    	    return "01";
    	}else if(intval($number)==2){
    	    return "02";
    	}else if(intval($number)==3){
    	    return "03";
    	}else if(intval($number)==4){
    	    return "04";
    	}else if(intval($number)==5){
    	    return "05";
    	}else if(intval($number)==6){
    	    return "06";
    	}else if(intval($number)==7){
    	    return "07";
    	}else if(intval($number)==8){
    	    return "08";
    	}else if(intval($number)==9){
    	    return "09";
    	}else{
    	    return $number;
    	}
        
    	//return null;
	
    }
    public function createDataSecondu($dateTime,$point,$trendID,$paramEmpId){
        Log::info("Into createDataSecondu");
        //0820140520/08201405200000
      
        
   
        $vdateArray= explode(" ",$dateTime);
        $vdateArray2 = $vdateArray[0];
        $vdate = explode("-",$vdateArray2);
        $vYear =$vdate[0];
        $vMonth=$vdate[1];
        $vDay  =$vdate[2];
        /*
        echo "1--------".$vYear."<br>";
        echo "2--------".$vMonth."<br>";
        echo "3--------".$vDay."<br>";
        */
        $vtime= explode(":",$vdateArray[1]);

        
        $vHour   = $vtime[0];
        $vMinute = $vtime[1];
        $vSecond = $vtime[2];
       /*
        echo "1--------".$vHour."<br>";
        echo "2--------".$vMinute."<br>";
        echo "2--------".$vSecond."<br>";
         
        */
        $folderName=$vYear.$vMonth.$vDay;
        $startTime=$vYear.$vMonth.$vDay.$vHour."0000";
        $endTime=$vYear.$vMonth.$vDay.$vHour.$vMinute."00";
        /*
        echo $folderName."<br>";
        echo $startTime."<br>";
        echo $endTime."<br>";
        echo "-----<br>";
        echo $this->addZeroToNumber("1")."<br>";
        */
        $fileName="";
        /* define varible*/
        $dataJson="";
        $p = array();
       
        $pointArray=explode(",",$point);
        for($m=0;$m<count($pointArray);$m++){
             
            array_push($p,substr($pointArray[$m],1));
        }
       
        $dataJsonObject="";
        for($i=0;$i<$vMinute;$i++){
            $j=0;
            /*
            $hd="";
            $data="";
            $ar="";
            $trend_data=[];
            $arr=[];
            $data="";
            $data=[];
            */
            
            $dataJson="";
            $fileName=$vYear.$vMonth.$vDay.$vHour.$this->addZeroToNumber($i)."00";
            //echo $vYear.$vMonth.$vDay.$vHour.$this->addZeroToNumber($i)."00";
            //echo $fileName;
            //echo "<br>loop=$i<br>";
            
            
            /*read each file start */
            
            $url = "./webservice/0820140520/0820140520".$this->addZeroToNumber($i)."00.dat";
           // echo $url."<br>";
            //$url = "./webservice/$folderName/$fileName.dat";
           /*
            $pointArray=explode(",",$point);
            for($i=0;$i<count($pointArray);$i++){
                 
                array_push($p,substr($pointArray[$i],1));
            }
             */
            $hd = fopen($url,"rb");
            $data = fread($hd,6);
            $ar = unpack("vid/fdata",$data);
            fseek($hd,($ar['data']+1)*6);
            
            //print_r($ar);
            if($i==0){
            $dataJson.="{";
            }
            while (!feof($hd)){
                
                $data = fread($hd,6);
                //echo("strlen(data)");
                //echo strlen($data);
                if(strlen($data)!=6) {
                    //echo "length ".strlen($data);
                    break;
                }
         
                $ar = unpack("vid/fdata",$data);
                
                //print_r($ar);
                
                if($j==0){
                
                    $dataJson.= "\"sec-".$ar['id']."-".$ar['data']."-".$vYear.$vMonth.$vDay.$vHour.$this->addZeroToNumber($i).$this->addZeroToNumber($ar['id'])."\":";
                
                }else{
                
                    $dataJson.= ",\"sec-".$ar['id']."-".$ar['data']."-".$vYear.$vMonth.$vDay.$vHour.$this->addZeroToNumber($i).$this->addZeroToNumber($ar['id'])."\":";
                
                }
                
                $dataJson.= "[";
                
                for($l=0;$l<=$ar['data']-1;$l++){
                   
                    $data = fread($hd,6);
                    $arr = unpack("vid/fdata",$data);
                   // print_r($ar);
                    $trend_data[$arr['id']]=$arr['data'];
                
                }
                
                $dataJson.= "{";
                
                $k=0;
                foreach ($p as $key=>$value) {
                 
                    if($k==0){
                        //     {"D10":5, "D12":4},
                        // echo "Point : " .$p[$key] .", data : ".$trend_data[$value]."<br />\n";
                        $dataJson.= "\"D$p[$key]\":".$trend_data[$value];
                    }else{
                        $dataJson.= ",\"D$p[$key]\":".$trend_data[$value]."";
                    }
                    $k++;
                }
                $dataJson.= "}";
                
                $dataJson.= "]";
                
                 $j++;
                
            }
            
            //$dataJson.="}";
           // echo $dataJson;
           if($i==0){
               $dataJsonObject.="".$dataJson;
           }else{
               $dataJsonObject.=",".$dataJson;
           }
            
          
            /*read each file end*/
        
        
        }
        
        $dataJsonObject=$dataJsonObject.="}";
        //echo $dataJsonObject;
        fclose($hd);
        /*Create File*/
        
        $strFileName = "webservice/fileTrend/trendJsonSecondu-$trendID-$paramEmpId.txt";
        $objCreate = fopen($strFileName, 'w');
        if($objCreate)
        {
            //echo '["createJsonSuccess"]';
    
        
            $strFileName = "webservice/fileTrend/trendJsonSecondu-$trendID-$paramEmpId.txt";
            $objFopen = fopen($strFileName, 'w');
            $strText1 = json_encode($dataJsonObject);
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
        
          
        
        }else{
            echo "File Not Create.";
        }
        
        
        
       
       
         //http://localhost:9999/ais/serviceTrend/createDataSecondu/2014-05-01%2002:10:00/D1,D2,D3,D4,D5,D7/88/3
    }
    
    public function readDataSecondu($trendID,$paramEmpId){
        
        Log::info("Into readDataSecondu");
        
        $strFileName = "webservice/fileTrend/trendJsonSecondu-$trendID-$paramEmpId.txt";
       
        $objFopen = fopen($strFileName, 'r');
        if ($objFopen) {
            while (!feof($objFopen)) {
                $file = fgets($objFopen, 4096);
                echo $file;
                //return json_encode($file);
            }
            fclose($objFopen);
        }
        
        //http://localhost:9999/ais/serviceTrend/readDataSecondu/88/3
    }
    public function readDataSecondu2($startTime,$endTime,$point){
    
        Log::info("Into readDataSecondu");
        //0820140520/08201405200000
        $dataJson="";
        $url = './webservice/0820140520/08201405200000.dat';
        //$url = "./webservice/$folderName/$fileName.dat";
        $p = array();
        $pointArray=explode(",",$point);
        for($i=0;$i<count($pointArray);$i++){
           
                array_push($p,substr($pointArray[$i],1));
        }
       
        $hd = fopen($url,"rb");
        
        $data = fread($hd,6);
        $ar = unpack("vid/fdata",$data);
        fseek($hd,($ar['data']+1)*6);
        $dataJson.="{";
        $i=0;

        /*
        Fotmat json Array Data here...
        {
            "sec-0-969": [
                {"D10":5, "D12":4},
                {"D11":8, "D13":4}
            ],
            "sec-1-2": [
                {"D10":5, "D12":4},
                {"D11":1, "D13":4}
            ]
        }
         */
        while (!feof($hd)){
        
            $data = fread($hd,6);
            if(strlen($data)!=6) {
                //echo "length ".strlen($data);
                break;
            }
            $ar = unpack("vid/fdata",$data);
            //echo $ar;
            //print_r($ar);
            if($i==0){
                
                $dataJson.= "\"sec-".$ar['id']."-".$ar['data']."\":";
                
            }else{
                
                $dataJson.= ",\"sec-".$ar['id']."-".$ar['data']."\":";
                
            }
           
        
            $dataJson.= "[";
            for($i=0;$i<=$ar['data']-1;$i++){
                $data = fread($hd,6);
                $arr = unpack("vid/fdata",$data);
                $trend_data[$arr['id']]=$arr['data'];
        
            }
            $dataJson.= "{";
            $j=0;
            foreach ($p as $key=>$value) {
                if($j==0){
               //     {"D10":5, "D12":4},
              // echo "Point : " .$p[$key] .", data : ".$trend_data[$value]."<br />\n";
                    $dataJson.= "\"D$p[$key]\":".$trend_data[$value];
                }else{
                    $dataJson.= ",\"D$p[$key]\":".$trend_data[$value]."";
                }
                $j++;
            }
            $dataJson.= "}";
            $dataJson.= "]";
            
            $i++;
            
        }
        $dataJson.="}";
        echo $dataJson;
        //echo json_encode($dataJson);
        fclose($hd);
        
         
         
    }
    
    //http://localhost:9999/ais/serviceTrend/readDataSecondu/0820140520/08201405200000/D1,D2,D3,D4,D5,D7
    
    /*##################### GET DATA SECOND END ######################*/
    
    
    
    public function getDataDayu($point,$unit,$startTime,$endTime){
    
        Log::info("Into getDataDayu");
        $query="select EvTime, $point from datadayu$unit
        WHERE EvTime BETWEEN  '$startTime' AND '$endTime'";
        $reslutQuery = DB::select($query);
        /*write flie here start.*/
    
        $strFileName = "webservice/fileTrend/trendJsonDayu.txt";
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

      $strFileName = "webservice/fileTrend/trendJsonDayu.txt";
      $objFopen = fopen($strFileName, 'r');
      if ($objFopen) {
      while (!feof($objFopen)) {
          $file = fgets($objFopen, 4096);
          echo $file;
      }
      fclose($objFopen);
      }
       
       
  }

  /* read data event for trend start*/
  public function readEventDataTrend($point,$unit,$startTime,$endTime){
        //$unit,$startTime,$endTime
        //echo $point;
        $pointArray=explode(",",$point);
        $pointNum="";
        for($i=0;$i<count($pointArray);$i++){
            if($i==0){
                $pointNum.="'".substr($pointArray[$i],1)."'";
                
            }else{
                $pointNum.=",'".substr($pointArray[$i],1)."'";
            }
        }
        //echo $pointNum;
        //convert string to int
        $unit = (int)$unit;
        Log::info("Into readEventDataTrend");
        $tagName="";
        $queryTag="select DISTINCT(D) as tagName from mmtrend_table
        WHERE H in($pointNum)
        AND B='$unit'";
        $reslutQueryTag = DB::select($queryTag);
        //print_r($reslutQueryTag);
        $i=0;
        foreach ($reslutQueryTag as $rs) {
            
            //echo $rs->tagName;
            if($i==0){
                $tagName.=$rs->tagName;
            }else{
                $tagName.="|".$rs->tagName;
            }
            
        $i++;
        }
       // echo $tagName;
        
        /*
        while($rsTag=mysql_fetch_array($reslutQueryTag)){
           echo $rsTag[tagName];
        }*/
       
        
        
     
        
        $query="
        select '2014-05-01 00:00:00' as 'EvTime',vpser_raw.ois_vpser,event_raw.ois_event,'data Action' as ois_action from vpser_raw
                LEFT JOIN event_raw
                ON event_raw.sys_date=vpser_raw.sys_date
                LEFT JOIN action_raw
                on vpser_raw.sys_date=action_raw.sys_date
                where 
                (vpser_raw.ois_vpser REGEXP 'VPSER|L83E131|80S'
                or event_raw.ois_event REGEXP 'VPSER|L83E131|80S'
                or action_raw.ois_action REGEXP 'VPSER|L83E131|80S'
                )
                AND 
                (vpser_raw.sys_date 
                	BETWEEN '2014-10-01 00:00:00' 
                	and '2014-10-25 01:00:00'
                	or event_raw.sys_date 
                	BETWEEN '2014-10-01 00:00:00' 
                	and '2014-10-25 01:00:00'
                	or action_raw.sys_date 
                	BETWEEN '2014-10-01 00:00:00' 
                	and '2014-10-25 01:00:00'
                )";
        $reslutQuery = DB::select($query);
        return json_encode($reslutQuery);
                
        
        /* Real Data here
        $query="
                select vpser_raw.sys_date as 'EvTime',vpser_raw.ois_vpser,event_raw.ois_event,action_raw.ois_action from vpser_raw
                LEFT JOIN event_raw
                ON event_raw.sys_date=vpser_raw.sys_date
                LEFT JOIN action_raw
                on vpser_raw.sys_date=action_raw.sys_date
                where 
                (vpser_raw.ois_vpser REGEXP '$tagName'
                or event_raw.ois_event REGEXP '$tagName'
                or action_raw.ois_action REGEXP '$tagName'
                )
                AND 
                (vpser_raw.sys_date 
                	BETWEEN '$startTime' 
                	and '$endTime'
                	or event_raw.sys_date 
                	BETWEEN '$startTime' 
                	and '$endTime'
                	or action_raw.sys_date 
                	BETWEEN '$startTime' 
                	and '$endTime'
                )";
        $reslutQuery = DB::select($query);
        return json_encode($reslutQuery);
        */
}
public function readEventDataTrendByEvent($point,$unit,$startTime,$endTime,$event){
    //$unit,$startTime,$endTime
    //echo $point;
   
      $pointNum="'".substr($point,1)."'";
    
        
    //echo $pointNum;
    //convert string to int
    $unit = (int)$unit;
    Log::info("Into readEventDataTrend");
    $tagName="";
    $queryTag="select DISTINCT(D) as tagName from mmtrend_table
    WHERE H =$pointNum
    AND B='$unit'";
    $reslutQueryTag = DB::select($queryTag);
    //print_r($reslutQueryTag);
    $i=0;
    foreach ($reslutQueryTag as $rs) {
    
        //echo $rs->tagName;
        if($i==0){
            $tagName.=$rs->tagName;
        }else{
            $tagName.="|".$rs->tagName;
        }
    
        $i++;
    }
    // echo $tagName;
    
   
    
    
     if($event=='vpser'){
    
        $query="
                select '2014-05-01 00:00:00'  as 'EvTime',vpser_raw.ois_vpser from vpser_raw
                where vpser_raw.ois_vpser like '%VPSER%'
                AND 
            	vpser_raw.sys_date 
            	BETWEEN '2014-10-01 00:00:00' 
            	and '2014-10-25 01:00:00'
                LIMIT 1
                    	";
        $reslutQuery = DB::select($query);
        return json_encode($reslutQuery);
    
    
     }else if($event=='event'){
         
         $query="
             select '2014-05-01 00:00:00'  as 'EvTime',event_raw.ois_event from event_raw
             where event_raw.ois_event like '%80S%'
             AND 
        	 event_raw.sys_date 
        	 BETWEEN '2014-10-01 00:00:00' 
        	 and '2014-10-25 01:00:00'
                 LIMIT 1
                	
                	";
         $reslutQuery = DB::select($query);
         return json_encode($reslutQuery);
         
         
     } else if($event=='action'){
          
         $query="
              select '2014-05-01 00:00:00' as 'EvTime',action_raw.ois_action from action_raw
              where action_raw.ois_action like '%80S%'
              AND 
            	action_raw.sys_date 
            	BETWEEN '2014-10-01 00:00:00' 
            	and '2014-10-25 01:00:00'
                 LIMIT 1
         
                	";
         $reslutQuery = DB::select($query);
         return json_encode($reslutQuery);
          
          
     }
    /*test*/
     //http://localhost:9999/ais/serviceTrend/readEventDataTrendByEvent/D1/04/2014-05-01%2000:00:00/2014-10-01%2000:00:00/action
}
  /* read data event for trend end*/
    
    
    
    
    
    
}