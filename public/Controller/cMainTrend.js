//function display expand focus start
	function setScaleDateTimeFn(startDate,endDate,paramTrendID){
		//default value scaleDateTimeArea start
		//intervalDelNoneHis
		var htmlScaleDateTime="";
	  	if((startDate==undefined) || (endDate==undefined)){
		  htmlScaleDateTime="ข้อมูลวันที่ "+intervalDelNoneHisThFn(currentDateTime(),'day',1)+" - "+currentDateTh()+" &nbsp;&nbsp;<i style='font-size:16px;' class='fa fa-calendar'></i>";
	  	$("#scaleDateTimeArea-"+paramTrendID).html(htmlScaleDateTime);
	   	//default value scaleDateTimeArea end
		}else{
			if($("#paramScaleTime-"+paramTrendID).val()=="Second"){
				
				 htmlScaleDateTime="ข้อมูลวันที่ "+convertDateTh(startDate);
				 $("#scaleDateTimeArea-"+paramTrendID).html(htmlScaleDateTime);
			}else if($("#paramScaleTime-"+paramTrendID).val()=="Month"){
				
				 htmlScaleDateTime="ข้อมูลเดือน "+convertDatetoMonthYearTh(startDate)+" - "+convertDatetoMonthYearTh(endDate)+"  &nbsp;&nbsp;<i style='font-size:16px;' class='fa fa-calendar'></i>";
				 $("#scaleDateTimeArea-"+paramTrendID).html(htmlScaleDateTime);
				 
			}else{
				 htmlScaleDateTime="ข้อมูลวันที่ "+convertDateTh(startDate)+" - "+convertDateTh(endDate)+"  &nbsp;&nbsp;<i style='font-size:16px;' class='fa fa-calendar'></i>";
				 $("#scaleDateTimeArea-"+paramTrendID).html(htmlScaleDateTime);
			}
		}
	}

	
//function display expand focus end
//read event for trend start
function loadEventForTrend(){
	//alert("loadEventForTrend");
	//tooltipCustom($("#trendTabActive").val(),true);
	/*
	var pointDataId= getDataFromPointEmbed("pointDataId");
	var trendTabActive= $("#trendTabActive").val();
	var paramUnit =$("#paramUnitEmbed-"+$("#trendTabActive").val()+"").val();
	var paramFromDate=$("#paramFromDate-"+$("#trendTabActive").val()+"").val();
	var paramToDate=$("#paramToDate-"+$("#trendTabActive").val()+"").val();
	*/
	/*
	alert(pointDataId);
	alert(trendTabActive);
	alert(paramUnit);
	alert(paramFromDate);
	alert(paramToDate);
	*/
	
	$.ajax({
		url:"/ais/serviceTrend/readEventDataTrendByEvent/D1/04/2014-05-01%2000:00:00/2014-10-01%2000:00:00/event",
		type:"get",
		dataType:"json",
		//async:false,
		success:function(data){
			
			console.log(data);
			console.log(data[0]['EvTime']);
			console.log(data[0]['ois_event']);
			//console.log(eval("("+data+")"));
			//console.log(data['EvTime']);
			//console.log($("#tooltip-event-"+point+"-$("#trendTabActive").val()").get());
			//$("#tooltip-event-"+point+"-"+$("#trendTabActive").val()).html(data);
			//$("#tooltip").html(returnEvent);
		}
	});
}
//test
//loadEventForTrend();
/*
setTimeout(function(){
	alert("hello");
	console.log(dataEventForTrend);
},3000);
*/

//read event for rrend end

