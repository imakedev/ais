@extends('layouts.main')
<!Doctype html>

<html>

<head>

    <title>Laravel 5 – Home Page</title>

</head>

<body>
<h1>{{ $title }}</h1>

<p>{{ $subtitle }}</p>

<div class="col-md-12 table-responsive">
    <table id="editable" class="table table-striped table-bordered table-hover  dataTable" role="grid" aria-describedby="editable_info">
        <thead>
        <tr role="row">
            <th class="" tabindex="0" aria-controls="" rowspan="1" colspan="1" style="width: 0%;" aria-sort="" aria-label="">
                No.
            </th>
            <th class="" tabindex="0" aria-controls="editable" rowspan="1" colspan="1" style="width: 20%;" aria-label="Browser: activate to sort column ascending">
                Name
            </th>
            <th class="" tabindex="0" aria-controls="editable" rowspan="1" colspan="1" style="width: 13%;" aria-label="Platform(s): activate to sort column ascending">
                Point
            </th>
        </tr>
        </thead>
            @foreach($mmems as $mmem)
                <tbody>
                    <tr class="gradeA odd" role="row">
                        <td class="col-md-1">{{$mmem->A}}</td>
                        <td class="col-md-1">{{$mmem->B}}</td>
                        <td class="col-md-10">{{$mmem->C}}</td>
                    </tr>
                </tbody>
            @endforeach
    </table>
</div>

{{--@foreach($mmems as $mmem)--}}

    {{--<div class="panel panel-default">--}}

        {{--<div class="panel-heading">--}}

            {{--<a href="{{ url('mmemployee_table/'. $mmem->A) }}">--}}

                {{--{{ $mmem->B }}xx--}}

            {{--</a>--}}

        {{--</div>--}}

        {{--<div class="panel-body">{{ $mmem->C }}</div>--}}

    {{--</div>--}}


{{--<?php--}}
{{--//phpinfo()--}}
{{--?>--}}
</body>

</html>