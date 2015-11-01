//$(document).ready(function(){
//	$("#gridUserList").kendoGrid({
//       // height: 400,
//        sortable: true,
//       // groupable: true,
//        sortable: true,
//        pageable: {
//            refresh: true,
//            pageSizes: true,
//            buttonCount: 5
//        }
//    });
//});

/* btn Add in addUser */
function addBtn() {
    $('#empNo').attr('readonly', false);
    $('#empNo').val('');
    $('#empTitle').val('');
    $('#empFirstName').val('');
    $('#empLastName').val('');
    $('#empPriority').val('');
    $('#empId').val('');
    $('#modalAddEditUser').modal();
}

/* btn Add in addUser */
function editBtn(index) {
    //alert(index);
    var data = $('#gridUserListBody').children()[index].children;
    $('#empNo').attr('readonly', true);
    $('#empNo').val(data[1].childNodes[0].data);
    $('#empTitle').val(data[2].childNodes[0].data);
    var firstName = data[3].childNodes[0].data.split("   ")[0];
    var lastName = data[3].childNodes[0].data.split("   ")[1];
    $('#empFirstName').val(firstName);
    $('#empLastName').val(lastName);
    $('#empPriority').val(data[4].childNodes[0].data);
    $('#empId').val(data[0].children[1].value);
    $('#modalAddEditUser').modal();
}

function deleteBtn() {
    var isValid = false;
    var length = document.getElementsByName('checkbox[]').length;
    for (var i = 0; i < length; i++) {
        var cbx = document.getElementsByName('checkbox[]')[i];
        if (cbx.checked) {
            isValid = true;
            break;
        }
    }

    if (isValid) {
        isValid = confirm_del();
    }

    return isValid;
}

    //$("#checkAll").change(function () {
    //    $("input:checkbox").prop('checked', $(this).prop("checked"));
    //});

$(document).ready(function(){
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

function validateForm() {
    var isValid = true;
    if ($('#empNo').val() == '') {
        isValid = false;
    }
}