//getDataByMenute start
function getDataByMenute(data,point){
	//###  DATA VALUE START ### 
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
		
	//###  DATA VALUE END ### 
	//###  EVEENT VALUE START ### 
	var EvTimeMenuteEvent="";
	var dataJsonEvent="[";
	//var pointArray=point.split(",");
	/*
	$.each(data,function(index,indexEntry){
		
		EvTimeMenuteEvent=indexEntry['EvTime'].split(" ");
		EvTimeMenuteEvent=EvTimeMenuteEvent[1].substring(0,5);
		//console.log(EvTimeMenute);
		if(index==0){
			dataJsonEvent+="{";
		}else{
			dataJsonEvent+=",{";
		}
		dataJsonEvent+="\"EvTime\": \""+EvTimeMenute+":00  น.\",";
		for($i=0;$i<pointArray.length;$i++){
			if($i==0){
				dataJsonEvent+="\""+pointArray[$i]+"\": "+indexEntry[pointArray[$i]]+"";	
			}else{
				dataJsonEvent+=",\""+pointArray[$i]+"\": "+indexEntry[pointArray[$i]]+"";
			}
		}
		dataJsonEvent+="}";
	});
	dataJsonEvent+="]";	
	
	//console.log(dataJson);
	return eval("("+dataJson+")");
	*/
	//###  EVEENT VALUE END ### 
		
			
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
function getDataByDateMonth(data,point){
	
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
		
		//EvTime=EvTimeDay+"/"+EvTimeMonth+"/"+EvTimeYear;
		EvTime=EvTimeMonth+"/"+EvTimeYear;
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
function getDataByDateSecond(data,point){
	
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
		/*
		EvTime=EvTime[0].split("-");
		EvTimeDay=EvTime[2];
		EvTimeMonth=EvTime[1];
		EvTimeYear=EvTime[0];
		*/
		//EvTime=EvTimeDay+"/"+EvTimeMonth+"/"+EvTimeYear;
		EvTime=EvTime[1];
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
	var createTrendChart =function(dataJson,point,paramStep,paramTrendID,colorIndex){
		
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
				seriesData+="name: \""+pointArray[$i]+"\",";
				if(colorIndex!=undefined){
				var index=colorIndex[$i];
				console.log(index);
				seriesData+="color: \""+colorFlatTheme[index]+"\"";	
				}else{
				seriesData+="color: \""+colorFlatTheme[$i]+"\"";
				}
			}else{
				seriesData+=",{";
				seriesData+="field: \""+pointArray[$i]+"\",";
				seriesData+="name: \""+pointArray[$i]+"\",";
				if(colorIndex!=undefined){
					var index=colorIndex[$i];
					console.log(index);
					seriesData+="color: \""+colorFlatTheme[index]+"\"";	
				}else{
					seriesData+="color: \""+colorFlatTheme[$i]+"\"";
				}
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
	

	
	//tooltipCustom(paramTrendID);
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
			
			if($("#paramScaleTime-"+paramTrendID+"").val()=="Minute"){

				$("#dateInDataDisplay-"+paramTrendID+"").html(convertDateTh(lastObject['EvTime']));
				$("#timeInDataDisplay-"+paramTrendID+"").html("เวลา "+timeHIS[1]+" น.");
				
			}else if($("#paramScaleTime-"+paramTrendID+"").val()=='Hour'){
				$("#dateTimeInDataDisplayHour-"+paramTrendID+"").html(convertDateTh(lastObject['EvTime'])+" เวลา "+timeHIS[1]+" น.");
				
			}else if($("#paramScaleTime-"+paramTrendID+"").val()=='Day'){
				
				$("#dateTimeInDataDisplayDay-"+paramTrendID+"").html(convertDateTh(lastObject['EvTime']));
				
			}else if($("#paramScaleTime-"+paramTrendID+"").val()=='Month'){
				
				$("#dateTimeInDataDisplayMonth-"+paramTrendID+"").html(convertDatetoMonthYearTh(lastObject['EvTime']));
				//$("#dateTimeInDataDisplayMonth-"+paramTrendID+"").html(lastObject['EvTime']);
				
			}else if($("#paramScaleTime-"+paramTrendID+"").val()=='Second'){
				
				$("#dateTimeInDataDisplaySecond-"+paramTrendID+"").html(convertDateTh(lastObject['EvTime'])+" เวลา "+timeHIS[1]+" น.");
				//$("#dateTimeInDataDisplayMonth-"+paramTrendID+"").html(lastObject['EvTime']);
				
			}else{
				$("#dateInDataDisplay-"+paramTrendID+"").html(convertDateTh(lastObject['EvTime']));
				$("#timeInDataDisplay-"+paramTrendID+"").html("เวลา "+timeHIS[1]+" น.");
			}
			
			

			
			
		}
		
		$("#valuePoint-"+keyId+"-"+paramTrendID).text(parseInt(lastObject[key]).toFixed(2));
		$("#planPoint-"+keyId+"-"+paramTrendID).text(parseInt(lastObject[key]).toFixed(2));
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
		 
	},
	scaleTypeMonth:function(){
		 var jsonFilter = new Array();
		 $.ajax({
				url:"/ais/serviceTrend/readDataMonthu",
				type:"get",
				async:false,
				dataType:"json",
				success:function(data){
					
					jsonFilter=data;
					
				}
		 });
		 return jsonFilter;
		 
	},scaleTypeSecond:function(folderName,fileName,pointDataId){
		alert(folderName);
		alert(fileName);
		 var jsonFilter = new Array();
		 $.ajax({
				url:"/ais/serviceTrend/readDataSecondu/0820140520/08201405200000/"+pointDataId+"",
				type:"get",
				async:false,
				dataType:"json",
				success:function(data){
					console.log(data);
					//Format [{"EvTime":"2014-05-17 00:00:00","D32":"149.74"},{"EvTime":"2014-05-17 00:01:00","D32":"149.61"}]
					//var jsonFilter="";
					jsonFilter+="[";
					var i=0;
					$.each(data,function(index,indexEntry){
						
						var dateTime="2014-05-01 00:00:";
						var sec="";
						sec=index.split("-");
						sec=sec[1];
						dateTime=dateTime+""+addZeroToNumber(sec);
						/*
						console.log(dateTime);
						
						$.each(indexEntry[0],function(index2,indexEntry2){
							console.log(index2+"-"+indexEntry2);
						});
						console.log("--------");
						*/
						//if(i==10){
							//return false;
						//}
						if(i==0){
							jsonFilter+="{\"EvTime\":\""+dateTime+"\"";
							$.each(indexEntry[0],function(index2,indexEntry2){
								jsonFilter+=",\""+index2+"\":\""+indexEntry2+"\"";
							});
						}else{
							jsonFilter+=",{\"EvTime\":\""+dateTime+"\"";
							$.each(indexEntry[0],function(index2,indexEntry2){
								jsonFilter+=",\""+index2+"\":\""+indexEntry2+"\"";
							});
						}
						
						
						jsonFilter+="}";
						i++;
						
						
						
					});
					jsonFilter+="]";
					//console.log(jsonFilter);
				}
		 });
		 return eval("("+jsonFilter+")");
		 
	}
}

var createFileServiceChart={
		
	createFileByHru:function(paramTrendID){
		
		var pointDataId= getDataFromPointEmbed("pointDataId");
		var pointUnitId= $("#paramUnitEmbed-"+paramTrendID+"").val();
		var paramFromDate= $("#paramFromDate-"+paramTrendID+"").val();
		var paramToDate=  $("#paramToDate-"+paramTrendID+"").val();
		
		
		//alert(pointDataId);
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
					
					if(data2==''){
						alert("Data is empty!");
						return false;
					}
					
					setTimeout(function(){
						//alert("create createTrendChart HRU");
						console.log(getDataByDateHour(data2,pointDataId));
						createTrendChart(getDataByDateHour(data2,pointDataId),pointDataId,"12",paramTrendID);
						
						//$("#trendChart").find("g transform").get();
						var lastObject = data2.pop();
						setDefaultPointAndPlan(lastObject,pointDataId,paramTrendID);
						
					},1000);
					
					
				}
			}
		});
		
	},
	createFileByDayu:function(paramTrendID){
		var pointDataId= getDataFromPointEmbed("pointDataId");
		var pointUnitId= $("#paramUnitEmbed-"+paramTrendID+"").val();
		var paramFromDate= $("#paramFromDate-"+paramTrendID+"").val();
		var paramToDate=  $("#paramToDate-"+paramTrendID+"").val();
		
		//alert(paramFromDate);
		//alert(paramToDate);
		
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
					if(data2==''){
						alert("Data is empty!");
						return false;
					}
					
					
					setTimeout(function(){
						createTrendChart(getDataByDateDay(data2,pointDataId),pointDataId,"1",paramTrendID);
						var lastObject = data2.pop();
						setDefaultPointAndPlan(lastObject,pointDataId,paramTrendID);
					},1000);
					
					
				}
			}
		});
		
	},
	createFileByMonthu:function(paramTrendID){
		var pointDataId= getDataFromPointEmbed("pointDataId");
		var pointUnitId= $("#paramUnitEmbed-"+paramTrendID+"").val();
		var paramFromDate= $("#paramFromDate-"+paramTrendID+"").val();
		var paramToDate=  $("#paramToDate-"+paramTrendID+"").val();
		
		//alert(paramFromDate);
		//alert(paramToDate);
		
		$.ajax({
			url:"/ais/serviceTrend/getDataMonthu/"+pointDataId+"/0"+pointUnitId+"/"+paramFromDate+"/"+paramToDate+"",
			type:"get",
			dataType:"json",
			async:false,
			success:function(data){
				
				if(data=='createJsonSuccess'){
					
					var data2=readJsonFilter.scaleTypeMonth();
					
					//console.log(data2);
					
					if(data2==''){
						alert("Data is empty!");
						return false;
					}
					
					setTimeout(function(){
						createTrendChart(getDataByDateMonth(data2,pointDataId),pointDataId,"1",paramTrendID);
						var lastObject = data2.pop();
						setDefaultPointAndPlan(lastObject,pointDataId,paramTrendID);
					},1000);
					
					
				}
			}
		});
		
	},
	createFileBySecondu:function(paramTrendID){
		var pointDataId= getDataFromPointEmbed("pointDataId");
		var pointUnitId= $("#paramUnitEmbed-"+paramTrendID+"").val();
		var paramFromDate= $("#paramFromDate-"+paramTrendID+"").val();
		var paramFromDateArray="";
		var paramYear="";
		var paramMonth="";
		var paramMinute="";
		var paramDay="";
		var paramHour="";
		
		paramFromDateArray=paramFromDate.split("-");
		

		paramYear=paramFromDateArray[0];
		paramMonth=paramFromDateArray[1];
		paramDay=paramFromDateArray[2].split(" ");
		paramDay=paramDay[0];
		paramHour=$("#paramHour-"+paramTrendID+"").val();
		paramMinute=$("#paramMinate-"+paramTrendID+"").val();
		
		var fileName=paramYear+""+paramMonth+""+addZeroToNumber(paramDay)+""+addZeroToNumber(paramHour)+""+addZeroToNumber(paramMinute);
		//alert(folderName);
		var folderName=paramYear+""+paramMonth+""+addZeroToNumber(paramDay);
		
		
		
		
		
		
		
		var data2=readJsonFilter.scaleTypeSecond(folderName,fileName,pointDataId);
		console.log(data2);
		 
		
		setTimeout(function(){
			createTrendChart(getDataByDateSecond(data2,pointDataId),pointDataId,"1",paramTrendID);
			//createTrendChart(data2,pointDataId,"1",paramTrendID);
			var lastObject = data2.pop();
			setDefaultPointAndPlan(lastObject,pointDataId,paramTrendID);
		},1000);
					
					
			
		
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
	 var scale = parseInt($("#scaleTimeMenuLeftArea-"+$("#trendTabActive").val()+"").text());
	 var paramStartDateOnProccess= $("#paramStartDateOnProccess-"+paramTrendID).val();
	 var startTime= paramStartDateOnProccess;
 	// var startTime= intervalDelFn(datetimeCurrentHFn($("#paramToDate-"+paramTrendID+"").val()),'hour',5);
	 var endTime = intervalAddFn(startTime,'hour',scale);
	 var data2=readJsonFilterFile(startTime,endTime,paramTrendID);
	 var paramPoint='';
	 $("#paramPoint").val('');
	 $(".clickHideShowPoint").removeClass("showPoint");
	 $(".clickHideShowPoint").addClass("hiddenPoint");
	 
	 createTrendChart(getDataByMenute(data2,paramPoint),paramPoint,'',paramTrendID);
	
	 
	 startTime=startTime.split(" ");
	 $("#startTimeForDisplay-"+paramTrendID+"").val(addZeroTOMinute(startTime[1]));
	
 }
 var readJsonShowPointAllFn=function(paramTrendID){
	 var scale = parseInt($("#scaleTimeMenuLeftArea-"+$("#trendTabActive").val()+"").text());
	 var paramStartDateOnProccess= $("#paramStartDateOnProccess-"+paramTrendID).val();
	 var startTime= paramStartDateOnProccess;	
 	 //var startTime= intervalDelFn(datetimeCurrentHFn($("#paramToDate-"+paramTrendID+"").val()),'hour',5);
	 var endTime = intervalAddFn(startTime,'hour',scale);
	 var data2=readJsonFilterFile(startTime,endTime,paramTrendID);
	 //var paramPoint=$("#paramPointAll").val();
	 var paramPoint= getDataFromPointAllEmbed("pointDataId");
	 $("#paramPoint").val(paramPoint);
	 
	 $(".clickHideShowPoint").removeClass("hiddenPoint");
	 $(".clickHideShowPoint").addClass("showPoint");
	//dataJson,point,paramStep,paramTrendID
	 createTrendChart(getDataByMenute(data2,paramPoint),paramPoint,'',paramTrendID);
	
	 
	 startTime=startTime.split(" ");
	 $("#startTimeForDisplay-"+paramTrendID+"").val(addZeroTOMinute(startTime[1]));
	
 }
 
 var readJsonShowHiddenPointFn=function(point,paramTrendID,$colorIndex){
	 var scale = parseInt($("#scaleTimeMenuLeftArea-"+$("#trendTabActive").val()+"").text());
	 var paramStartDateOnProccess= $("#paramStartDateOnProccess-"+paramTrendID).val();
	 var startTime= paramStartDateOnProccess;
	 
 	 //var startTime= intervalDelFn(datetimeCurrentHFn($("#paramToDate-"+paramTrendID+"").val()),'hour',paramStartTime);
	 var endTime = intervalAddFn(startTime,'hour',scale);
	 var data2=readJsonFilterFile(startTime,endTime,paramTrendID);
	// console.log(data2);
	// console.log(point);
	// var paramPoint=$("#paramPoint").val();
	 
	 createTrendChart(getDataByMenute(data2,point),point,'',paramTrendID,$colorIndex);
	
	 startTime=startTime.split(" ");
	 $("#startTimeForDisplay-"+paramTrendID+"").val(addZeroTOMinute(startTime[1]));
	
 }
