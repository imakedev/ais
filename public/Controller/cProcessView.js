$(document).ready(function(){

	$(".gridPCV").kendoGrid({
	// height: 400,
		theme: "Moonlight",
        scrollable: false,
       
    });
	
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

	$(".btnSubmit").click(function(){
		//alert($("#pcv").val());
		var pcvName=$("#pcv").val();
		$.ajax({
			url:"/processView/"+pcvName+".html",
			type:"get",
			dataType:"html",
			async:false,
			success:function(data){
				$("#processViewArea").html(data);
				listEventFn();
			}
		});
		
	});
});