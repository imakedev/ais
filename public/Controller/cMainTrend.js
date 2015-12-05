//getDataByMenute start
function getDataByMenute(data,point){
		var EvTimeMenute="";
		var dataJson="[";
		var pointArray=point.split(",");
		
		$.each(data,function(index,indexEntry){
			
			EvTimeMenute=indexEntry['EvTime'].split(" ");
			EvTimeMenute=EvTimeMenute[1].substring(0,5);
			//console.log(EvTimeMenute);
			if(index==0){
				dataJson+="{";
			}else{
				dataJson+=",{";
			}
			dataJson+="\"EvTime\": \""+EvTimeMenute+":00  น.\",";
			for($i=0;$i<pointArray.length;$i++){
				if($i==0){
				dataJson+="\""+pointArray[$i]+"\": "+indexEntry[pointArray[$i]]+"";	
				}else{
				dataJson+=",\""+pointArray[$i]+"\": "+indexEntry[pointArray[$i]]+"";
				}
			}
			
			
			dataJson+="}";
		});
		dataJson+="]";	
		//console.log(dataJson);
		return eval("("+dataJson+")");

	}	

// getDataByMenute end

//convest data to day-h for scale time is hour start
function getDataByDateHour(data,point){
		var EvTime="";
		var EvTimeDay="";
		var EvTimeH="";
	
		var dataJson="[";
		var pointArray=point.split(",");
		
		$.each(data,function(index,indexEntry){
			//console.log(indexEntry['EvTime']);
			EvTime=indexEntry['EvTime'].split(" ");
			EvTimeDay=EvTime[0].split("-");
			EvTimeH=EvTime[1].substring(0,2);
			EvTime=EvTimeDay[2]+"/"+EvTimeDay[1]+"/"+EvTimeDay[0]+" "+EvTimeH;
			//console.log(EvTime);
			
			
			
			if(index==0){
				dataJson+="{";
			}else{
				dataJson+=",{";
			}
			dataJson+="\"EvTime\": \""+EvTime+" น.\",";
			for($i=0;$i<pointArray.length;$i++){
				if($i==0){
				dataJson+="\""+pointArray[$i]+"\": "+indexEntry[pointArray[$i]]+"";	
				}else{
				dataJson+=",\""+pointArray[$i]+"\": "+indexEntry[pointArray[$i]]+"";
				}
			}
			dataJson+="}";
			
		});
		dataJson+="]";	
		//console.log(dataJson);
		return eval("("+dataJson+")");

	}	

function getDataByDateDay(data,point){
	
	var EvTime="";
	var EvTimeDay="";
	var EvTimeMonth="";
	var EvTimeYear="";

	var dataJson="[";
	var pointArray=point.split(",");
	
	$.each(data,function(index,indexEntry){
		//console.log("1111111");
		//console.log(indexEntry['EvTime']);
		EvTime=indexEntry['EvTime'].split(" ");
		EvTime=EvTime[0].split("-");
		EvTimeDay=EvTime[2];
		EvTimeMonth=EvTime[1];
		EvTimeYear=EvTime[0];
		
		EvTime=EvTimeDay+"/"+EvTimeMonth+"/"+EvTimeYear;
		//console.log("22222");
		//console.log(EvTime);
		
		
		
		if(index==0){
			dataJson+="{";
		}else{
			dataJson+=",{";
		}
		dataJson+="\"EvTime\": \""+EvTime+"\",";
		for($i=0;$i<pointArray.length;$i++){
			if($i==0){
			dataJson+="\""+pointArray[$i]+"\": "+indexEntry[pointArray[$i]]+"";	
			}else{
			dataJson+=",\""+pointArray[$i]+"\": "+indexEntry[pointArray[$i]]+"";
			}
		}
		dataJson+="}";
		
	});
	dataJson+="]";	
	//console.log(dataJson);
	return eval("("+dataJson+")");

}	

//convest data to day-h for scale time is hour end

