<!--Navigation-->
<nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
        <ul class="nav metismenu" id="side-menu">
            <li class="nav-header">
                <div class="dropdown profile-element">
                    <span>
                        <img alt="image" class="img-circle" src="{{ url('img/profile_small.jpg') }}" />
                     </span>
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                    <span class="clear"> <span class="block m-t-xs"> <strong class="font-bold">David Williams</strong>

                     </span>
                    <span class="text-muted text-xs block">Admin </span>
                    </a>
                        <!-- <b class="caret"></b></span> </span> -->
                    <!--
                    <ul class="dropdown-menu animated fadeInRight m-t-xs">
                        <li><a href="profile.html">Profile</a></li>
                        <li><a href="contacts.html">Contacts</a></li>
                        <li><a href="mailbox.html">Mailbox</a></li>
                        <li class="divider"></li>
                        <li><a href="login.html">Logout</a></li>
                    </ul>
                    -->
                </div>
                <div class="logo-element">
                    IN+
                </div>
            </li>
            <li class="active">
                <a href="index"><i class="fa fa-dashboard"></i><span class="nav-label">Dashboards</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level">
                    <li class="active"><a href="trend">Trend</a></li>
                    <li><a href="{{  url('/ais/sootBlower')  }}">Soot/Blower</a></li>
                    <li><a href="{{  url('/ais/processView')  }}">Process View</a></li>

                </ul>
            </li>
            <li class="active">
                <a href="#"><i class="fa fa-bar-chart-o"></i> <span class="nav-label">Design</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level ">
                    <li><a href="{{  url('/ais/trendColor')  }}">Design Trend Color</a></li>
                    <li><a href="{{  url('/ais/designTrend')  }}"> Design Trend</a></li>
                    <li><a href="{{  url('/ais/designCalculation')  }}">Design Calcultion</a></li>
                </ul>
            </li>
            <li class="landing_link">
                <a target="_blank" href="landing.html">
                    <i class="fa fa-star"></i>
                    <span class="nav-label">วิธีใช้งาน</span>
                    <span class="label label-warning pull-right">NEW</span>
                </a>
            </li>
            <li class="special_link">
                <a href="package.html">
                    <i class="fa fa-sign-out"></i>
                    <span class="nav-label">ออกจากระบบ</span>
                </a>
            </li>
        </ul>
    </div>
</nav>