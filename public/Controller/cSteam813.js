var createHtmlForGridEventFn = function(data){
	var htmlTableGridEvent="";
	htmlTableGridEvent +="<table id=\"gridEventList\">";
    htmlTableGridEvent +="<colgroup>";
        htmlTableGridEvent +="<col style=\"width:100%\"/>";
    htmlTableGridEvent +="</colgroup>";
    htmlTableGridEvent +="<thead>";
       htmlTableGridEvent +=" <tr>";
            htmlTableGridEvent +="<th data-field=\"field1\"><b>Event</b></th>";
        htmlTableGridEvent +="</tr>";
  htmlTableGridEvent +="  </thead>";
    htmlTableGridEvent +="<tbody id='gridSteam813DataArea'>";
    
    	$.each(data,function(index,indexEntry){
    		//alert(indexEntry['sys_date']);
    		//alert(indexEntry['ois_event']);
    		
    		 htmlTableGridEvent +="<tr>";
    		 	htmlTableGridEvent +="<td>"+indexEntry['ois_event']+"</td>";
             htmlTableGridEvent +=" </tr>";
    		
    	});
       
     
   htmlTableGridEvent +=" </tbody>";
htmlTableGridEvent +="</table>";
	$("#gridSteam813Area").html(htmlTableGridEvent);
	//$("#gridEventList")
};
var logicPointSteam813 = {
		
		setDateTime(EvTime){
			
			$("#disPlayDateTimeArea").html(EvTime);	
			
		},
		point1(paramDataPoint){
			
			$("#point1").html("<font class='displaynone' color='red'>1,</font>"+parseFloat(paramDataPoint).toFixed(2));	
			
		
		},point2(paramDataPoint){
		
			$("#point2").html("<font class='displaynone' color='red'>2,</font>"+parseFloat(paramDataPoint).toFixed(2));	
			
		},point3(paramDataPoint){
			
			$("#point3").html("<font class='displaynone' color='red'>3,</font>"+parseFloat(paramDataPoint).toFixed(2));	
			
		},point4(paramDataPoint){
			
			$("#point4").html("<font class='displaynone' color='red'>4,</font>"+parseFloat(paramDataPoint).toFixed(2));	
			
		},point5(paramDataPoint){
			
			$("#point5").html("<font class='displaynone' color='red'>5,</font>"+parseFloat(paramDataPoint).toFixed(2));	
			
		},point6(paramDataPoint){
			
			$("#point6").html("<font class='displaynone' color='red'>6,</font>"+parseFloat(paramDataPoint).toFixed(2));	
			
		},point7(paramDataPoint){
			
			$("#point7").html("<font class='displaynone' color='red'>7,</font>"+parseFloat(paramDataPoint).toFixed(2));	
			
		},point8(paramDataPoint){
			
			$("#point8").html("<font class='displaynone' color='red'>8,</font>"+parseFloat(paramDataPoint).toFixed(2));	
			
			
		},point9(paramDataPoint){
			
			$("#point9").html("<font class='displaynone' color='red'>9,</font>"+parseFloat(paramDataPoint).toFixed(2));	
			
		},point10(paramDataPoint){
			
			$("#point10").html("<font class='displaynone' color='red'>10,</font>"+parseFloat(paramDataPoint).toFixed(2));	
			
		}
}




