var mainSteam47Fn = function(paramDate){

var logicPointSteam47 = {
		point1(paramDataPoint){
			
			$("#point1").html("<font color='red'>1,</font>"+paramDataPoint);	
			
		
		},point2(paramDataPoint){
		
			$("#point2").html("<font color='red'>2,</font>"+paramDataPoint);	
			
		},point3(paramDataPoint){
			
			$("#point3").html("<font color='red'>3,</font>"+paramDataPoint);	
			
		},point4(paramDataPoint){
			
			$("#point4").html("<font color='red'>4,</font>"+paramDataPoint);	
			
		},point5(paramDataPoint){
			
			$("#point5").html("<font color='red'>5,</font>"+paramDataPoint);	
			
		},point6(paramDataPoint){
			
			$("#point6").html("<font color='red'>6,</font>"+paramDataPoint);	
			
		},point7(paramDataPoint){
			
			$("#point7").html("<font color='red'>7,</font>"+paramDataPoint);	
			
		},point8(paramDataPoint){
			
			$("#point8").html("<font color='red'>8,</font>"+paramDataPoint);	
			
			
		},point9(paramDataPoint){
			
			$("#point9").html("<font color='red'>9,</font>"+paramDataPoint);	
			
		},point10(paramDataPoint){
			
			$("#point10").html("<font color='red'>10,</font>"+paramDataPoint);	
			
		}
}
function setDataOnDashboardStream47(data){

	logicPointSteam47.point1(data['D1']);
	logicPointSteam47.point2(data['D2']);
	logicPointSteam47.point3(data['D3']);
	logicPointSteam47.point4(data['D4']);
	logicPointSteam47.point5(data['D5']);
	logicPointSteam47.point6(data['D6']);
	logicPointSteam47.point7(data['D7']);
	logicPointSteam47.point8(data['D8']);
	logicPointSteam47.point9(data['D9']);
	logicPointSteam47.point10(data['D10']);

	
	
}	
	
var stream47={
	//alert("hello jquery");
	disPlayDateTimeFn(paramDate){
		
		$("#disPlayDateTimeArea").html("ข้อมูลวันที่  "+convertDateTh(paramDate+" 00:00:00"));

	},
	
	createDataPCVSteam47Fn(){
		
		//alert();
		//{paramPCV}/{paramUnit}/{parmEmpId}/{paramFromDate}/{paramToDate}
		
		/*
		$.ajax({
			url:"/ais/processView/createDataPCVSteam47/4/2014-05-01 00:00:00/2014-05-01 01:10:00",
			type:"get",
			dataType:"json",
			async:false,
			success:function(data){
				setDataOnDashboardStream47(data[0]);
			}
		});
		*/
		
	}
	
	
	
	
}
stream47.createDataPCVSteam47Fn();
stream47.disPlayDateTimeFn(paramDate);
}