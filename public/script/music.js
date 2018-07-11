//audio player
//make the audio player an object
//make a playlist
//make images display for the music

$(document).ready(function(){

    var tracks = 0;
    var library = [];
    var title = [];
    var album = [];
    var artists = [];

    $.ajax({
        url: 'http://api.napster.com/v2.2/tracks/top?apikey=YzdjNjJlMmQtOTU1MS00YTRjLWJlMjktYzJhNDYyMjFjMTRh',
        success: function(data){
            for (var i = 0; i < data.tracks.length; i++){
                title.push(data.tracks[i].name);
                library.push(data.tracks[i].previewURL);
                album.push(data.tracks[i].albumId);
                artists.push(data.tracks[i].artistsName);
            }
            console.log(album);
        },

        
    });

});