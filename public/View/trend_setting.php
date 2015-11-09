<script src='/Controller/cTrendSetting.js'></script>
<link href="/css/trendSetting.css" rel="stylesheet">


<div class="row bgParam ">
   
    <div class="col-xs-offset-6 col-xs-2 ">
     
           <select name="" class="form-control input-sm pull-right">
                <option>Trend Group</option>
                <option>Point Compare</option>
                <option>...</option>
            </select> 
       
    </div>
     <div class="col-xs-2">
      <input type="text" placeholder="ค้นหาด่วน" class="input-sm form-control pull-right"> 
     </div>
    <div class="col-xs-2 ">
          
                <button type="button" class="btn btn-sm btn-primary pull-right" style='width:100%'> Search Trend</button> 
              
    </div>
</div>

<div class='row bgParam'>
     <div class="col-xs-12">
        <a class="btn btn-primary  btn-sm " href="#">Plot Graph </a>
     </div>
</div>

<!-- grid list Trend -->
<table id="gridTrendList">
    <colgroup>
        <col style="width:3%"/>
        <col style="width:85%"/>
        <col style="width:10%" />
       
    </colgroup>
    <thead>
        <tr>
            <th data-field="field1">
               
            </th>
            <th data-field="field2"><b>Trend Nmae</b></th>
           
            <th data-field="field5"><b></b></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
            <div class='listCheckbox'><input type='radio' name='trend'></div>
            </td>
            <td>Trend Name001</td>
            <td>
            <a href="#" class="btn btn-primary  btn-sm ">Choose Point </a>
            </td>
            
        </tr>
         <tr>
            <td>
            <div class='listCheckbox'><input type='radio' name='trend'></div>
            </td>
            <td>Trend Name002</td>
            <td><a href="#" class="btn btn-primary  btn-sm ">Choose Point </a></td>
           
        </tr>
         <tr>
            <td>
            <div class='listCheckbox'><input type='radio' name='trend'></div>
            </td>
            <td>Trend Name003</td>
            <td><a href="#" class="btn btn-primary  btn-sm ">Choose Point </a></td>
           
        </tr>
         <tr>
            <td>
            <div class='listCheckbox'><input type='radio' name='trend'></div>
            </td>
            <td>Trend Name004</td>
            <td><a href="#" class="btn btn-primary  btn-sm ">Choose Point </a></td>
           
        </tr>
         <tr>
            <td>
            <div class='listCheckbox'><input type='radio' name='trend'></div>
            </td>
            <td>Trend Name005</td>
            <td><a href="#" class="btn btn-primary  btn-sm ">Choose Point </a></td>
           
        </tr>
         <tr>
            <td>
            <div class='listCheckbox'><input type='radio' name='trend'></div>
            </td>
            <td>Trend Name006</td>
            <td><a href="#" class="btn btn-primary  btn-sm ">Choose Point </a></td>
            
        </tr>
         
        
    </tbody>
</table>

<!-- grid list Trend -->
<div class="row bgParam2 ">
    <div class="col-xs-offset-10 col-xs-2">
     
           <select class="form-control input-sm" name="">
                <option>All Point</option>
                <option>MM04</option>
                <option>MM05</option>
                <option>...</option>
            </select> 
       
    </div>
    
</div>
<!-- grid list piont -->
<table id="gridPointList">
    <colgroup>
        <col style="width:3%"/>
        <col style="width:5%"/>
        <col style="width:5%" />
        <col style="width:25%" />
        <col style="width:25%" />
        <col style="width:10%" />
        <col style="width:10%" />
        <col style="width:10%" />
       
    </colgroup>
    <thead>
        <tr>
            <th data-field="field1">
               
            </th>
            <th data-field="field2"><b>Point</b></th>
            <th data-field="field3"><b>MM Unit</b></th>
            <th data-field="field4"><b>Point Name</b></th>
            <th data-field="field5"><b>Tag Name</b></th>
            <th data-field="field6"><b>Unit</b></th>
            <th data-field="field7"><b>Max</b></th>
            <th data-field="field8"><b>Min</b></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
            <div class='listCheckbox'><input type='checkbox' name='trend'></div>
            </td>
            <td>1</td>
            <td>4</td>
            <td>Ambient Air Temp</td>
            <td>00QA01T001</td>
            <td>Deg C</td>
            <td>50</td>
            <td>0</td>
        </tr>
        <tr>
            <td>
            <div class='listCheckbox'><input type='checkbox' name='trend'></div>
            </td>
            <td>2</td>
            <td>4</td>
            <td>Aux Steam Sray Value Position</td>
            <td>40RS11G501</td>
            <td>%</td>
            <td>100</td>
            <td>0</td>
        </tr>
        
         
        
    </tbody>
</table>
<br style='clear:both'>
<!-- grid list piont -->