$(function () {
    $('#clickButton').click(onClick); //
    function onClick() {
        console.log('Button clicked');
    }
});
function getPs1Games() {
    console.log('getPs1Games');
    $.ajax({
        'url': 'http://thegamesdb.net/api/PlatformGames.php?platform=Sony+Playstation',
        'dataType': 'xml',
        'success': onPs1Data
    });
}

function onPs1Data(xml) {
    $('#games').empty();
    $(xml).find('Game').slice(0, 24).each(function () {
        //console.log('Game: ' + $(this).find('GameTitle').text());
        //console.log('Release date: ' + $(this).find('ReleaseDate').text());
        //console.log('---------------------------------------------');
        var gameImg = $(this).find('thumb').text();
        var game = $(this).find('GameTitle').text();
        var releaseDate = $(this).find('ReleaseDate').text();
        $('#games').append('<li class="word-break">' + '<img src="http://thegamesdb.net/banners/_favcache/_boxart-view/' + gameImg + '"</img><br>' + game + ' - ' + releaseDate + '</li>');

    });
}

function getPs2Games() {
    console.log('getPs2Games');
    $.ajax({
        'url': 'http://thegamesdb.net/api/PlatformGames.php?platform=Sony+Playstation+2',
        'dataType': 'xml',
        'success': onPs2Data
    });
}

function onPs2Data(xml) {
    $('#games').empty();
    $(xml).find('Game').slice(0, 24).each(function () {
        //console.log('Game: ' + $(this).find('GameTitle').text());
        //console.log('Release date: ' + $(this).find('ReleaseDate').text());
        //console.log('---------------------------------------------');
        var gameImg = $(this).find('thumb').text();
        var game = $(this).find('GameTitle').text();
        var releaseDate = $(this).find('ReleaseDate').text();
        $('#games').append('<li class="word-break">' + '<img src="http://thegamesdb.net/banners/_favcache/_boxart-view/' + gameImg + '"</img><br>' + game + ' - ' + releaseDate + '</li>');

    });
}

function getPs3Games() {
    console.log('getPs3Games');
    $.ajax({
        'url': 'http://thegamesdb.net/api/PlatformGames.php?platform=Sony+Playstation+3',
        'dataType': 'xml',
        'success': onPs3Data
    });
}

function onPs3Data(xml) {
    $('#games').empty();
    $(xml).find('Game').slice(0, 24).each(function () {
        //console.log('Game: ' + $(this).find('GameTitle').text());
        //console.log('Release date: ' + $(this).find('ReleaseDate').text());
        //console.log('---------------------------------------------');
        var gameImg = $(this).find('thumb').text();
        var game = $(this).find('GameTitle').text();
        var releaseDate = $(this).find('ReleaseDate').text();
        $('#games').append('<li class="word-break">' + '<img src="http://thegamesdb.net/banners/_favcache/_boxart-view/' + gameImg + '"</img><br>' + game + ' - ' + releaseDate + '</li>');

    });
}

function getPs4Games() {
    console.log('getPs4Games');
    $.ajax({
        'url': 'http://thegamesdb.net/api/PlatformGames.php?platform=Sony+Playstation+4',
        'dataType': 'xml',
        'success': onPs4Data
    });
}

function onPs4Data(xml) {
    $('#games').empty();
    $(xml).find('Game').slice(0, 24).each(function () {
        //console.log('Game: ' + $(this).find('GameTitle').text());
        //console.log('Release date: ' + $(this).find('ReleaseDate').text());
        //console.log('---------------------------------------------');
        var gameImg = $(this).find('thumb').text();
        var game = $(this).find('GameTitle').text();
        var releaseDate = $(this).find('ReleaseDate').text();
        $('#games').append('<li class="word-break">' + '<img src="http://thegamesdb.net/banners/_favcache/_boxart-view/' + gameImg + '"</img><br>' + game + ' - ' + releaseDate + '</li>');

    });
}

function getPlatforms() {
    console.log('getPlatforms');
    $.ajax({
        'url': 'http://thegamesdb.net/api/GetPlatformsList.php',
        'dataType': 'xml',
        'success': onGetPlatforms
    });
}

function onGetPlatforms(xml) {

    $(xml).find('Platform').each(function () {
        //console.log('ID: ' + $(this).find('id').text());
        //console.log('Name: ' + $(this).find('name').text());
        //console.log('---------------------------------------------');

        var id = $(this).find('id').text();
        var name = $(this).find('name').text();
        $('#platforms').append('<option id="' + id + '">' + name + '</option>');
    });
}

function doSearch(name, platform) {
    console.log('doSearch');
    console.log(name);
    console.log(platform);
    $.ajax({
        'url': 'http://thegamesdb.net/api/GetGamesList.php?name=' + name + '&platform=' + platform,
        //'url': 'http://thegamesdb.net/api/GetGamesList.php?name=mortal+kombat&platform=Sony+Playstation',
        'dataType': 'xml',
        'success': onSearchData
    });
}

function onSearchData(xml) {
    $('#searchResults').empty();
    $(xml).find('Game').each(function () {
        var name = $(this).find('GameTitle').text();
        var platform = $(this).find('Platform').text();
        //var name = $(this).find('#gameName').val();
        //var platform = $(this).find('option:selected');
        //doSearch(name, platform);
        $('#searchResults').append('<li>' + name + ' - ' + platform + '</li>');
    });
}
$('#searchButton').click(function () {
    console.log('searchbutton');
    var name = $('#gameName').val();
    var platform = $('#platforms option:selected').text();
    doSearch(name, platform);

});
getPlatforms();
