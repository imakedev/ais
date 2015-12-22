//Variable Global
var dataEventForTrend="";
/* loading start */

function startLoading(){
	 HoldOn.open('sk-rect');
	 }
function stopLoading(){
	HoldOn.close();
	 }


$(document).ajaxStart(function() {
	//startLoading();
});
$(document).ajaxStop(function() {
	//stopLoading();
});
/* loading end */
//theme
var colorFlatTheme=["#10c4b2", "#ff7663", "#ffb74f", "#a2df53", "#10c4b2","#ff63a5","#1cc47b","#10c4b2","#ff7663","#ffb74f","#a2df53","#1c9ec4"];

//monthName
var monthName = new Array();
monthName[0] = "January";
monthName[1] = "February";
monthName[2] = "March";
monthName[3] = "April";
monthName[4] = "May";
monthName[5] = "June";
monthName[6] = "July";
monthName[7] = "August";
monthName[8] = "September";
monthName[9] = "October";
monthName[10] = "November";
monthName[11] = "December";

//monthNameThai
var thday = new Array ("อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์","เสาร์");
var monthNameTh = new Array ("มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน", "กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"); 

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
//============== Function to curent date ==============//
function currentDateTime(){
	 var d = new Date();
	 var strDate = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate()+" "+d.getHours()+ ":" + d.getMinutes() + ":" + d.getSeconds();
	 return  strDate;
}
function addZeroToNumber(number){
	var numberHasZero="";
	switch(parseInt(number)){
		case 1: numberHasZero="01"; break;
		case 2: numberHasZero="02"; break;
		case 3: numberHasZero="03"; break;
		case 4: numberHasZero="04"; break;
		case 5: numberHasZero="05"; break;
		case 6: numberHasZero="06"; break;
		case 7: numberHasZero="07"; break;
		case 8: numberHasZero="08"; break;
		case 9: numberHasZero="09"; break;
		case 0: numberHasZero="00"; break;
		default: numberHasZero=number;
	}
	return numberHasZero;
}
function addZeroTOMinute(paramHis){
	paramHis = paramHis.split(":");
	paramHis=addZeroToNumber(paramHis[0])+":"+addZeroToNumber(paramHis[1])+":"+addZeroToNumber(paramHis[2])
	return paramHis;
}

//alert(addZeroToNumber(1));
function currentDate(){
	 var d = new Date();
	 var strDate = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
	 return  strDate;
}
function currentDateTh(){
	 var d = new Date();
	 //var strDate = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
	 
	 var strDate = (d.getDate() + " " + monthNameTh[(d.getMonth())] + " " +parseInt(d.getFullYear()+543)) ;
	 
	 return  strDate;
}
//example 2015-11-17 00:00:00 convert to 17 พฤศจิกายน 2558
function convertDateTh(dateTimeHis){
	
	var dateTimeHisFormat=setFormatDateTime(dateTimeHis);
	var d = new Date(dateTimeHisFormat);
	 //var strDate = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
	 
	 var strDate = (d.getDate() + " " + monthNameTh[(d.getMonth()-1)] + " " +parseInt(d.getFullYear()+543)) ;
	 
	 return  strDate;
}
//example 2015-11-17 00:00:00 convert to  พฤศจิกายน 2558
function convertDatetoMonthYearTh(dateTimeHis){
	
	var dateTimeHisFormat=setFormatDateTime(dateTimeHis);
	var d = new Date(dateTimeHisFormat);
	 //var strDate = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
	 
	 var strDate = ( monthNameTh[(d.getMonth()-1)] + " " +parseInt(d.getFullYear()+543)) ;
	 
	 return  strDate;
}
//example 2015-11-17 01:30:00 convert to 17 พฤศจิกายน 2558 เวลา 01:30:00
function convertDateHisTh(dateTimeHis){
	
	var dateTimeHisFormat=setFormatDateTime(dateTimeHis);
	var d = new Date(dateTimeHisFormat);
	 //var strDate = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
	 
	 var strDate = (addZeroToNumber(d.getDate()) + " " + addZeroToNumber(monthNameTh[(d.getMonth()-1)]) + " " +parseInt(d.getFullYear()+543) +"  เวลา "+addZeroToNumber(d.getHours())+ ":" + addZeroToNumber(d.getMinutes()) + ":" + addZeroToNumber(d.getSeconds())) ;
	 
	 return  strDate;
}
function currentTime(){
	 var d = new Date();
	 var strDate = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
	 return  strDate;
}
function currentHTime(){
	 var d = new Date();
	 var strDate = d.getHours() + ":00:00";
	 return  strDate;
}
function currentH2Time(){
	 var d = new Date();
	 var strDate = d.getHours() + ":00";
	 return  strDate;
}
function currentMinuteTime(){
	 var d = new Date();
	 var strDate = d.getMinutes() + ":00";
	 return  strDate;
}

