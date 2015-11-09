
$(document).ready(function(){
	$("#gridSootList").kendoGrid({
        height: 400,
		//scrollable: false,
        // groupable: true,
        //sortable: true,
       /*
        pageable: {
            refresh: true,
            pageSizes: true,
            buttonCount: 5
        },
        */
    });

	
	
	$("#gridSootList2").kendoGrid({
        height: 400,
    });

	
	$("#gridSootList3").kendoGrid({
        height: 400,
    });
	
	$(".k-grid .k-grid-header").hide();
	
	

});