//read json by hidden or show point start
 
 //function dinamic read file json start
 function readJsonExpandFocusFn(seek,paramTrendID){
	 startTimeDisplay=0;
	 //alert(startTimeDisplay);
	//var paramStartTime=parseInt($("#startTimeForDisplay-"+paramTrendID+"").val());
	
	//alert(paramStartTime);
	var startTime="";
	//startTime= intervalDelFn(endDatetimeHFn($("#paramToDate-"+paramTrendID+"").val()),'hour',5);
	
	if(($("#paramStartDateOnProccess-"+paramTrendID+"").val()=="")|| ($("#paramStartDateOnProccess-"+paramTrendID+"").val()==undefined)){
		 startTime= intervalDelFn(endDatetimeHFn($("#paramToDate-"+paramTrendID+"").val()),'hour',5);
		 //alert("startTime1="+startTime);
	}else{
		 startTime= $("#paramStartDateOnProccess-"+paramTrendID+"").val();
		 //alert("startTime2="+startTime);
	}
	 var endTime = intervalAddFn(startTime,'hour',seek);
	 	 //alert("endTime="+endTime);
	 var data2=readJsonFilterFile(startTime,endTime,paramTrendID);
	
	 
	 
	 //var paramPoint=$("#paramPoint").val();
	 var paramPoint=getDataFromPointEmbed("pointDataId");
	 //console.log();
	// console.log(getDataByMenute(data2,paramPoint));
	
	 createTrendChart(getDataByMenute(data2,paramPoint),paramPoint,'',paramTrendID);
	 
	 $("#paramStartDateOnProccess-"+paramTrendID).remove();
	 $("body").append("<input type='hidden' name='paramStartDateOnProccess-"+paramTrendID+"' id='paramStartDateOnProccess-"+paramTrendID+"' value='"+startTime+"'>");
 }
