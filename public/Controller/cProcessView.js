$(document).ready(function(){

	$(".gridPCV").kendoGrid({
	// height: 400,
		theme: "Moonlight",
        scrollable: false,
       
    });
	
	//set current hour,minute

	$("#paramDate").val(currentDate());
	$("#paramHour").val(currentH2Time());
	$("#paramMinute").val(currentMinuteTime());
	//binding data kendoui
	$("#paramDate").kendoDatePicker({
		 theme: "Moonlight",
		 format: "yyyy-MM-dd",
		 
	 });
	$("#paramDate").css({"color":"white"});
	$("#paramPcv").kendoDropDownList();
	$("#unit").kendoDropDownList();
	
	
var listEventFn=function(){
	$("#gridEventList").kendoGrid({
       // height: 400,
		theme: "Moonlight",
        scrollable: false,
       // groupable: true,
       /* sortable: true,*/
       /*
        pageable: {
            refresh: true,
            pageSizes: true,
            buttonCount: 5
        },
        */
    });
	
	$("#btnEvenShowHidden").click(function(){
		
		$("#gridEventList").toggle("slow");
		
		return false;
	});
};

	$("#btnSubmit").click(function(){
		
		
		var paramSpanTime = $("#paramSpanTime").val();
		var paramManate = $("#paramManate").val();
		var paramHour = $("#paramHour").val();
		var paramDate = $("#paramDate").val();
		var paramPcv = $("#paramPcv").val();
		//alert(paramDate);
		/*
		alert(paramSpanTime);
		alert(paramManate);
		alert(paramHour);
		alert(paramDate);
		alert(paramPcv);
		*/
		
		var pcvName=$("#paramPcv").val();
		$.ajax({
			url:"/processView/"+pcvName+".html",
			type:"get",
			dataType:"html",
			async:false,
			success:function(data){
				$("#processViewArea").html(data);
				
				
				
				if(pcvName=='steam47'){
					mainSteam47Fn(paramDate);
				}
				listEventFn();
			}
		});
		
	});
	
	

});