// createTrendChart start
	var createTrendChart =function(dataJson,point,paramStep,paramTrendID){
		
		console.log("createTrendChart");
		console.log("point"+point);
		console.log("paramTrendID"+paramTrendID);
		
		if((paramStep==undefined) || (paramStep=='')){
			paramStep=60;
		}else{
			paramStep=paramStep;
		}
		
		$("#trendChartArea-"+paramTrendID+"").html("<div id=\"trendChart-"+paramTrendID+"\" class='heightChart' style=\"background: center no-repeat url('/js/kendoCommercial/bg/world-map.png');\"></div>");
		
		var seriesData="";
		var pointArray=point.split(",");
		seriesData+="[";
		for($i=0;$i<pointArray.length;$i++){
			
			if($i==0){
				seriesData+="{";
				seriesData+="field: \""+pointArray[$i]+"\",";	
				seriesData+="name: \""+pointArray[$i]+"\"";
			}else{
				seriesData+=",{";
				seriesData+="field: \""+pointArray[$i]+"\",";
				seriesData+="name: \""+pointArray[$i]+"\"";
			}
			seriesData+="}";
		}
		seriesData+="]";
		
		
		seriesData=eval("("+seriesData+")");
		//console.log(seriesData);
		
	//alert($("#boxLeft").width());
	$("#trendChart-"+paramTrendID+"").kendoChart({
		theme: "Flat",
		height:600,
		//width:800,
		
		//theme: "MaterialBlack",
		//renderAs: "canvas",
		chartArea: {
		    background: ""
		   },
		   dataSource: {
               data: dataJson
           },
          
        title: {
           // text: "Spain electricity production (GWh)"
        },
        legend: {
            position: "bottom",
            visible: false
        },
        
        seriesDefaults: {
            type: "line",
            style: "smooth",
        	markers: {
                visible: false
            }
        },
        //series:
        
        series:seriesData,
        categoryAxis: {
            field: "EvTime",
            labels: {
                rotation: -45,
                visible: true,
                step: paramStep 
            },
            crosshair: {
                visible: true
            },
            majorGridLines: {
                visible: true,
                step: 20 
            }
        },
        valueAxis: {
            labels: {
                format: "N0"
            },
            
            //majorUnit: 500
        },
        /*
        tooltip: {
            visible: true,
            shared: true,
            format: "N0"
        },
        */
        tooltip: {
            visible: true,
            template: "#= templateFormat(category,series.name,value) #",
            //category,series.name,value
			//template: "#= series.name #: #= value #",
			shared: true
        },
        /*
        zoomable: {
            mousewheel: {
                lock: "y"
            },
            selection: {
                lock: "y"
            }
        },
        */
        pannable: true,
        pannable: {
            lock: "y"
        },
    });
	

	
	//tooltipCustom();
	//set tooltip end
	
	
	};
// createTrendChart end
	
function getDataFromPointEmbed(returnType){

		var pointData = $("#paramPointEmbed-"+$("#trendTabActive").val()+"").val();
		pointData=pointData.split(",");
		var pointDataId="";
		var pointUnitId="";
		var pointId="";
		var pointDataSub="";
		
		//alert(pointData.length);
		
		for(var i=0;i<pointData.length;i++){
			//alert(pointData[i]);
			pointDataSub=pointData[i].split("-");
			if(i==0){
				pointDataId+=pointDataSub[0];
				pointUnitId+=pointDataSub[1];
				pointId+=pointDataSub[2];
			}else{
				pointDataId+=','+pointDataSub[0];
				pointUnitId+=','+pointDataSub[1];
				pointId+=','+pointDataSub[2];
			}
			
		}
		if(returnType=="pointDataId"){
			return pointDataId;
		}else if(returnType=="pointUnitId"){
			return pointUnitId;
		}else if(returnType=="pointId"){
			return pointId;
		}
		
	}
