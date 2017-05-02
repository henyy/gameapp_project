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
        $('#games').append('<li class="word-break">' + '<img src="http://thegamesdb.net/banners/_favcache/_boxart-view/' + gameImg +'"</img><br>' + game + ' - ' + releaseDate + '</li>');

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
        $('#games').append('<li class="word-break">' + '<img src="http://thegamesdb.net/banners/_favcache/_boxart-view/' + gameImg +'"</img><br>' + game + ' - ' + releaseDate + '</li>');

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
        $('#games').append('<li class="word-break">' + '<img src="http://thegamesdb.net/banners/_favcache/_boxart-view/' + gameImg +'"</img><br>' + game + ' - ' + releaseDate + '</li>');

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
        $('#games').append('<li class="word-break">' + '<img src="http://thegamesdb.net/banners/_favcache/_boxart-view/' + gameImg +'"</img><br>' + game + ' - ' + releaseDate + '</li>');

    });
}