//==================end====================================

//============== Function get time stamp  ==============//
function toTimestamp(strDate){
	 //2014-05-01 23:56:00
	 var strDateArray="";
	 
	 var dd="";
	 var mm="";
	 var yyyy="";
	 var HH="";
	 var ii="";
	 var ss="";
	 strDateArray=strDate.split("-");
	 
	 yyyy=strDateArray[0];
	 mm=strDateArray[1];
	 dd=strDateArray[2];
	 
	

	 strDate=yyyy+" "+mm+" "+dd;

	 
	// return strDate;
	 var datum = Date.parse(strDate);
	 return datum/1000;
	 
	}
//==================end====================================


//============== Function manage interval  ==============//
function dateAdd(date, interval, units) {
 var ret = new Date(date); //don't change original date
 switch(interval.toLowerCase()) {
   case 'year'   :  ret.setFullYear(ret.getFullYear() + units);  break;
   case 'quarter':  ret.setMonth(ret.getMonth() + 3*units);  break;
   case 'month'  :  ret.setMonth(ret.getMonth() + units);  break;
   case 'week'   :  ret.setDate(ret.getDate() + 7*units);  break;
   case 'day'    :  ret.setDate(ret.getDate() + units);  break;
   case 'hour'   :  ret.setTime(ret.getTime() + units*3600000);  break;
   case 'minute' :  ret.setTime(ret.getTime() + units*60000);  break;
   case 'second' :  ret.setTime(ret.getTime() + units*1000);  break;
   default       :  ret = undefined;  break;
 }
 return ret;
}
function dateDel(date, interval, units) {
	  var ret = new Date(date); //don't change original date
	  switch(interval.toLowerCase()) {
	    case 'year'   :  ret.setFullYear(ret.getFullYear() - units);  break;
	    case 'quarter':  ret.setMonth(ret.getMonth() - 3*units);  break;
	    case 'month'  :  ret.setMonth(ret.getMonth() - units);  break;
	    case 'week'   :  ret.setDate(ret.getDate() - 7*units);  break;
	    case 'day'    :  ret.setDate(ret.getDate() - units);  break;
	    case 'hour'   :  ret.setTime(ret.getTime() - units*3600000);  break;
	    case 'minute' :  ret.setTime(ret.getTime() - units*60000);  break;
	    case 'second' :  ret.setTime(ret.getTime() - units*1000);  break;
	    default       :  ret = undefined;  break;
	  }
	  return ret;
	}
//example

//d = new Date();
//alert('start:      ' + d);
//alert('+1 year:    ' + dateAdd(d, 'YEAR', 1));
//alert('+1 quarter: ' + dateAdd(d, 'QUARTER', 1));
//alert('+1 month:   ' + dateAdd(d, 'MONTH', 1));
//alert('+1 week:    ' + dateAdd(d, 'week', 1));
//alert('+1 day:     ' + dateAdd(d, 'day', 1));
//alert('+1 hour:    ' + dateAdd(d, 'hour', 1));
//alert('+1 minute:  ' + dateAdd(d, 'minute', 1));
//alert('+1 second:  ' + dateAdd(d, 'second', 1));
//alert('+1 garbage: ' + dateAdd(d, 'garbage', 1));