//setDefaultPointAndPlan start
function setDefaultPointAndPlan(lastObject,point,paramTrendID){
	
	//console.log(lastObject);
	//console.log(point);
	var pointArray=point.split(",");

	
	for(var i=0;i<pointArray.length;i++){
		var key=pointArray[i];
		var keyId=key.substring(1);
		
	
		
		
		if(i==0){
			var timeHIS=lastObject['EvTime'].split(" ");
			
			if($("#paramScaleTime").val()=="Minute"){

				$("#dateInDataDisplay-"+paramTrendID+"").html(convertDateTh(lastObject['EvTime']));
				$("#timeInDataDisplay-"+paramTrendID+"").html("เวลา "+timeHIS[1]+" น.");
				
			}else if($("#paramScaleTime").val()=='Hour'){
				$("#dateTimeInDataDisplayHour").html(convertDateTh(lastObject['EvTime'])+" เวลา "+timeHIS[1]+" น.");
				
			}else if($("#paramScaleTime").val()=='Day'){
				$("#dateTimeInDataDisplayDay").html(convertDateTh(lastObject['EvTime']));
				
			}else{
				$("#dateInDataDisplay-"+paramTrendID+"").html(convertDateTh(lastObject['EvTime']));
				$("#timeInDataDisplay-"+paramTrendID+"").html("เวลา "+timeHIS[1]+" น.");
			}
			
			

			
			
		}
		
		$("#valuePoint-"+keyId+"-"+paramTrendID).text(lastObject[key]);
		$("#planPoint-"+keyId+"-"+paramTrendID).text(lastObject[key]);
		//alert(lastObject[key]);
		
	}
	
	/*
	$.each(lastObject,function(index,indexEntry){
		console.log(indexEntry);
	});
	*/
	
}
//setDefaultPointAndPlan end
//read json file scale type = H
var readJsonFilter={
		
	//readJsonFilterFileScaleTypeH:function(){
	scaleTypeH:function(){
		 var jsonFilter = new Array();
		 $.ajax({
				url:"/ais/serviceTrend/readDataHru",
				type:"get",
				async:false,
				dataType:"json",
				success:function(data){
					
					jsonFilter=data;
					
				}
		 });
		 return jsonFilter;
		 
	},
	scaleTypeD:function(){
		 var jsonFilter = new Array();
		 $.ajax({
				url:"/ais/serviceTrend/readDataDayu",
				type:"get",
				async:false,
				dataType:"json",
				success:function(data){
					
					jsonFilter=data;
					
				}
		 });
		 return jsonFilter;
		 
	}
}
var createFileServiceChart={
		
	createFileByHru:function(){
		var pointDataId= getDataFromPointEmbed("pointDataId");
		var pointUnitId= $("#paramUnitEmbed").val();
		var paramFromDate= $("#paramFromDate").val();
		var paramToDate=  $("#paramToDate").val();
		
		//alert(paramFromDate);
		//alert(paramToDate);
		
		$.ajax({
			url:"/ais/serviceTrend/getDataHru/"+pointDataId+"/0"+pointUnitId+"/"+paramFromDate+"/"+paramToDate+"",
			type:"get",
			dataType:"json",
			async:false,
			success:function(data){
				
				if(data=='createJsonSuccess'){
					
					var data2=readJsonFilter.scaleTypeH();
					//console.log("data2");
					//console.log(data2);
					
					
					
					setTimeout(function(){
					
						createTrendChart(getDataByDateHour(data2,pointDataId),pointDataId,"12");
						
						//$("#trendChart").find("g transform").get();
						var lastObject = data2.pop();
						setDefaultPointAndPlan(lastObject,pointDataId);
						
					},1000);
					
					
				}
			}
		});
		
	},
	createFileByDayu:function(){
		var pointDataId= getDataFromPointEmbed("pointDataId");
		var pointUnitId= $("#paramUnitEmbed").val();
		var paramFromDate= $("#paramFromDate").val();
		var paramToDate=  $("#paramToDate").val();
		
		alert(paramFromDate);
		alert(paramToDate);
		
		$.ajax({
			url:"/ais/serviceTrend/getDataDayu/"+pointDataId+"/0"+pointUnitId+"/"+paramFromDate+"/"+paramToDate+"",
			type:"get",
			dataType:"json",
			async:false,
			success:function(data){
				
				if(data=='createJsonSuccess'){
					
					var data2=readJsonFilter.scaleTypeD();
					//console.log("data2");
					
					//console.log(data2);
					
					
					
					setTimeout(function(){
						createTrendChart(getDataByDateDay(data2,pointDataId),pointDataId,"1");
						var lastObject = data2.pop();
						setDefaultPointAndPlan(lastObject,pointDataId);
					},1000);
					
					
				}
			}
		});
		
	}
}
var plotGraphFn=function(paramAction,paramTest,paramTrendID){
	   
	   var point="";
	   if(paramTest=="Y"){
		   
		   point+="D32-4-2026,D223-4-2030,D131-4-2034,D105-4-2038,D272-4-2042,D114-4-2046,D273-4-2050,D193-4-2054,D4-4-2058";
		   
	   }else{
		   
		  var pointChecked = $('input[name=point]:checked');
		  $.each(pointChecked,function(index,indexEntry){
			 //console.log($(indexEntry).val()); 
			 
			  if(index==0){
					point+="D"+$(indexEntry).val();
				}else{
					point+=",D"+$(indexEntry).val();
				}
		  }); 
	   }
		  
		  $(".paramPointEmbed-"+paramTrendID+"").remove();
		  var paramPoint="";
		  paramPoint+="<input type='hidden' class='paramPointEmbed-"+paramTrendID+"' id='paramPointEmbed-"+paramTrendID+"' name='paramPointEmbed-"+paramTrendID+"' value='"+point+"'>";
		  paramPoint+="<input type='hidden' class='paramPointEmbed-"+paramTrendID+"' id='paramPointAllEmbed-"+paramTrendID+"' name='paramPointAllEmbed-"+paramTrendID+"' value='"+point+"'>";
		  
		  
		  $("body").append(paramPoint);
			  
			
		  //if plot grach is success crate new tab
		 if(paramAction!='Edit'){
		  var newTab="";
		  newTab+="<li class=\"titleTab \" id='tabTrendId-"+paramTrendID+"'><a href=\"#tab-"+paramTrendID+"\" data-toggle=\"tab\" aria-expanded=\"false\"><b>"+$("#trendName").html()+"</b></a></li>";
		  $("#tabTrendTitle").append(newTab);
		 
		  $.ajax({
			 url:"/View/structureDashTrend.php",
			 type:"get",
			 dataType:"html",
			 data:{"paramTrendID":paramTrendID},
			 async:false,
			 success:function(data){
				 //alert(data);
				 var contentTab="";
				  contentTab+="<div class=\"tab-pane\" id=\"tab-"+paramTrendID+"\">";
		          contentTab+=" <div class=\"panel-body\">";
		          contentTab+=data;
		          contentTab+=" </div>";
		          contentTab+="</div>";
		          $("#tabTrendContent").append(contentTab);

		          
		        
			 }
		  });
			  $("[href='#tab-"+paramTrendID+"']").click();
			  
			 
			  
		 }//action 
		 
			 // $('[data-toggle="popover"]').popover();
			  $('#editTrendPointModal').modal('hide');
			  
			  
			  //START UP TREND 
			  startUpFn("Y",paramTrendID); 
			  
}


