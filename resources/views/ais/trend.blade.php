@extends('layouts.main')

@section('page_title','Trend')

@include('layouts.navigation')

@section('body')
    @include('layouts.header')
    @section('content')
<meta charset="utf-8">
<link rel="stylesheet" href="//kendo.cdn.telerik.com/2015.3.930/styles/kendo.common.min.css">
<link rel="stylesheet" href="//kendo.cdn.telerik.com/2015.3.930/styles/kendo.rtl.min.css">
<link rel="stylesheet" href="//kendo.cdn.telerik.com/2015.3.930/styles/kendo.silver.min.css">
<link rel="stylesheet" href="//kendo.cdn.telerik.com/2015.3.930/styles/kendo.silver.mobile.min.css">
<link href="/css/plugins/iCheck/custom.css" rel="stylesheet">


<!-- Content Start--> 
  
 <script src="/Controller/cTrend.js"></script>
<link href="/css/trend.css" rel="stylesheet">  
<div class="tabs-container topMargin">
    <ul class="nav nav-tabs">
        <li class="active"><a href="#tab-1" data-toggle="tab" aria-expanded="true"> <b>Trend001</b></a></li>
        <li class=""><a href="#tab-2" data-toggle="tab" aria-expanded="false"><b>Trend002</b></a></li>
        <li class=""><a  href="#tab-3" data-toggle="tab" aria-expanded="false"><b><span class='btnPlus fa fa-plus-circle'></span></b></a></li>
        
         <li class='pull-right'>  
        <div class="ibox-tools topPanelBtn">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="true">
                <i class="fa fa-wrench"></i>
            </a>
            <ul class="dropdown-menu dropdown-user">
                <li>
                    <div class='container widthScaleTime' >
                        <div class=" navy-bg titleDate titleScale">
                             <span> เลือกช่วงเวลาที่ต้องการด<span>
                        </div>
                     <div class='row rowTopBottomMargin'>
                        
                           <div class="form-group">
                                <label class="col-lg-3 control-label textAlign">ช่วงเวลา</label>
                                <div class="col-lg-9">
                                    <select name="scaleTime" class="form-control input-sm">
                                        <option>Minute</option>
                                        <option>Month</option>
                                        <option>Hour</option>
                                        
                                    </select>
                                </div>
                           </div>
                        
                     </div>
                     <div class='row rowTopBottomMargin'>
                       
                           <div class="form-group">
                                <label class="col-lg-3 control-label textAlign">วันที่</label>
                                <div class="col-lg-9">
                                    <div class="input-group date">
                                        <span class="input-group-addon"><i class="fa fa-calendar"></i></span><input type="text"  value="07/01/2014" class="form-control input-sm">
                                    </div>
                                </div>
                           </div>
                        
                     </div>
                     <div class='row rowTopBottomMargin'>
                       
                           <div class="form-group">
                                <label class="col-lg-3 control-label textAlign">ถึงวันที่</label>
                                <div class="col-lg-9">
                                    <div class="input-group date">
                                        <span class="input-group-addon"><i class="fa fa-calendar"></i></span><input type="text"  value="07/01/2014" class="form-control input-sm">
                                    </div>
                                </div>
                           </div>
                        
                     </div>
                     
                      
                   
                     <div class='row rowTopBottomMargin'>
                        <div class='col-sm-12 col-sm-offset-3 '>
                            <button type="submit" class="btn btn-sm btn-white">Cancel</button>
                            <button type="submit" class="btn btn-sm btn-primary">OK</button>
                        </div>
                     </div>
                    </div>
                </li>
                
            </ul>
            <a class="fullscreen-link">
                <i class="fa fa-expand"></i>
            </a>
            <a class="close-link">
                <i class="fa fa-times"></i>
            </a>
        </div>
           <li>  
        
    </ul>
    <div class="tab-content">
        <div class="tab-pane active" id="tab-1">
            <div class="panel-body" >
            
            <div class='row'>
                <div class='col-md-2 basicSlideArea'>
                <!-- slide start -->
                	<div id="keypress" ></div>
                    <!-- <input type="text" id="input-with-keypress"> -->
                <!-- slide end -->
                </div>
                <div class='col-md-6'>
               
                <!-- date display -->
                <div class=" navy-bg titleDate">
                     <span>  ข้อมูลวันที่ 9 - 10 กันยายน 2558 </span>
                </div>
                <!-- date display -->
                </div>
                 <div class='col-md-4'>
                    <!-- date display -->
                    <div class="downloadSettingArea">
                        <button type="button" class="btn btn-primary btn-sm  " data-container="body" 
                        data-toggle="popover" data-placement="bottom"  data-html="true"
                        data-content="
                        <table>
                            <tr>
                                <td>
                                    <input type='radio' name='download'>
                                </td>
                                <td>
                                    &nbsp;Excel
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type='radio' name='download'>
                                </td>
                                <td>
                                    &nbsp;Libre Office
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type='radio' name='download'>
                                </td>
                                <td>
                                    &nbsp;HTML+Data
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type='radio' name='download'>
                                </td>
                                <td>
                                    &nbsp;HTML only
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type='radio' name='download'>
                                </td>
                                <td>
                                    &nbsp;Data only
                                </td>
                            </tr>
                            
                        </table>
                        <button class='btn btn-primary btn-sm  ' type='button'>
                            <i class='fa fa-download'></i>
                           Download
                        </button>
                        ">
                          <i class="fa fa-download"></i>
                        </button>
                         <button type="button" data-toggle="modal" data-target="#setTimeScale" id='editTrendPoint' class="btn btn-warning  btn-sm  ">
                            <i class="fa fa-cogs"></i>
                        </button>
                    </div>
                  
                  
                    <div class='setTimeCustomArea'>
                        <div class='doubleLeftArea'>
                             <a class="btn btn-sm btn-white btn-bitbucket   ">
                             <i class="fa fa-angle-double-left   "></i>
                             </a>
                             <a class="btn btn-white btn-bitbucket btn-sm  ">
                                <i class="fa fa-angle-left"></i>
                             </a>
                        </div>
                        
                        
                         
                      
                      
                        <!-- input form start -->
                            <div class='textSetTime'>
                                <input type="text" class="form-control input-sm  " placeholder="00:00">
                            </div>
                        <!-- input form end -->
                         <div class='doublerightArea'>
                             <a class="btn btn-white btn-bitbucket btn-sm  ">
                                <i class="fa fa-angle-right"></i>
                            </a>
                            <a class="btn btn-white btn-bitbucket btn-sm  ">
                                <i class="fa fa-angle-double-right"></i>
                            </a>
                         </div>
                        
                    </div>
                    
                    <!-- date display -->
                </div>
            </div>
            
            	 <!-- kendo ui chart start -->
                <div class="row">
                    <div class='col-md-10'> 
                        <div class="demo-section k-content wide">
                	        <div id="chart" style="background: center no-repeat url('js/kendoCommercial/bg/world-map.png');"></div>
                	    </div>
            	    </div>
                    <div class='col-md-2 col-padding0' >
                        <!-- list point -->
                            
                            
                            <ul class="list-group clear-list m-t">
                                <li class="list-group-item fist-item">
                                   <div class='row'>
                                        <div class='col-md-10 col-sm-10 col-xs-10'>
                                                <div class="row">
                                                <div class='col-md-12  col-sm-12 col-xs-12' id='btnPoint1'>
                                                    <div  id='labelTitle'>
                                                        <!-- <span class="label label-success" >1</span> Point1-->
                                                        <!-- btn seting grach1 start-->
                                                        
                                                        <button type="button" class="btn btn-primary btn-xs " data-container="body" 
                                                            data-toggle="popover" data-placement="bottom"  data-html="true"
                                                            data-content="
                                                            <table>
                                                                <tr>
                                                                    <td colspan='2'>
                                                                      <b> Set Event</b>
                                                                    </td>
                                                                   
                                                                </tr>
                                                                <tr>
                                                                    <td colspan='2'>
                                                                        <input type='checkbox' name='download'> &nbsp;Event
                                                                    </td>
                                                                  
                                                                </tr>
                                                                <tr>
                                                                    <td colspan='2'>
                                                                        <input type='checkbox' name='download'> &nbsp;Action
                                                                    </td>
                                                                   
                                                                </tr>
                                                                <tr>
                                                                    <td colspan='2'>
                                                                        <input type='checkbox' name='download'>&nbsp;VPSER
                                                                    </td>
                                                                    
                                                                </tr>
                                                                
                                                                 <tr>
                                                                    <td colspan='2'>
                                                                      <b> Set Scale</b>
                                                                    </td>
                                                                   
                                                                </tr>
                                                                <tr>
                                                                    <td colspan='2'>
                                                                     Scale Max=250 T/H Scale Min=0 T/H
                                                                    </td>
                                                                   
                                                                </tr>
                                                                <tr>
                                                                    <td >
                                                                    Max Scale
                                                                    </td>
                                                                    <td >
                                                                    <input type='text'>
                                                                    </td>
                                                                   
                                                                </tr>
                                                                
                                                            </table>
                                                            <br style='clear:both;'>
                                                            <button class='btn btn-primary btn-xs  ' type='button'>
                                                                <i class='fa fa-save'></i>&nbsp;
                                                               OK
                                                            </button>
                                                             <button class='btn btn-primary btn-xs  ' type='button'>
                                                                <i class='fa fa-power-off'></i>&nbsp;
                                                               Cancel
                                                            </button>
                                                            
                                                            ">
                                                              <i class="fa fa-gear"></i>
                                                         </button>
                                                         Point1
                                                        <!-- btn seting grach1 end-->
                                                    </div>   
                                                    <div id='setEvent'>
                                                      
                                                        
                                                    </div>
                                                    
                                                    
                                                </div>
                                                
                                                
                                               
                                            </div>
                                             <div class="row">
                                               
                                                <div class='col-md-12 col-sm-12 col-xs-12'>
                                                     <span class="pull-left valuePoint" id='valuePoint1'>
                                                        
                                                        1427.00
                                                    </span>
                                                     <span class="pull-right planPoint" id='planPoint1'>
                                                        1427.00
                                                    </span>
                                                   
                                               
                                                </div>
                                               
                                            </div>
                                        </div>
                                        <div class='col-md-2 fontSize10 col-sm-2 col-xs-2'>
                                             <div class="row">
                                                 <div class='col-md-12 col-sm-12 col-xs-12'>Mw</div>
                                             </div>
                                             <div class="row">
                                                 <div class='col-md-12 col-sm-12 col-xs-12'>100</div>
                                             </div>
                                             <div class="row">
                                                 <div class='col-md-12 col-sm-12 col-xs-12'>0</div>
                                             </div>
                                             
                                        </div>
                                   </div>
                                    
                                   
                                    
                                </li>
                                
                                <li class="list-group-item">
                                     <div class='row'>
                                        <div class='col-md-10 col-sm-10 col-xs-10'>
                                                <div class="row">
                                                <div class='col-md-12  col-sm-12 col-xs-12'>
                                                     <button type="button" class="btn btn-primary btn-xs ">
                                                        <i class="fa fa-gear"></i>
                                                     </button>Point2
                                                   
                                                </div>
                                                
                                                
                                               
                                            </div>
                                             <div class="row">
                                               
                                                <div class='col-md-12 col-sm-12 col-xs-12'>
                                                     <span class="pull-left valuePoint" id='valuePoint2'>
                                                        1427.00
                                                    </span>
                                                     <span class="pull-right planPoint" id='planPoint2'>
                                                        1427.00
                                                    </span>
                                                   
                                               
                                                </div>
                                               
                                            </div>
                                        </div>
                                        <div class='col-md-2 fontSize10 col-sm-2 col-xs-2'>
                                             <div class="row">
                                                 <div class='col-md-12 col-sm-12 col-xs-12'>Mw</div>
                                             </div>
                                             <div class="row">
                                                 <div class='col-md-12 col-sm-12 col-xs-12'>100</div>
                                             </div>
                                             <div class="row">
                                                 <div class='col-md-12 col-sm-12 col-xs-12'>0</div>
                                             </div>
                                             
                                        </div>
                                   </div>
                                </li>
                                <li class="list-group-item">
                                    <div class='row'>
                                        <div class='col-md-10 col-sm-10 col-xs-10'>
                                                <div class="row">
                                                <div class='col-md-12  col-sm-12 col-xs-12'>
                                                     
                                                    <button type="button" class="btn btn-primary btn-xs ">
                                                        <i class="fa fa-gear"></i>
                                                     </button> Point3
                                                </div>
                                                
                                                
                                               
                                            </div>
                                             <div class="row">
                                               
                                                <div class='col-md-12 col-sm-12 col-xs-12'>
                                                     <span class="pull-left valuePoint" id='valuePoint3'>
                                                        1427.00
                                                    </span>
                                                     <span class="pull-right planPoint" id='planPoint3'>
                                                        1427.00
                                                    </span>
                                                   
                                               
                                                </div>
                                               
                                            </div>
                                        </div>
                                        <div class='col-md-2 fontSize10 col-sm-2 col-xs-2'>
                                             <div class="row">
                                                 <div class='col-md-12 col-sm-12 col-xs-12'>Mw</div>
                                             </div>
                                             <div class="row">
                                                 <div class='col-md-12 col-sm-12 col-xs-12'>100</div>
                                             </div>
                                             <div class="row">
                                                 <div class='col-md-12 col-sm-12 col-xs-12'>0</div>
                                             </div>
                                             
                                        </div>
                                   </div>
                                </li>
                                <li class="list-group-item">
                                     <div class='row'>
                                        <div class='col-md-10 col-sm-10 col-xs-10'>
                                                <div class="row">
                                                <div class='col-md-12  col-sm-12 col-xs-12'>
                                                     
                                                    <button type="button" class="btn btn-primary btn-xs ">
                                                        <i class="fa fa-gear"></i>
                                                     </button>  Point4
                                                </div>
                                                
                                                
                                               
                                            </div>
                                             <div class="row">
                                               
                                                <div class='col-md-12 col-sm-12 col-xs-12'>
                                                     <span class="pull-left valuePoint" id='valuePoint4'>
                                                        1427.00
                                                    </span>
                                                     <span class="pull-right planPoint" id='planPoint4'>
                                                        1427.00
                                                    </span>
                                                   
                                               
                                                </div>
                                               
                                            </div>
                                        </div>
                                        <div class='col-md-2 fontSize10 col-sm-2 col-xs-2'>
                                             <div class="row">
                                                 <div class='col-md-12 col-sm-12 col-xs-12'>Mw</div>
                                             </div>
                                             <div class="row">
                                                 <div class='col-md-12 col-sm-12 col-xs-12'>100</div>
                                             </div>
                                             <div class="row">
                                                 <div class='col-md-12 col-sm-12 col-xs-12'>0</div>
                                             </div>
                                             
                                        </div>
                                   </div>
                                </li>
                                 <li class="list-group-item">
                                    <div class='row'>
                                        <div class='col-md-10 col-sm-10 col-xs-10'>
                                                <div class="row">
                                                <div class='col-md-12  col-sm-12 col-xs-12'>
                                                     
                                                    <button type="button" class="btn btn-primary btn-xs ">
                                                        <i class="fa fa-gear"></i>
                                                     </button>  Point5
                                                </div>
                                                
                                                
                                               
                                            </div>
                                             <div class="row">
                                               
                                                <div class='col-md-12 col-sm-12 col-xs-12'>
                                                     <span class="pull-left valuePoint">
                                                        1427.00
                                                    </span>
                                                     <span class="pull-right planPoint">
                                                        1427.00
                                                    </span>
                                                   
                                               
                                                </div>
                                               
                                            </div>
                                        </div>
                                        <div class='col-md-2 fontSize10 col-sm-2 col-xs-2'>
                                             <div class="row">
                                                 <div class='col-md-12 col-sm-12 col-xs-12'>Mw</div>
                                             </div>
                                             <div class="row">
                                                 <div class='col-md-12 col-sm-12 col-xs-12'>100</div>
                                             </div>
                                             <div class="row">
                                                 <div class='col-md-12 col-sm-12 col-xs-12'>0</div>
                                             </div>
                                             
                                        </div>
                                   </div>
                                </li>
                                 <li class="list-group-item">
                                     <div class='row'>
                                        <div class='col-md-10 col-sm-10 col-xs-10'>
                                                <div class="row">
                                                <div class='col-md-12  col-sm-12 col-xs-12'>
                                                     
                                                    <button type="button" class="btn btn-primary btn-xs ">
                                                        <i class="fa fa-gear"></i>
                                                     </button>  Point6
                                                </div>
                                                
                                                
                                               
                                            </div>
                                             <div class="row">
                                               
                                                <div class='col-md-12 col-sm-12 col-xs-12'>
                                                     <span class="pull-left valuePoint">
                                                        1427.00
                                                    </span>
                                                     <span class="pull-right planPoint">
                                                        1427.00
                                                    </span>
                                                   
                                               
                                                </div>
                                               
                                            </div>
                                        </div>
                                        <div class='col-md-2 fontSize10 col-sm-2 col-xs-2'>
                                             <div class="row">
                                                 <div class='col-md-12 col-sm-12 col-xs-12'>Mw</div>
                                             </div>
                                             <div class="row">
                                                 <div class='col-md-12 col-sm-12 col-xs-12'>100</div>
                                             </div>
                                             <div class="row">
                                                 <div class='col-md-12 col-sm-12 col-xs-12'>0</div>
                                             </div>
                                             
                                        </div>
                                   </div>
                                </li>
                                 <li class="list-group-item">
                                    <div class='row'>
                                        <div class='col-md-10 col-sm-10 col-xs-10'>
                                                <div class="row">
                                                <div class='col-md-12  col-sm-12 col-xs-12'>
                                                     
                                                    <button type="button" class="btn btn-primary btn-xs ">
                                                        <i class="fa fa-gear"></i>
                                                     </button>  Point7
                                                </div>
                                                
                                                
                                               
                                            </div>
                                             <div class="row">
                                               
                                                <div class='col-md-12 col-sm-12 col-xs-12'>
                                                     <span class="pull-left valuePoint">
                                                        1427.00
                                                    </span>
                                                     <span class="pull-right planPoint">
                                                        1427.00
                                                    </span>
                                                   
                                               
                                                </div>
                                               
                                            </div>
                                        </div>
                                        <div class='col-md-2 fontSize10 col-sm-2 col-xs-2'>
                                             <div class="row">
                                                 <div class='col-md-12 col-sm-12 col-xs-12'>Mw</div>
                                             </div>
                                             <div class="row">
                                                 <div class='col-md-12 col-sm-12 col-xs-12'>100</div>
                                             </div>
                                             <div class="row">
                                                 <div class='col-md-12 col-sm-12 col-xs-12'>0</div>
                                             </div>
                                             
                                        </div>
                                   </div>
                                </li>
                                <li class="list-group-item">
                                     <div class='row'>
                                        <div class='col-md-10 col-sm-10 col-xs-10'>
                                                <div class="row">
                                                <div class='col-md-12  col-sm-12 col-xs-12'>
                                                     
                                                    <button type="button" class="btn btn-primary btn-xs ">
                                                        <i class="fa fa-gear"></i>
                                                     </button>  Point8
                                                </div>
                                                
                                                
                                               
                                            </div>
                                             <div class="row">
                                               
                                                <div class='col-md-12 col-sm-12 col-xs-12'>
                                                     <span class="pull-left valuePoint">
                                                        1427.00
                                                    </span>
                                                     <span class="pull-right planPoint">
                                                        1427.00
                                                    </span>
                                                   
                                               
                                                </div>
                                               
                                            </div>
                                        </div>
                                        <div class='col-md-2 fontSize10 col-sm-2 col-xs-2'>
                                             <div class="row">
                                                 <div class='col-md-12 col-sm-12 col-xs-12'>Mw</div>
                                             </div>
                                             <div class="row">
                                                 <div class='col-md-12 col-sm-12 col-xs-12'>100</div>
                                             </div>
                                             <div class="row">
                                                 <div class='col-md-12 col-sm-12 col-xs-12'>0</div>
                                             </div>
                                             
                                        </div>
                                   </div>
                                </li>
                                
                                
                            </ul>
                        <!-- list point -->
                    </div>
                </div>
                <!-- 
                <div class="lineChartArea">
            	</div>
            	<div class='listPointLeftArea'>
            	</div>
            	 -->
                <!-- kendo ui chart end -->
               <div class='row'>
                <div class='col-sm-12'>
                    <div class='trendFooterArea'>
                        <div class='checkboxFooter'>
                            <div class="i-checks">
                            <label class=""> 
                            <div class="iradio_square-green checked" style="position: relative;"><input type="radio" name="a" value="option2" checked="" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
                            <i></i> Show by Point Name </label>
                            </div>
                        </div>
                        <div class='checkboxFooter'>
                                <div class="i-checks">
                                <label class=""> 
                                <div class="iradio_square-green" style="position: relative;"><input type="radio" name="a" value="option1" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
                                <i></i> Show by Tag Name
                                </label>
                                </div>
                        </div>
                       
                       <div class='checkboxFooter showPointAll'>
                            <div class="i-checks">
                            <label class=""> 
                            <div class="iradio_square-green checked" style="position: relative;"><input type="radio" name="a" value="option2" checked="" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div> 
                            <i></i> Show Point All  </label>
                            </div>
                        </div>
                        <div class='checkboxFooter'>
                                <div class="i-checks">
                                <label class=""> 
                               <div class="iradio_square-green" style="position: relative;"><input type="radio" name="a" value="option1" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
                                <i></i> Hidden Point All
                                </label>
                                </div>
                        </div>
                        
                    </div>
                  </div>
               </div>
            </div>
        </div>
        <div class="tab-pane" id="tab-2">
            <div class="panel-body">
            content2
            </div>
        </div>
        <div class="tab-pane" id="tab-3">
            <div class="panel-body">
           
            <!-- content area tab-3 start -->
             <div id="areaTrendSeting"></div>
            <!-- content area tab-3 start -->
            </div>
        </div>


