$(document).ready(function(){
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $('#checkAll').click(function (event) {
        if(this.checked){
            $('.ck').each(function(){
                this.checked = true;
            });
        }else{
            $('.ck').each(function(){
                this.checked = false;
            });
        }
    });
});
function getMmTrend(A){
    var obj={
        A:A
    }
    $.ajax({
        url: "/ajax/mmtrend/get",
        method: "GET",
        data: obj
    }).done(function(data, status, xhr) {

    });
}
function getMmname(ZZ){
    var obj={
        ZZ:ZZ
    }
    $.ajax({
        url: "/ajax/mmname/get",
        method: "GET",
        data: obj
    }).done(function(data, status, xhr) {

    });
}

function postMmTrend(){

    var obj={
        "aoe":"aoe"
    }
    var param={
        "A":"ChatChai",
        "B":"Pimtun"
    }
    $.ajax({
        url: "/ajax/mmtrend/post",
        method: "POST",
        data: param
    }).done(function(data, status, xhr) {

    });
}

function postMmname(){
    var obj={
        aoe:"aoe"
    }
    var param={
        aoe:obj
    }
    $.ajax({
        url: "/ajax/mmname/post",
        method: "POST",
        data: param
    }).done(function(data, status, xhr) {

    });
}

// for mmtrend list section start
function showmmtrend(zz){
    $("#mmtrend_zz").val(zz)
    $("#trend_element").show();
    var obj={
        zz:zz
    }
    $.ajax({
        url: "/ajax/mmtrends/list",
        method: "GET",
        data: obj
    }).done(function(data, status, xhr) {
        console.log(data, status, xhr);
       // alert(data.data.length)
        var trendDesignsM = jQuery.parseJSON(data.trendDesignsM);
       var mmnameM = jQuery.parseJSON(data.mmnameM);
       // alert(mmnameM)
        if(mmnameM!=null){
            $("#trend_element_header").html("แสดง Point ของ "+mmnameM.A);
        }


          var str=""+
            " <table id=\"editable\" "+
        " class=\"table table-striped table-bordered table-hover  dataTable\" "+
        "  role=\"grid\" aria-describedby=\"editable_info\"> "+
        "  <thead> "+
        "    <tr role=\"row\"> "+
        "    <th class=\"\" tabindex=\"0\" aria-controls=\"\" "+
        " rowspan=\"1\" colspan=\"1\" style=\"width: 0%;\" "+
        " aria-sort=\"\" aria-label=\"\">  <input type='checkbox' id=\"checkAll_inner\"> "+
        "     </th> "+
        "     <th class=\"\" tabindex=\"0\" aria-controls=\"editable\" "+
        " rowspan=\"1\" colspan=\"1\" style=\"width: 10%;\" "+
        " aria-label=\"Browser: activate to sort column ascending\"> "+
        "     Point "+
        "     </th>"+
        "     <th class=\"\" tabindex=\"0\" aria-controls=\"editable\" "+
        " rowspan=\"1\" colspan=\"1\" style=\"width: 5%;\" "+
        " aria-label=\"Platform(s): activate to sort column ascending\"> "+
        "     MM "+
        "    </th> "+
        "    <th class=\"\" tabindex=\"0\" aria-controls=\"editable\" "+
        " rowspan=\"1\" colspan=\"1\" style=\"width: 35%;\" "+
        " aria-label=\"Platform(s): activate to sort column ascending\"> "+
        "     Point Name "+
        " </th> "+
        " <th class=\"\" tabindex=\"0\" aria-controls=\"editable\" "+
        " rowspan=\"1\" colspan=\"1\" style=\"width: 15%;\" "+
        " aria-label=\"Platform(s): activate to sort column ascending\"> "+
        "     Tag Name "+
        "  </th> "+
        " <th class=\"\" tabindex=\"0\" aria-controls=\"editable\" "+
        " rowspan=\"1\" colspan=\"1\" style=\"width: 10%;\" "+
        " aria-label=\"Platform(s): activate to sort column ascending\"> "+
        "     Unit "+
        "     </th> "+
        "     <th class=\"\" tabindex=\"0\" aria-controls=\"editable\" "+
        " rowspan=\"1\" colspan=\"1\" style=\"width: 5%;\" "+
        " aria-label=\"Platform(s): activate to sort column ascending\"> "+
        "     Max "+
        "     </th> "+
        "     <th class=\"\" tabindex=\"0\" aria-controls=\"editable\" "+
        " rowspan=\"1\" colspan=\"1\" style=\"width: 5%;\" "+
        " aria-label=\"Platform(s): activate to sort column ascending\"> "+
        "     Min "+
        "     </th> "+
              "     <th class=\"\" tabindex=\"0\" aria-controls=\"editable\" rowspan=\"1\" colspan=\"1\"  "+
        "  style=\"width: 10%;\" aria-label=\"Platform(s): activate to sort column ascending\">  "+
        "    Action  "+
        "      </th>  "+
        "    </tr> "+
        "    </thead> "+
        "    <tbody> ";
        if(trendDesignsM.data!=null && trendDesignsM.data.length>0){
            for(var i=0;i<trendDesignsM.data.length;i++){
                str=str+
                "    <tr class=\"gradeA odd\" role=\"row\"> "+
                "    <td class=\"sorting_1\"> "+
                "    <input type='checkbox' name=\"checkbox_inner[]\" "+
                " class=\"ck_inner\" data-id=\"checkbox\"  value=\""+trendDesignsM.data[i].ZZ+"\"> "+
                "    </td> "+
                "   <td>"+trendDesignsM.data[i].A+"</td> "+
                "   <td>"+trendDesignsM.data[i].B+"</td> "+
                "   <td>"+trendDesignsM.data[i].C+"</td> "+
                " <td>"+trendDesignsM.data[i].D+"</td> "+
                " <td>"+trendDesignsM.data[i].E+"</td> "+
                " <td>"+trendDesignsM.data[i].F0+"</td> "+
                " <td>"+trendDesignsM.data[i].F1+"</td> "+
                " <td> "+
              "  <a id=\"btnEdit\" onclick=\"displayMmtrend('edit','"+trendDesignsM.data[i].ZZ+"','"+trendDesignsM.data[i].H+"')\" class=\"btn btn-dropbox btn-xs\"><i style=\"color: #47a447;\" class=\"glyphicon glyphicon-edit\"></i></a>| "+
               " <a onclick=\"displayMmtrendDelete('delete','"+trendDesignsM.data[i].ZZ+"')\" class=\"btn btn-dropbox btn-xs\"><i class=\"glyphicon glyphicon-trash text-danger\"></i></a> "+
               " </td>" +
                    " </tr> ";
            }
        }

        str=str+" </tbody> "+
        " </table> ";

        $("#trend_element_table").html(str);
        $('#checkAll_inner').click(function (event) {
            if(this.checked){
                $('.ck_inner').each(function(){
                    this.checked = true;
                });
            }else{
                $('.ck_inner').each(function(){
                    this.checked = false;
                });
            }
        });
        //alert(data.trendDesignsM)
        //alert(obj.data[0].C)
        //alert(data.paging)
        //$("#trend_paging").html(data.paging)
    });
}
// start display mmname for edit or save
function searchMmpoint(){
    var keyword=$("#keyword").val();
    var mode=$("#mmtrend_mode").val();
    var mmtrend_point_zz=$("#mmtrend_point_zz").val();
    var mmtrend_point_h= $("#mmtrend_point_h").val();
    //alert(mode+","+mmtrend_point_h);
    var obj={
        "keyword":keyword,
        "H":mmtrend_point_h
    }
    //alert(id)
    var str=""+
        " <table id=\"editable\" "+
    " class=\"table table-striped table-bordered table-hover  dataTable\" "+
    " role=\"grid\" aria-describedby=\"editable_info\"> "+
    "   <thead> "+
    "   <tr role=\"row\"> "+
    "   <th class=\"\" tabindex=\"0\" aria-controls=\"\" "+
    " rowspan=\"1\" colspan=\"1\" style=\"width: 0%;\" "+
    " aria-sort=\"\" aria-label=\"\"> "+
    "  "+
    "   </th> "+
    "   <th class=\"\" tabindex=\"0\" "+
    " aria-controls=\"editable\" rowspan=\"1\" "+
    " colspan=\"1\" style=\"width: 20%;\" "+
    " aria-label=\"Browser: activate to sort column ascending\"> "+
    "   Point Name "+
    " </th> "+
    " <th class=\"\" tabindex=\"0\" "+
    " aria-controls=\"editable\" rowspan=\"1\" "+
    " colspan=\"1\" style=\"width: 13%;\" "+
    " aria-label=\"Platform(s): activate to sort column ascending\"> "+
    "   Tag4 "+
    "   </th> "+
    "   <th class=\"\" tabindex=\"0\"  "+
    " aria-controls=\"editable\" rowspan=\"1\" "+
    " colspan=\"1\" style=\"width: 13%;\" "+
    " aria-label=\"Platform(s): activate to sort column ascending\"> "+
    "   Tag5 "+
    "   </th> "+
    "   <th class=\"\" tabindex=\"0\" "+
    " aria-controls=\"editable\" rowspan=\"1\" "+
    " colspan=\"1\" style=\"width: 13%;\" "+
    " aria-label=\"Platform(s): activate to sort column ascending\"> "+
    "   Tag6 "+
    "   </th> "+
    "   <th class=\"\" tabindex=\"0\" "+
    " aria-controls=\"editable\" rowspan=\"1\" "+
    " colspan=\"1\" style=\"width: 13%;\" "+
    " aria-label=\"Platform(s): activate to sort column ascending\"> "+
    "   Tag7 "+
    "   </th> "+
    "   <th class=\"\" tabindex=\"0\" "+
    " aria-controls=\"editable\" rowspan=\"1\" "+
    " colspan=\"1\" style=\"width: 5%;\" "+
    " aria-label=\"Platform(s): activate to sort column ascending\"> "+
    "   Unit "+
    "   </th> "+
    "   <th class=\"\" tabindex=\"0\" "+
    " aria-controls=\"editable\" rowspan=\"1\" "+
    " colspan=\"1\" style=\"width: 5%;\" "+
    " aria-label=\"Platform(s): activate to sort column ascending\"> "+
    "   Max "+
    "   </th> "+
    "   <th class=\"\" tabindex=\"0\" "+
    " aria-controls=\"editable\" rowspan=\"1\" "+
    " colspan=\"1\" style=\"width: 5%;\" "+
    " aria-label=\"Platform(s): activate to sort column ascending\"> "+
    "   Min "+
    "   </th> "+
            /*
    "   <th class=\"\" tabindex=\"0\" "+
    " aria-controls=\"editable\" rowspan=\"1\" "+
    " colspan=\"1\" style=\"width: 5%;\" "+
    " aria-label=\"Platform(s): activate to sort column ascending\"> "+
    "   Data "+
    "   </th> "+
    */
    "   </tr> "+
    "   </thead> "+
    "   <tbody> ";
    $.ajax({
        url: "/ajax/mmpoint/search",
        method: "POST",
        data: obj
    }).done(function(data, status, xhr) {
        console.log(data);
        //alert(data.mmpointM)
        var mmpointM = jQuery.parseJSON(data.mmpointM);
        // alert(mmpointM.length)
        if(mmpointM!=null && mmpointM.length>0) {
            for (var i = 0; i < mmpointM.length; i++) {
                str = str +
                   " <tr class=\"gradeA odd\" role=\"row\"> "+
                "  <td class=\"sorting_1\"> ";
                var checked_str="";
                if(mmpointM[i].A==mmtrend_point_h){
                    checked_str="checked";
                }
                str = str +
                    "  <input type=\"radio\" name=\"point_ids_input[]\" "+checked_str+" value=\""+mmpointM[i].A+"\"> "+
              //  " class=\"i-checks\"> "+
                "     </td> "+
                "    <td>"+mmpointM[i].B+"</td> "+
                "    <td>"+mmpointM[i].C4+"</td> "+
                " <td>"+mmpointM[i].C5+"</td> "+
                " <td>"+mmpointM[i].C6+"</td> "+
                " <td>"+mmpointM[i].C7+"</td> "+
                " <td>"+mmpointM[i].F+"</td> "+
                " <td>"+mmpointM[i].G0+"</td> "+
                " <td>"+mmpointM[i].G1+"</td> "+
               // " <td>435</td> "+
                "  </tr> ";
            }
        }
        str=str+" </tbody> "+
            " </table> ";

        $("#point_list_section").html(str);
    });

}
function  displayMmtrend(mode,id,h_id){

    $("#mmtrend_mode").val(mode)
    $("#mmtrend_point_zz").val(id)
    $("#mmtrend_point_h").val(h_id)
    //alert($("#mmtrend_point_zz").val())
    var obj={
        "ZZ":id,
        "G":$("#mmtrend_zz").val()

    }
    //alert(id)
    $.ajax({
        url: "/ajax/mmtrend/get",
        method: "GET",
        data: obj
    }).done(function(data, status, xhr) {
        console.log(data);
        var mmtrendM = jQuery.parseJSON(data.mmtrendM);
        var mmnamesM = jQuery.parseJSON(data.mmnameM);
        var mmpointM = jQuery.parseJSON(data.mmpointM);
        $("#mmpoint_table_G0").val('');
        $("#mmpoint_table_G1").val('');
        $("#mmpoint_table_F").val('');

        var mmtrend_tilte="แก้ใข";
        if(mode=='add')
            mmtrend_tilte="เพิ่ม";
        $("#button_mmtrend_mode_section").html(mmtrend_tilte);
        //alert(mmtrendM.F0)
        if(mmtrendM !=null ){
            $("#mmpoint_table_G0").val(mmtrendM.F0);
            $("#mmpoint_table_G1").val(mmtrendM.F1);
            $("#mmpoint_table_F").val(mmtrendM.E);
            $("#mmtrend_group_b").val(mmtrendM.B);
        }
      //  alert(mmnamesM.A)
        $("#mmtrend_tilte_section").html(mmtrend_tilte+" Point ไปที่ "+mmnamesM.A);
        $("#myModalAddPoint").modal()
        $("#keyword").val('');
        searchMmpoint();
    });
}
//start delete mmtrend
function displayMmtrendDelete(mode,id){
    $("#myModalMmtrendDelete").modal()
    $("#mmtrend_table_mode").val(mode);
    $("#mmtrend_table_zz").val(id);
}
function doDeleteMmtrend(){
    var ids=[];
    var id="";
    var mode = $("#mmtrend_table_mode").val();
    if(mode=='deleteAll') {

        var length = document.getElementsByName('checkbox_inner[]').length;
        for (var i = 0; i < length; i++) {
            var cbx = document.getElementsByName('checkbox_inner[]')[i];
            if (cbx.checked) {
                ids.push(cbx.value)
            }
        }
        if (ids.length == 0) {
            $("#myModalMmtrendDelete").modal('hide')
            return false;
        }
    }else{
        id=$("#mmtrend_table_zz").val();
    }
    var obj={
        "mode":mode,
        "ZZ":id,
        "ids":ids
    }

    $.ajax({
        url: "/ajax/mmtrend/delete",
        method: "DELETE",
        data: obj
    }).done(function(data, status, xhr) {
        //location.reload()
        showmmtrend($("#mmtrend_zz").val());
        $("#myModalMmtrendDelete").modal('hide')
    });
}
// end delete mmtrend

