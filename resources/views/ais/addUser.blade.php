@extends('layouts.main')

@section('page_title','ทั่วไป')

@include('layouts.navigation')

@section('body')
    @include('layouts.header')
    @section('content')
        <!-- Content Start-->
        <script src='/Controller/cAddUser.js'></script>
        <link href="/css/addUser.css" rel="stylesheet">

        <div class="ibox">
            <div class="ibox-title">
                <h5>เพิ่มรายชื่อผู้ใช้งาน</h5>
                <div class="ibox-tools">
                    <a class="collapse-link">
                        <i class="fa fa-chevron-up"></i>
                    </a>
                    <a class="fullscreen-link">
                        <i class="fa fa-expand"></i>
                    </a>
                    <a class="close-link">
                        <i class="fa fa-times"></i>
                    </a>
                </div>
            </div>
            <div class="ibox-content">
                <form action="/addUser/deleteSelect" method="get">
                <div class="row bgParam">
                    <div class="col-md-12">
                        <a class="btn btn-primary  btn-sm" data-toggle="modal" onclick="addBtn()">Add User</a>
                        <button class="btn btn-w-m btn-danger btn-sm" type="submit" onclick="return deleteBtn()">Delete select</button>
                    </div>
                </div>
                <!-- grid list user -->
                <div class="col-md-12 table-responsive">
                    <table id="gridUserList" class="table table-hover">
                        <colgroup>
                            <col style="width:3%"/>
                            <col style="width:10%"/>
                            <col style="width:8%" />
                            <col style="width:50%" />
                            <col style="width:8%" />
                        </colgroup>
                        <thead>
                        <tr>
                            <th data-field="field1">
                                <input type='checkbox' id="checkAll">
                            </th>
                            <th data-field="field2"><b>เลขประจำตัว</b></th>
                            <th data-field="field3"><b>คำนำหน้า</b></th>
                            <th data-field="field4"><b>ชื่อ-นามสกุล</b></th>
                            <th data-field="field5"><b>Priority</b></th>
                            <th data-field="field6" class="center"><b>Action</b></th>
                        </tr>
                        </thead>
                        <tbody id="gridUserListBody">
                            @foreach($info_employee as $index => $info_emp)
                                <tr>
                                    <td>
                                        <div class='listCheckbox'><input type='checkbox' name="checkbox[]" class="ck" data-id="checkbox" value="{{$info_emp->ZZ}}"></div>
                                        <input type="hidden" value="{{$info_emp->ZZ}}">
                                    </td>
                                    <td>{{$info_emp->A}}</td>
                                    <td>{{$info_emp->B}}</td>
                                    <td>{{$info_emp->C}}</td>
                                    <td>{{$info_emp->D0}}</td>
                                    <td class="center">
                                        <a id="btnEdit" onclick="return editBtn({{$index}})" class="btn btn-dropbox btn-xs"><i style="color: #47a447;" class="glyphicon glyphicon-edit"></i><span hidden id="id">{{$info_emp->A}}</span></a>|
                                        <a href="{{ URL::to('/addUser/destroy',$info_emp->ZZ) }}" onclick="return confirm_del()" class="btn btn-dropbox btn-xs"><i class="glyphicon glyphicon-trash text-danger"></i></a>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
                </form>
                <div style="float: right;">
                    <?php
                    echo $info_employee->render();
                    ?>
                </div>
                <br style='clear:both'>
                <!-- grid list user -->
            </div>
        </div>
        @include('modal.addUserModal')
        <!-- Content End-->
    @stop
    @section('footer')
        @include('layouts.footer')
    @stop
@stop