//var d = new Date("July 21, 1983 01:15:00");
/*
var endTimeDel5h = new Date();
var starttimeDel5h= new Date(dateDel(endTimeDel5h, 'hour', 5));

var yearDel5h=starttimeDel5h.getFullYear();
var monthDel5h=starttimeDel5h.getMonth();
var dayDel5h=starttimeDel5h.getDate();
var HoursDel5h=starttimeDel5h.getHours();
var minutesDel5h=starttimeDel5h.getMinutes();
var secondsDel5h=starttimeDel5h.getSeconds();

*/
//==================end====================================

//============== Function set format date for standdard  ==============//
function setFormatDateTime(dateTime){
	dateTime=dateTime.split("-");
	dateTimeYear=dateTime[0];
	dateTimeMonth=dateTime[1];
	dateTimeDayAndHis=dateTime[2];
	dateTimeDayAndHis=dateTimeDayAndHis.split(" ");
	dateTimeDay=dateTimeDayAndHis[0];
	dateTimeHis=dateTimeDayAndHis[1];

	//return 11 15 2015 00:00:00
	return monthName[parseInt(dateTimeMonth)]+" "+dateTimeDay+", "+dateTimeYear+" "+dateTimeHis;
}
//2014-05-01 05:00:00
//alert(setFormatDateTime("2014-05-01 05:00:00"));

//==================end====================================

//============== Function interval general ==============//
function intervalDelFn(dateTimeHis,interval,units){
	
	var dateTimeHisFormat=setFormatDateTime(dateTimeHis);
	
	var d = new Date(dateTimeHisFormat);
	
	
	var dateTimeInterval= new Date(dateDel(d, interval, units));
	//return dateTimeInterval;
	
	var dateTimeIntervalFormat="";
	var yearDel=dateTimeInterval.getFullYear();
	var monthDel=dateTimeInterval.getMonth();
	var dayDel=dateTimeInterval.getDate();
	var HoursDel=dateTimeInterval.getHours();
	var minutesDel=dateTimeInterval.getMinutes();
	var secondsDel=dateTimeInterval.getSeconds();
	
	dateTimeIntervalFormat=yearDel+"-"+monthDel+"-"+dayDel+" "+HoursDel+":"+minutesDel+":"+secondsDel;
	return dateTimeIntervalFormat;
	
}
function intervalAddFn(dateTimeHis,interval,units){
	
	var dateTimeHisFormat=setFormatDateTime(dateTimeHis);
	
	var d = new Date(dateTimeHisFormat);
	
	
	var dateTimeInterval= new Date(dateAdd(d, interval, units));
	//return dateTimeInterval;
	
	var dateTimeIntervalFormat="";
	var yearDel=dateTimeInterval.getFullYear();
	var monthDel=dateTimeInterval.getMonth();
	var dayDel=dateTimeInterval.getDate();
	var HoursDel=dateTimeInterval.getHours();
	var minutesDel=dateTimeInterval.getMinutes();
	var secondsDel=dateTimeInterval.getSeconds();
	
	dateTimeIntervalFormat=yearDel+"-"+monthDel+"-"+dayDel+" "+HoursDel+":"+minutesDel+":"+secondsDel;
	return dateTimeIntervalFormat;
	
}
function intervalDelNoneHisThFn(dateTimeHis,interval,units){
	
	var dateTimeHisFormat=setFormatDateTime(dateTimeHis);
	
	var d = new Date(dateTimeHisFormat);
	
	
	var dateTimeInterval= new Date(dateDel(d, interval, units));
	//return dateTimeInterval;
	
	var dateTimeIntervalFormat="";
	var yearDel=dateTimeInterval.getFullYear();
	var monthDel=dateTimeInterval.getMonth();
	var dayDel=dateTimeInterval.getDate();
	var HoursDel=dateTimeInterval.getHours();
	var minutesDel=dateTimeInterval.getMinutes();
	var secondsDel=dateTimeInterval.getSeconds();
	
	//dateTimeIntervalFormat=monthDel+"-"+dayDel;
	dateTimeIntervalFormat=dayDel+" "+monthNameTh[(monthDel-1)]+" "+(parseInt(yearDel)+543);
	return dateTimeIntervalFormat;
	
}

//test
//alert(intervalDelFn('2015-11-15 00:00:00','day',1));
//==================end====================================