//function dinamic read file json end
 
//function dinamic read file json start
 var readJsonReduceStartTimeDisplayFn=function(seek,paramTrendID){
	 var scale = parseInt($("#scaleTimeMenuLeftArea-"+$("#trendTabActive").val()+"").text());
	 var paramStartDateOnProccess= $("#paramStartDateOnProccess-"+paramTrendID).val();
	 //alert("1="+paramStartDateOnProccess);
	 //alert("scale="+scale);
	 //alert("seek<="+seek);
	 //alert(parseInt(scale)-parseInt(seek));
	 
 	 //var startTime= intervalDelFn(datetimeCurrentHFn($("#paramToDate-"+paramTrendID+"").val()),'hour',(scale-seek));
	 var startTime= intervalDelFn(paramStartDateOnProccess,'hour',-seek);
	 //alert("2="+startTime);
	 var endTime = intervalAddFn(startTime,'hour',scale);
	 var data2=readJsonFilterFile(startTime,endTime,paramTrendID);
	 //var paramPoint=$("#paramPoint").val();
	 var paramPoint=getDataFromPointEmbed("pointDataId");
	 createTrendChart(getDataByMenute(data2,paramPoint),paramPoint,'',paramTrendID);
	
	 
	 //alert(startTime);
	 $("#paramStartDateOnProccess-"+paramTrendID).remove();
	 $("body").append("<input type='hidden' name='paramStartDateOnProccess-"+paramTrendID+"' id='paramStartDateOnProccess-"+paramTrendID+"' value='"+startTime+"'>");
	 
	 
	 startTime=startTime.split(" ");
	 $("#startTimeForDisplay-"+paramTrendID+"").val(addZeroTOMinute(startTime[1]));
	 
	 
	
	
}
var readJsonIncreaseStartTimeDisplayFn=function(seek,paramTrendID){
	//alert("seek>="+seek);
	 var paramStartDateOnProccess= $("#paramStartDateOnProccess-"+paramTrendID).val();
	 var scale = parseInt($("#scaleTimeMenuLeftArea-"+$("#trendTabActive").val()+"").text());
 	 //var startTime= intervalDelFn(datetimeCurrentHFn($("#paramToDate-"+paramTrendID+"").val()),'hour',(scale-seek));
	 var startTime= intervalDelFn(paramStartDateOnProccess,'hour',-seek);
	 
 	 var endTime = intervalAddFn(startTime,'hour',scale);
	 var data2=readJsonFilterFile(startTime,endTime,paramTrendID);
	 /*var paramPoint=$("#paramPoint").val();*/
	 var paramPoint=getDataFromPointEmbed("pointDataId");
	 createTrendChart(getDataByMenute(data2,paramPoint),paramPoint,'',paramTrendID);
	 //$("#startTimeForDisplay-"+paramTrendID+"").val(startTime);
	 
	 $("#paramStartDateOnProccess-"+paramTrendID).remove();
	 $("body").append("<input type='hidden' name='paramStartDateOnProccess-"+paramTrendID+"' id='paramStartDateOnProccess-"+paramTrendID+"' value='"+startTime+"'>");
	 
	 
	 
	 startTime=startTime.split(" ");
	 $("#startTimeForDisplay-"+paramTrendID+"").val(addZeroTOMinute(startTime[1]));
}