function setDataOnDashboardStream813(data){
	
	logicPointSteam813.setDateTime("<center><b>ข้อมูลวันที่ "+convertDateHisTh(data['EvTime'])+"</b></center>");
	logicPointSteam813.point1(data['D1']);
	logicPointSteam813.point2(data['D2']);
	logicPointSteam813.point3(data['D3']);
	logicPointSteam813.point4(data['D4']);
	logicPointSteam813.point5(data['D5']);
	logicPointSteam813.point6(data['D6']);
	logicPointSteam813.point7(data['D7']);
	logicPointSteam813.point8(data['D8']);
	logicPointSteam813.point9(data['D9']);
	logicPointSteam813.point10(data['D10']);

	
	
}	
var stream813={
		//alert("hello jquery");
		disPlayDateTimeFn(paramDate){
			
			$("#disPlayDateTimeArea").html("<center><b>ข้อมูลวันที่  "+convertDateHisTh(paramDate+" 00:00:00")+"</b></center>");

		},
		readDataEventPCVFn(paramPcv,paramUnit,paramEmpId){
			 var jsonFilter = new Array();
			$.ajax({
				url:"/ais/processView/readDataEventPCVSteam47/"+paramPcv+"/"+paramUnit+"/"+paramEmpId+"",
				type:"get",
				dataType:"json",
				async:false,
				success:function(data){
					console.log(data);
					
					var paramSpanTime = (parseInt($("#paramSpanTimeEmbed").val())/2);
					var paramFromDate2=intervalDelFn($("#paramToDateEmbed").val(),'minute',paramSpanTime);
					var paramToDate2=intervalAddFn($("#paramToDateEmbed").val(),'minute',paramSpanTime);
					/*
					alert(paramSpanTime);
					alert(paramFromDate2);
					alert(paramToDate2);
					*/
					$.each(data,function(index,indexEntry){
						//Test start
						paramFromDate2='2014-05-01 00:00:00';
						paramToDate2='2014-05-01 02:00:00'
						//Test End
						if((toTimestamp(indexEntry['sys_date'])>=toTimestamp(paramFromDate2)) && (toTimestamp(indexEntry['sys_date'])<=toTimestamp(paramToDate2))) {
							jsonFilter.push(indexEntry);
							//console.log(indexEntry);
							
						}
						
					});
					console.log("jsonFilter");
					console.log(jsonFilter);
					
					createHtmlForGridEventFn(jsonFilter);
					bindingGridlistEventFn();
					
				}
			});
		},
		readDataPCVFn(paramPcv,paramUnit,paramEmpId,paramIndexDate){
			//alert(paramIndexDate);
			var jsonFilter = new Array();
			/*
			alert(paramPcv);
			alert(paramUnit);
			alert(parmEmpId);
			alert(paramIndexDate);
			*/
			// TEST->http://localhost:9999/ais/processView/readDataPCVSteam47/Steam813/4/3
			$.ajax({
				url:"/ais/processView/readDataPCVSteam47/"+paramPcv+"/"+paramUnit+"/"+paramEmpId+"",
				type:"get",
				dataType:"json",
				async:false,
				success:function(data){
					
				if(data==''){
					alert('data is empty');
					return false;
				}
					
				if((paramIndexDate!="") && (paramIndexDate!=undefined)){
					//console.log("--1");
					//console.log(parseInt(paramIndexDate));
					var paramMax=data.length;
					var paramStart=data.length;
					//console.log("--2"+data.length);
					
					$.each(data,function(index,indexEntry){
							//console.log(index+"="+(parseInt(paramIndexDate)-1));
						if(index==(parseInt(paramIndexDate)-1)){
							//slideFucusExpressFn(paramIndexDate,paramMax);
							//console.log("--2");
							console.log(indexEntry);
							setDataOnDashboardStream813(indexEntry);
							
						}
					});
				}else{
					
					var paramMax=data.length;
					var paramStart=data.length;
					var lastObject=data;
					lastObject = lastObject.pop();
					slideFucusExpressFn(paramStart,paramMax);
					setDataOnDashboardStream813(lastObject);
				}
					/*
					$.each(data,function(index,indexEntry){
						
						if(toTimestamp(indexEntry['EvTime'])==toTimestamp(lastObject['EvTime'])) {
							jsonFilter.push(indexEntry);
							//console.log(indexEntry);
							
						}
						
					});
					*/
					
				}
			 //console.log(jsonFilter);
			});

		},
		createDataPCVFn(paramPcv,paramUnit,paramEmpId,paramFromDate,paramToDate){
			/*
			alert(paramPcv);
			alert(paramUnit);
			alert(parmEmpId);
			alert(paramFromDate);
			alert(paramToDate);
			*/
			
			//{paramPCV}/{paramUnit}/{parmEmpId}/{paramFromDate}/{paramToDate}
			
			
			$.ajax({
				url:"/ais/processView/createDataPCVSteam47/"+paramPcv+"/"+paramUnit+"/"+paramEmpId+"/"+paramFromDate+"/"+paramToDate+"",
				type:"get",
				dataType:"json",
				async:false,
				success:function(data){
					
					if(data=='createJsonSuccess'){
						
						stream813.readDataPCVFn(paramPcv,paramUnit,paramEmpId,'');
						
					}
					console.log(data);
					
					//setDataOnDashboardStream813(data[0]);
				}
			});
			
			
		},
		createDataEventPCVFn(paramPcv,paramUnit,paramEmpId,paramFromDate,paramToDate){
			
			
			//{paramPCV}/{paramUnit}/{parmEmpId}/{paramFromDate}/{paramToDate}
			
			
			$.ajax({
				url:"/ais/processView/createDataEventPCVSteam47/"+paramPcv+"/"+paramUnit+"/"+paramEmpId+"/"+paramFromDate+"/"+paramToDate+"",
				type:"get",
				dataType:"json",
				async:false,
				success:function(data){
					
					if(data=='createJsonSuccess'){
						
						//stream813.readDataPCVSteam47Fn(paramPcv,paramUnit,paramEmpId,'');
						 stream813.readDataEventPCVFn(paramPcv,paramUnit,paramEmpId);
						
					}
					console.log(data);
					
					//setDataOnDashboardStream813(data[0]);
				}
			});
			
			
		}
		
		
		
		
	}	
var mainSteam813Fn = function(paramPcv,paramUnit,parmEmpId,paramFromDate,paramToDate){

//test read processViewJson-Steam813-4-3.txt
stream813.createDataPCVFn(paramPcv,paramUnit,parmEmpId,paramFromDate,paramToDate);	


stream813.createDataEventPCVFn(paramPcv,paramUnit,parmEmpId,paramFromDate,paramToDate);


stream813.disPlayDateTimeFn(paramToDate);

}