//start delete Mmname
function displayMmnameDelete(mode,id){
    $("#myModalDelete").modal()
    $("#mmtrend_group_mode").val(mode);
    $("#mmtrend_group_b").val(id);
}
function doDeleteMmname(){
    var ids=[];
    var id="";
    var mode = $("#mmtrend_group_mode").val();
    if(mode=='deleteAll') {

        var length = document.getElementsByName('checkbox[]').length;
        for (var i = 0; i < length; i++) {
            var cbx = document.getElementsByName('checkbox[]')[i];
            if (cbx.checked) {
                ids.push(cbx.value)
            }
        }
        if (ids.length == 0) {
            $("#myModalDelete").modal('hide')
            return false;
        }
    }else{
        id=$("#mmtrend_group_b").val();
    }
    var obj={
        "mode":mode,
        "ZZ":id,
        "ids":ids
    }

    $.ajax({
        url: "/ajax/mmname/delete",
        method: "DELETE",
        data: obj
    }).done(function(data, status, xhr) {
        location.reload()
        $("#myModalDelete").modal('hide')
    });
}
// end delete mmtrend

// start display mmname for edit or save
function  displayMmname(mode,id){
    $("#mmname_mode").val(mode)
    $("#mmname_zz").val(id)
    var obj={
        ZZ:id
    }
    $.ajax({
        url: "/ajax/mmname/get",
        method: "GET",
        data: obj
    }).done(function(data, status, xhr) {
        console.log(data);
        var mmnamesM = jQuery.parseJSON(data.mmnameM);
        var mmname_tilte="แก้ใข";
        if(mode=='add')
            mmname_tilte="เพิ่ม";
        $("#button_mode_section").html(mmname_tilte);
        if(mmnamesM.length>0){
            $("#mmname_a").val(mmnamesM[0].A);
        }

        $("#mmname_tilte_section").html(mmname_tilte+"  Trend");
        $("#myModal2").modal()
    });
}
function  doActionMmname(){

    var mode=$("#mmname_mode").val();
    var mmname_a=$("#mmname_a").val();
    var mmname_zz=$("#mmname_zz").val();
    var obj={
        "A":mmname_a,
        "ZZ":mmname_zz,
        "mode":mode
    }

    $.ajax({
        url: "/ajax/mmname/post",
        method: "POST",
        data: obj
    }).done(function(data, status, xhr) {
        location.reload()
        $("#myModal2").modal('hide')
    });
}

