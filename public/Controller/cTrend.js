//============== Function to add comma in decimal ==============//
function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}
//==================end====================================
//function for tooltip start
function templateFormat(category,series,value) {
	/*
   var value1 = addCommas(value.toFixed(2));
   var value2 = ((value/summ)*100).toFixed(2);
   return value1 + " , " + value2 + " %";
   */
	//$("body").append(value);
   if(series=="point1"){
	   $("#valuePoint1").html(addCommas(value));
	   return "<div style='border:1px solid white'>" +
  		"<b style='color:yellow';>Event:</b> xxx xxxxxxxx xxxx xxxx xxx<br> " +
  		"<b style='color:yellow';>Action:</b> xxx xxxxxxxx  xxxx xxx<br> " +
  		"<b style='color:yellow';>VPSER:</b> xxx  xxxx xxxx xxx</div>";
	   
	   
	    
	   
   }else if(series=="point2"){
	   $("#valuePoint2").html(addCommas(value));
	   return addCommas(value);
   }else if(series=="point3"){
	   $("#valuePoint3").html(addCommas(value));
	   return "<div style='border:1px solid white'>" +
 		"<b style='color:yellow';>Event:</b> xxx xxxxxxxx xxxx xxxx xxx<br> " +
 		"<b style='color:yellow';>Action:</b> xxx xxxxxxxx  xxxx xxx<br> " +
 		"<b style='color:yellow';>VPSER:</b> xxx  xxxx xxxx xxx</div>";
   }else if(series=="point4"){
	   $("#valuePoint4").html(addCommas(value));
	   return "<div style='border:1px solid white'>" +
 		"<b style='color:yellow';>Event:</b> xxx xxxxxxxx xxxx xxxx xxx<br> " +
 		"<b style='color:yellow';>Action:</b> xxx xxxxxxxx  xxxx xxx<br> " +
 		"<b style='color:yellow';>VPSER:</b> xxx  xxxx xxxx xxx</div>";
   }else{
	   return "<div style='border:1px solid white'>" +
 		"<b style='color:yellow';>Event:</b> xxx xxxxxxxx xxxx xxxx xxx<br> " +
 		"<b style='color:yellow';>Action:</b> xxx xxxxxxxx  xxxx xxx<br> " +
 		"<b style='color:yellow';>VPSER:</b> xxx  xxxx xxxx xxx</div>";
   }
}
//function for tooltip end
	
$(document).ready(function(){
	
	
	// manage slide 
	$("#chart").kendoChart({
		theme: "Flat",
		//theme: "MaterialBlack",
		//renderAs: "canvas",
		chartArea: {
		    background: ""
		   },
        dataSource: {
            transport: {
                read: {
                    url: "/Model/data.json",
                    dataType: "json"
                }
            },
            sort: {
                field: "time",
                dir: "asc"
            }
        },
        title: {
           // text: "Spain electricity production (GWh)"
        },
        legend: {
            position: "bottom",
            visible: true
        },
        seriesDefaults: {
            type: "line",
            style: "smooth"
        },
        series: [{
            field: "point1",
            name: "point1"
        }, {
            field: "point2",
            name: "point2"
        }, {
            field: "point3",
            name: "point3"
        },{
            field: "point4",
            name: "point4"
        },{
            field: "point5",
            name: "point5"
        },{
            field: "point6",
            name: "point6"
        },{
            field: "point7",
            name: "point7"
        },{
            field: "point8",
            name: "point8"
        }],
        categoryAxis: {
            field: "time",
            labels: {
                rotation: -90
            },
            crosshair: {
                visible: true
            }
        },
        valueAxis: {
            labels: {
                format: "N0"
            },
            majorUnit: 10000
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

        zoomable: {
            mousewheel: {
                lock: "y"
            },
            selection: {
                lock: "y"
            }
        },
        pannable: true,
        pannable: {
            lock: "y"
        },
    });

	
	console.log($("#chart>svg>g>g:eq(2)>g>g:eq(0)>path:eq(1)").get());
	var series1="#chart>svg>g>g:eq(2)>g>g:eq(0)";
	$("#btnPoint1").click(function(){
		//alert("hello");
		console.log($(series1).get());
		console.log(series1);
	});
	
	/*click create trend graph start*/
	$("[href='#tab-3']").click(function(){
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
	/*click create trend graph end*/
	
	
	$("#editTrendPoint").click(function(){
		$.ajax({
			url:"/View/editTrendPoint.php",
			type:"html",
			async:false,
			success:function(data){
				//alert(data);
				$("#editTrendPointArea").html(data);
				
				$("#gridTrendPointList").kendoGrid({
				        sortable: true,
				        pageable: {
				            refresh: true,
				            pageSizes: true,
				            buttonCount: 5
				        },
				    });
				
				
			}
		});
	});
	
	
	/*
	var slider = document.getElementById('basic_slider');
	 $("#basic_slider").noUiSlider({
         start: 50,
         behaviour: 'tap',
         connect: 'upper',
         range: {
             'min':  0,
             'max':  100
         }
     });
	*/


	var slider = document.getElementById('keypress');

	noUiSlider.create(slider, {
		start: 0,
		//step: 10,
		range: {
			'min': 0,
			//'20%': [ 300, 100 ],
			//'50%': [ 800, 50 ],
			'max': 100
		}
	});
	
	slider.noUiSlider.on('update', function( values, handle ) {
		console.log(values[handle]);
	});
	
	


	 

	 
	
});