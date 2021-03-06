@extends('layouts.main')

@section('page_title','Trend')

@include('layouts.navigation')

@section('body')
    @include('layouts.header')
    @section('content')
<meta charset="utf-8">

<link rel="stylesheet" href="/js/kendoCommercial/styles/kendo.common.min2.css" />
<link rel="stylesheet" href="//kendo.cdn.telerik.com/2015.3.930/styles/kendo.rtl.min.css">
<link rel="stylesheet" href="//kendo.cdn.telerik.com/2015.3.930/styles/kendo.silver.min.css">
<link rel="stylesheet" href="//kendo.cdn.telerik.com/2015.3.930/styles/kendo.silver.mobile.min.css">
<!-- kendo ui start 
<link rel="stylesheet" href="/js/kendoCommercial/styles/kendo.black.min.css" />-->
<!-- kendo ui end -->
<link href="/css/plugins/datapicker/datepicker3.css" rel="stylesheet">
<link href="/css/plugins/colorpicker/bootstrap-colorpicker.min.css" rel="stylesheet">
<link href="/css/plugins/daterangepicker/daterangepicker-bs3.css" rel="stylesheet">
<link href="/css/plugins/iCheck/custom.css" rel="stylesheet">
<!-- Data picker -->
<script src="/js/plugins/datapicker/bootstrap-datepicker.js"></script>
<script src="/js/plugins/iCheck/icheck.min.js"></script>
<!-- 
<button id='btnCalAjax'>btnCalAjax</button>
 -->
<!-- Content Start--> 
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
 <script src="/Controller/cMainTrend.js"></script>
<!-- 
<script src="/Controller/cTrend.js"></script>
 -->
<link href="/css/trend.css" rel="stylesheet"> 
<script src="/js/jquery.tooltipCustom.js"></script>
<link href="/css/tooltip.css" rel="stylesheet"> 
 



<!-- exsample start -->

<!-- exsample end -->



<div class="tabs-container topMargin">


    <ul class="nav nav-tabs" id='tabTrendTitle'>
        
        <li class=" pull-right" ><a  href="#trendSeting" data-toggle="tab" aria-expanded="false"><b><span class='btnPlus fa fa-plus-circle'></span></b></a></li>
     
       
    
</ul>
<div class="tab-content" id='tabTrendContent'>


        <div class="tab-pane" id="trendSeting">
            <div class="panel-body">
           
            <!-- content area tab-3 start -->
             <div id="areaTrendSeting"></div>
            <!-- content area tab-3 start -->
            
            
            </div>
        </div>


</div>


<button type="button" data-toggle="modal" data-target="#setTimeScale22"  class="btn btn-warning  btn-sm  ">
    <i class="fa fa-cogs"></i>
</button>

<!-- Content End-->  




<!-- Modal Start -->

<div aria-hidden="true" role="dialog" tabindex="-1" id="setTimeScale22" class="modal inmodal in" >
<div class="modal-dialog modal-lg">
<div class="modal-content animated flipInY">
<div class="modal-header">
    <button data-dismiss="modal" class="close" type="button"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
   <h5 class="modal-title">Edit Point</h5>
      
   </div>
  <div class="modal-body">
  	
                   
                            <div id='editTrendPointArea'>
                                
                            </div>
                    
                    
      </div>
     <div class="modal-footer">
     <button data-dismiss="modal" class="btn btn-white" type="button">ยกเลิก</button>
    <button class="btn btn-primary" type="button">ตกลง</button>
  </div>
 </div>
</div>
</div>

<!-- Modal End -->





<!-- Large modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg">Large modal</button>

<div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>

<!-- Small modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm">Small modal</button>

<div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>
   

            
    @stop
    @section('footer')
        @include('layouts.footer')
    @stop
@stop