@extends('layout')

@section('title', 'First')

@push('css')
    <link rel="stylesheet" href="{{ mix('/css/first_site.css') }}" media="all">
@endpush

@section('content')
    <h1> First Site</h1>
    <a href="/second">Go to second Site</a>
@endsection