//read json by hidden or show point start
var readJsonHiddenPointAllFn=function(paramTrendID){
 	
 	 var startTime= intervalDelFn(datetimeCurrentHFn($("#paramToDate-"+paramTrendID+"").val()),'hour',5);
	 var endTime = intervalAddFn(startTime,'hour','5');
	 var data2=readJsonFilterFile(startTime,endTime,paramTrendID);
	 var paramPoint='';
	 $("#paramPoint").val('');
	 $(".clickHideShowPoint").removeClass("showPoint");
	 $(".clickHideShowPoint").addClass("hiddenPoint");
	 
	 createTrendChart(getDataByMenute(data2,paramPoint),paramPoint,'',paramTrendID);
	
	 
	 startTime=startTime.split(" ");
	 $("#startTimeForDisplay-"+paramTrendID+"").val(startTime[1]);
	
 }
 var readJsonShowPointAllFn=function(paramTrendID){
	 	
 	 var startTime= intervalDelFn(datetimeCurrentHFn($("#paramToDate-"+paramTrendID+"").val()),'hour',5);
	 var endTime = intervalAddFn(startTime,'hour','5');
	 var data2=readJsonFilterFile(startTime,endTime,paramTrendID);
	 //var paramPoint=$("#paramPointAll").val();
	 var paramPoint= getDataFromPointAllEmbed("pointDataId");
	 $("#paramPoint").val(paramPoint);
	 
	 $(".clickHideShowPoint").removeClass("hiddenPoint");
	 $(".clickHideShowPoint").addClass("showPoint");
	//dataJson,point,paramStep,paramTrendID
	 createTrendChart(getDataByMenute(data2,paramPoint),paramPoint,'',paramTrendID);
	
	 
	 startTime=startTime.split(" ");
	 $("#startTimeForDisplay-"+paramTrendID+"").val(startTime[1]);
	
 }
 
 var readJsonShowHiddenPointFn=function(point,paramTrendID){
	 //$("#paramTrendIDEmbed").val()
 	 var startTime= intervalDelFn(datetimeCurrentHFn($("#paramToDate-"+paramTrendID+"").val()),'hour',5);
	 var endTime = intervalAddFn(startTime,'hour','5');
	 var data2=readJsonFilterFile(startTime,endTime,paramTrendID);
	// console.log(data2);
	// console.log(point);
	// var paramPoint=$("#paramPoint").val();
	 
	 createTrendChart(getDataByMenute(data2,point),point,'',paramTrendID);
	
	 startTime=startTime.split(" ");
	 $("#startTimeForDisplay-"+paramTrendID+"").val(startTime[1]);
	
 }