//============== Function get start date time 5 h ago ==============//
function startDateTime5HaGoFn(endDatetimeHis){
	
	var endtimeFormat=setFormatDateTime(endDatetimeHis);
	var d = new Date(endtimeFormat);
	var starttimeDel5h= new Date(dateDel(d, 'hour', 5));
	
	var yearDel5h=starttimeDel5h.getFullYear();
	var monthDel5h=starttimeDel5h.getMonth();
	var dayDel5h=starttimeDel5h.getDate();
	var HoursDel5h=starttimeDel5h.getHours();
	var minutesDel5h=starttimeDel5h.getMinutes();
	var secondsDel5h=starttimeDel5h.getSeconds();
	
	//startDatetimeHis=yearDel5h+"-"+monthDel5h+"-"+dayDel5h+" "+HoursDel5h+":"+minutesDel5h+":"+secondsDel5h;
	startDatetimeHis=yearDel5h+"-"+monthDel5h+"-"+dayDel5h+" "+HoursDel5h+":00:00";
	return startDatetimeHis;
}

//==================end====================================
//============== Function get end date time + His==============//
//endDatetimeHis
function endDatetimeHisFn(endDatetime){
	
	var endDatetimeHis="";
	endDatetime=endDatetime.split(" ");
	endDatetime=endDatetime[0];
	endDatetimeHis=endDatetime+" "+currentTime();
	
	return endDatetimeHis;

}
function endDatetimeHFn(endDatetime){
	
	var endDatetimeHis="";
	endDatetime=endDatetime.split(" ");
	endDatetime=endDatetime[0];
	endDatetimeHis=endDatetime+" "+currentHTime();
	
	return endDatetimeHis;

}
function datetimeCurrentHFn(datetime){
	//Example return 10:00:00
	var datetimeHis="";
	datetime=datetime.split(" ");
	datetime=datetime[0];
	datetimeHis=datetime+" "+currentHTime();
	
	return datetimeHis;

}
//slider start
var i=0;

function slideScaleFn(paramTrendID,startStep){
	
	//alert(startStep);
	
	$("#scaleTimeMenuRightArea-"+paramTrendID+"").html("<div id=\"keypress-"+paramTrendID+"\" ></div>");
	var slider = document.getElementById("keypress-"+paramTrendID+"");

	noUiSlider.create(slider, {
		start: startStep,
		step: 2,
		range: {
			'min': 0,
			//'20%': [ 300, 100 ],
			//'50%': [ 800, 50 ],
			'max': 24
		}
	});
	
	slider.noUiSlider.on('update', function( values, handle ) {
		//console.log(values[handle]);
		$("#expandFocus-"+paramTrendID+"").val(values[handle]+" Hour");
		$("#scaleTimeMenuLeftArea-"+paramTrendID+"").html(values[handle]+" Hour");
		
			if(i!=0){
				//alert("ok");
				//readJsonExpandFocusFn(values[handle],paramTrendID);
			}else{
				//alert("not ok");
			}
				
			i++;	
			
	});
	
	
}
	//slider end

//==================end====================================

	
	
	
// Test Data Start here...
function testReadDataSecondu(){
	 $.ajax({
			url:"/ais/serviceTrend/readDataSecondu",
			type:"get",
			async:false,
			dataType:"json",
			success:function(data){
				console.log(data);
				//Format [{"EvTime":"2014-05-17 00:00:00","D32":"149.74"},{"EvTime":"2014-05-17 00:01:00","D32":"149.61"}]
				var dataJson="";
				dataJson+="[";
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
					
					if(i==0){
						dataJson+="{\"EvTime\":\""+dateTime+"\"";
						$.each(indexEntry[0],function(index2,indexEntry2){
							dataJson+=",\""+index2+"\":\""+indexEntry2+"\"";
						});
					}else{
						dataJson+=",{\"EvTime\":\""+dateTime+"\"";
						$.each(indexEntry[0],function(index2,indexEntry2){
							dataJson+=",\""+index2+"\":\""+indexEntry2+"\"";
						});
					}
					
					
					dataJson+="}";
					i++;
					
					
					
				});
				dataJson+="]";
				console.log(dataJson);
			}
	 });
}
//testReadDataSecondu();
//Test Data End here..
	