<!--Header-->
<div class="row border-bottom">
    <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
        <div class="navbar-header">
            <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#" style="height:30px;">
                <i class="fa fa-bars" style="margin-top: 3px;"></i>
            </a>
        </div>
        <ul class="nav navbar-top-links navbar-right">
            <li>
                <span class="m-r-sm text-muted welcome-message"><b>Analytical Information System</b></span>
            </li>
            <li class="dropdown">
                <a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                    <i class="fa fa-gears"></i> ทั่วไป
                </a>
                <ul class="dropdown-menu dropdown-messages">
                    <li>
                        <div class="dropdown-messages-box">
                            <div class="media-body ">
                                <i class="fa fa-users"></i>
                                <a href='{{  url('/ais/statistics')  }}'>ดูข้อมูลการใช้งาน</a>
                            </div>
                        </div>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <div class="dropdown-messages-box">
                            <div class="media-body ">
                                <i class="fa fa-user"></i>
                                <a href='{{  url('/ais/addUser')  }}'>เพิ่มรายชื่อผู้ใช้งาน</a>
                            </div>
                        </div>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <div class="dropdown-messages-box">
                            <div class="media-body ">
                                <i class="fa fa-gears"></i>
                                <a href='{{  url('/ais/tagConfiguration')  }}'>Tag Configuration</a>
                            </div>
                        </div>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <div class="dropdown-messages-box">
                            <div class="media-body ">
                                <i class="fa fa-gear"></i>
                                <a href='{{  url('/ais/pointConfiguration')  }}'>Point Configuration</a>
                            </div>
                        </div>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <div class="dropdown-messages-box">
                            <div class="media-body ">
                                <i class="fa fa-tasks"></i>
                                <a href='{{  url('/ais/serverSetting')  }}'>Server Setting </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            <li class="dropdown">
                <a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                    <i class="fa fa-users"></i>  วิธีใช้งาน
                </a>
            </li>
            <li>
                <a href="login">
                    <i class="fa fa-sign-out"></i> ออกจากระบบ
                </a>
            </li>
        </ul>
    </nav>
</div>