//read json by hidden or show point start
 
 //function dinamic read file json start
 function readJsonExpandFocusFn(seek,paramTrendID){
	 //alert($("#paramToDate").val());
	var startTime= intervalDelFn(endDatetimeHFn($("#paramToDate-"+paramTrendID+"").val()),'hour','5');
	var endTime = intervalAddFn(startTime,'hour',seek);
	 
	 //alert(endTime);
	 //intervalDelFn(dateTimeHis,interval,units);
	 //example intervalDelFn('2015-11-15 00:00:00','day',1)
	 
	 
	
	 var data2=readJsonFilterFile(startTime,endTime,paramTrendID);
	
	 
	 
	 //var paramPoint=$("#paramPoint").val();
	 var paramPoint=getDataFromPointEmbed("pointDataId");
	 //console.log();
	// console.log(getDataByMenute(data2,paramPoint));
	
	 createTrendChart(getDataByMenute(data2,paramPoint),paramPoint,'',paramTrendID);
	
 }
//function dinamic read file json end
 
//function dinamic read file json start
 var readJsonReduceStartTimeDisplayFn=function(seek,paramTrendID){
	 	
 	 var startTime= intervalDelFn(datetimeCurrentHFn($("#paramToDate-"+paramTrendID+"").val()),'hour',5-seek);
	 var endTime = intervalAddFn(startTime,'hour','5');
	 var data2=readJsonFilterFile(startTime,endTime,paramTrendID);
	 //var paramPoint=$("#paramPoint").val();
	 var paramPoint=getDataFromPointEmbed("pointDataId");
	 createTrendChart(getDataByMenute(data2,paramPoint),paramPoint,'',paramTrendID);
	
	 
	 startTime=startTime.split(" ");
	 $("#startTimeForDisplay-"+paramTrendID+"").val(startTime[1]);
	
}
var readJsonIncreaseStartTimeDisplayFn=function(seek,paramTrendID){
 	
 	 var startTime= intervalDelFn(datetimeCurrentHFn($("#paramToDate-"+paramTrendID+"").val()),'hour',5-seek);
 	 //alert($("#paramToDate").val());
 	 //alert(startTime);
 	
 	 var endTime = intervalAddFn(startTime,'hour','5');
	 var data2=readJsonFilterFile(startTime,endTime,paramTrendID);
	 /*var paramPoint=$("#paramPoint").val();*/
	 var paramPoint=getDataFromPointEmbed("pointDataId");
	 createTrendChart(getDataByMenute(data2,paramPoint),paramPoint,'',paramTrendID);
	 $("#startTimeForDisplay-"+paramTrendID+"").val(startTime);
	 startTime=startTime.split(" ");
	 $("#startTimeForDisplay-"+paramTrendID+"").val(startTime[1]);
}


