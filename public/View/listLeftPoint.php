
 
 
<script src="/Controller/cListLeftPoint.js"></script>

<!-- $_GET['paramTrendID'] -->
<!-- list point start-->
    <li class="list-group-item ">
       <div class='row'>
            <div class='col-md-10 col-sm-10 col-xs-10 '>
                    <div class="row ">
                    <div class='col-md-12  col-sm-12 col-xs-12' id='btnPoint1'>
                        <div  id='labelTitle'>
                            <!-- <span class="label label-success" >1</span> Point1-->
                            <!-- btn seting grach1 start-->
                            
                            <button id='<?=$_GET['point']?>'  type="button" style='background: <?=$_GET['colorFlatTheme']?>;color:white;' class="btn  btn-xs btnSetingPoint" data-container="body" 
                                data-toggle="popover" data-placement="bottom" title="Point Seting"  data-html="true"
                                data-content="
                                 
                                <table class='table '>
                                    <!-- 
                                    <tr>
                                        <td colspan='2'>
                                         <b> Show Piont</b>
                                        </td>
                                       
                                    </tr>
                                    <tr>
                                        <td colspan='2'>
                                                 <input type='radio' name='showPoint' class='showPoint' id='show-<?=$_GET['point']?>' value='show'> Show
                                                 <input type='radio' name='showPoint' class='showPoint' id='hide-<?=$_GET['point']?>' value='hide'> Hide
                                        </td>
                                       
                                    </tr>
                                     -->
                                    <tr>
                                        <td colspan='2'>
                                         <b> Show Event</b>
                                        </td>
                                       
                                    </tr>
                                    
                                    <tr>
                                        <td colspan='2'>
                                            <input type='checkbox' name='pointEvent' class='pointEvent' id='event-<?=$_GET['point']?>' value='event'>&nbsp;Event
                                            &nbsp; <input type='checkbox' class='pointEvent' name='pointEvent' id='action-<?=$_GET['point']?>' value='action'>&nbsp;Action
                                            &nbsp;<input type='checkbox' class='pointEvent' name='pointEvent' id='vpser-<?=$_GET['point']?>' value='vpser'>&nbsp;VPSER
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
                                    <tr>
                                        <td colspan='2' >
                                            <button class='btn btn-primary btn-xs  btnOkSetingPoint' id='psOk-<?=$_GET['point']?>' type='button'>
                                                <i class='fa fa-save'></i>&nbsp;
                                               OK
                                            </button>
                                             <button class='btn btn-primary btn-xs  btnCancelSetingPoint' id='psCancel-<?=$_GET['point']?>' type='button'>
                                                <i class='fa fa-power-off'></i>&nbsp;
                                               Cancel
                                            </button>
                                        </td>
                                    </tr>
                                    
                                </table>
                             
                                
                                
                                ">
                                  <i class="fa fa-gear"></i>
                             </button>
                             <span style='color:<?=$_GET['colorFlatTheme']?>'>
                             
                             <span class='clickHideShowPoint showPoint' id='showPoin-<?=$_GET['point']?>-<?=$_GET['paramTrendID']?>'>
                              <div class='pointName pointName-<?=$_GET['paramTrendID']?>'>
                             <?=$_GET['pointname'];?>
                             </div>
                              <div class='pointTag pointTag-<?=$_GET['paramTrendID']?>' >
                             <?=$_GET['tag'];?>
                             </div>
                             <div class='pointId pointId-<?=$_GET['paramTrendID']?>'>,D<?=$_GET['point']?></div>
                             </span>
                             
                             </span>
                            <!-- btn seting grach1 end-->
                        </div>   
                        <div id='setEvent'>
                          
                            
                        </div>
                        
                        
                    </div>
                    
                    
                   
                </div>
                 <div class="row">
                   
                    <div class='col-md-12 col-sm-12 col-xs-12'>
                         <span class="pull-left valuePoint" id='valuePoint-<?=$_GET['point']?>-<?=$_GET['paramTrendID']?>' style='color:<?=$_GET['colorFlatTheme']?>'>
                            
                            00.00
                        </span>
                         <span class="pull-right planPoint" id='planPoint-<?=$_GET['point']?>-<?=$_GET['paramTrendID']?>' style='color:<?=$_GET['colorFlatTheme']?>'>
                            00.00
                        </span>
                       
                   
                    </div>
                   
                </div>
            </div>
            <div class='col-md-2 fontSize10 col-sm-2 col-xs-2 col-padding0 unitWidth'>
                 <div class="row">
                     <div class='col-md-12 col-sm-12 col-xs-12'><?=$_GET['unit']?></div>
                 </div>
                 <div class="row">
                     <div class='col-md-12 col-sm-12 col-xs-12'><?=$_GET['max']?></div>
                 </div>
                 <div class="row">
                     <div class='col-md-12 col-sm-12 col-xs-12'><?=$_GET['min']?></div>
                 </div>
                 
            </div>
       </div>
    </li>
    <div style='display: none;'>
        <div class='paramEmbedArea' id='paramEmbedArea-<?=$_GET['point']?>'>
            
        </div>
    </div>
    
<!-- list point end-->