// end display mmtrend for edit or save

function  doActionMmtrend(){

    var mode=$("#mmtrend_mode").val();
    //var mmname_a=$("#mmname_a").val();
    var mmtrend_point_zz=$("#mmtrend_point_zz").val();
    var mmtrend_point_h=$("#mmtrend_point_h").val();
    var mmtrend_zz=$("#mmtrend_zz").val()
    var mmtrend_point_a="";
    var length = document.getElementsByName('point_ids_input[]').length;
    for (var i = 0; i < length; i++) {
        var cbx = document.getElementsByName('point_ids_input[]')[i];
        if (cbx.checked) {
            mmtrend_point_a=cbx.value;
            break;
        }
    }
    var G0=$("#mmpoint_table_G0").val();
    var G1=$("#mmpoint_table_G1").val();
    var F=$("#mmpoint_table_F").val();
    var B=$("#mmtrend_table_B").val();
    //alert(mode+","+mmtrend_point_zz+","+mmtrend_point_a+","+mmtrend_zz)
    //$("#myModalAddPoint").modal('hide')

    var obj={
        "A":mmtrend_point_a,
        "ZZ":mmtrend_point_zz,
        "mode":mode,
        "G0":G0,
        "G1":G1,
        "F":F,
        "B":B,
        "G":mmtrend_zz
    }

    $.ajax({
        url: "/ajax/mmtrend/post",
        method: "POST",
        data: obj
    }).done(function(data, status, xhr) {
       // location.reload()
        showmmtrend(mmtrend_zz)
       // displayMmtrend('edit',mmtrend_point_zz,mmtrend_point_a);
      $("#myModalAddPoint").modal('hide')
    });

}