var readJsonReduceDayDisplayFn=function(seek,paramTrendID){
 	
	 var startTime= intervalDelFn(datetimeCurrentHFn($("#paramToDate-"+paramTrendID+"").val()),'day',-seek);
	 var endTime = intervalAddFn(startTime,'hour','5');
 var data2=readJsonFilterFile(startTime,endTime,paramTrendID);
 /*var paramPoint=$("#paramPoint").val();*/
 var paramPoint=getDataFromPointEmbed("pointDataId");
 createTrendChart(getDataByMenute(data2,paramPoint),paramPoint,'',paramTrendID);
 
 
 $("#dateInDataDisplay-"+paramTrendID+"").html(convertDateTh(endTime));


}
var readJsonIncreaseDayDisplayFn=function(seek,paramTrendID){
 	
 var startTime= intervalAddFn(datetimeCurrentHFn($("#paramToDate-"+paramTrendID+"").val()),'day',seek);
	 //alert(startTime);
 
 var endTime = intervalAddFn(startTime,'hour','5');
 var data2=readJsonFilterFile(startTime,endTime,paramTrendID);
 /*var paramPoint=$("#paramPoint").val();*/
 var paramPoint=getDataFromPointEmbed("pointDataId");
 createTrendChart(getDataByMenute(data2,paramPoint),paramPoint,'',paramTrendID);
 
 $("#dateInDataDisplay-"+paramTrendID+"").html(convertDateTh(endTime));
 
}

//function dinamic read file json end

$(document).ready(function(){
	
	
	$(document).on("click",".navbar-minimalize",function(){
		setTimeout(function(){
			
			var scale = parseInt($("#scaleTimeMenuLeftArea-"+$("#trendTabActive").val()+"").text());
			readJsonExpandFocusFn(scale,$("#trendTabActive").val());
		},1000);
		
	});
	//click tab start
	$(document).on("click",".titleTab",function(){
		
		 var id = this.id.split("-");
		 id=id[1];
		
		  $("#trendTabActive").remove();
		  var htmlTitleTab="<input type='hidden' id='trendTabActive' name='trendTabActive' value='"+id+"'>";
		  $("body").append(htmlTitleTab);
		  
		  
		  
	});
	//click tab end
	
	
	/*click create trend graph start*/
	$("[href='#trendSeting']").click(function(){
		$.ajax({
			url:"/View/trend_setting.php",
			type:"html",
			async:false,
			success:function(data){
				//alert(data);
				$("#areaTrendSeting").html(data);
				
			}
		});
	});
	setTimeout(function(){
		$("[href='#trendSeting']").click();
	},1000);
	
	
	
	
	//delete tab start
	$(document).on("click",".exitTrendPoint",function(){

		var id="";
		id=this.id.split("-");
		id=id[1];
		$("ul#tabTrendTitle").find("a[href='#tab-"+id+"']").remove();
		$("#tabTrendContent>#tab-"+id).remove();
		
		//delete file ajax start
		/*
		$.ajax({
			url:"/webservice/deleteTrendJson.php",
			type:"html",
			data:{"id":id},
			async:false,
			success:function(data){
				//alert(data);
				
			}
		});
		*/
		//delete file ajax end
		
		//alert("exitTrendPoint");
		
	});
	//deleate tab end
});