var readJsonReduceDayDisplayFn=function(seek,paramTrendID){
 	
	var paramStartDateOnProccess= $("#paramStartDateOnProccess-"+paramTrendID).val();
	var scale = parseInt($("#scaleTimeMenuLeftArea-"+$("#trendTabActive").val()+"").text());
	
	 //var startTime= intervalDelFn(datetimeCurrentHFn($("#paramToDate-"+paramTrendID+"").val()),'day',-seek);
	 var startTime= intervalDelFn(paramStartDateOnProccess,'day',-seek);
	 $("#paramStartDateOnProccess-"+paramTrendID).remove();
	 $("body").append("<input type='hidden' name='paramStartDateOnProccess-"+paramTrendID+"' id='paramStartDateOnProccess-"+paramTrendID+"' value='"+startTime+"'>");
	 
	 
	 var endTime = intervalAddFn(startTime,'hour',scale);
 var data2=readJsonFilterFile(startTime,endTime,paramTrendID);
 /*var paramPoint=$("#paramPoint").val();*/
 var paramPoint=getDataFromPointEmbed("pointDataId");
 createTrendChart(getDataByMenute(data2,paramPoint),paramPoint,'',paramTrendID);
 
 
 $("#dateInDataDisplay-"+paramTrendID+"").html(convertDateTh(endTime));
 //$("#paramDateInDataDisplay-"+paramTrendID).remove();
 //$("body").append("<input type='hidden' name='paramDateInDataDisplay-"+paramTrendID+"' id='paramDateInDataDisplay-"+paramTrendID+"' value='"+endTime+"'>");
 $("#dateInDataDisplay-"+paramTrendID+"").html(convertDateTh(endTime));


}
var readJsonIncreaseDayDisplayFn=function(seek,paramTrendID){
	var paramStartDateOnProccess= $("#paramStartDateOnProccess-"+paramTrendID).val();
	var scale = parseInt($("#scaleTimeMenuLeftArea-"+$("#trendTabActive").val()+"").text());
	var startTime= intervalDelFn(paramStartDateOnProccess,'day',-seek);
	$("#paramStartDateOnProccess-"+paramTrendID).remove();
	$("body").append("<input type='hidden' name='paramStartDateOnProccess-"+paramTrendID+"' id='paramStartDateOnProccess-"+paramTrendID+"' value='"+startTime+"'>");
	 
 //var startTime= intervalAddFn(datetimeCurrentHFn($("#paramToDate-"+paramTrendID+"").val()),'day',seek);

 
 var endTime = intervalAddFn(startTime,'hour',scale);
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
			//alert(scale);
			$(".clickHideShowPoint").removeClass("hiddenPoint");
			$(".clickHideShowPoint").addClass("showPoint");
			readJsonExpandFocusFn(scale,$("#trendTabActive").val());
		},500);
		
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
	var countTrendSeting=0;
	$("[href='#trendSeting']").click(function(){
	
		if(countTrendSeting==0){
		$.ajax({
			url:"/View/trend_setting.php",
			type:"html",
			async:false,
			success:function(data){
				//alert(data);
				$("#areaTrendSeting").html(data);
				
			}
		});
		}else{
			alert("อยู่ในระหว่างการปรับปรุง...");
			return false;
		}
		countTrendSeting++;
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