</div>

<!-- Content End-->  



<!-- Main title Start -->
<!-- 
	<div class="row wrapper border-bottom white-bg page-heading">
        <div class="col-lg-10">
            <h2>Dashboard Trend </h2>
            <ol class="breadcrumb">
                <li>
                    <a href="index.html">Dashboard</a>
                </li>
               
                <li class="active">
                    <strong> Trend</strong>
                </li>
            </ol>
        </div>
        
    </div>
-->      
<!-- Main title end -->   

  

<!-- Modal Start -->
<div aria-hidden="true" role="dialog" tabindex="-1" id="setTimeScale" class="modal inmodal in" style="display: none;">
     <div class="modal-dialog modal-lg">
      <div class="modal-content animated flipInY">
        <div class="modal-header">
            <button data-dismiss="modal" class="close" type="button"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
           <h5 class="modal-title">Edit Point</h5>
              
           </div>
          <div class="modal-body">
          	
                            <!-- edit trend point start -->
                                    <div id='editTrendPointArea'>
                                        
                                    </div>
                             <!-- edit trend point end -->
                        
          </div>
         <div class="modal-footer">
         <button data-dismiss="modal" class="btn btn-white" type="button">ยกเลิก</button>
        <button class="btn btn-primary" type="button">ตกลง</button>
      </div>
     </div>
   </div>
  </div>
<!-- Modal End -->
  

            
    @stop
    @section('footer')
        @include('layouts.footer')
    @stop
@stop