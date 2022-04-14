@extends('layout')

@section('title', 'Second')

@push('css')
    <link rel="stylesheet" href="{{ mix('/css/second_site.css') }}" media="all">
@endpush

@section('content')
    <h1>Second Site</h1>
    <a href="/">Go back to first Site</a>
@endsection
