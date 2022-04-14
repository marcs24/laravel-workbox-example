@extends('layout')

@section('title', 'offline')

@push('css')
    <link rel="stylesheet" href="{{ mix('/css/offline.css') }}" media="all">
@endpush

@push('font')
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
@endpush

@section('content')
    <h1>you are offline!</h1>
    <img width="450px" src="img/offline.png"
@endsection



