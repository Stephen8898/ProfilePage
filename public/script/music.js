//audio player
//make the audio player an object
//make a playlist
//make images display for the music

$(document).ready(function(){

    var track = 0;
    var library = [];
    var title = [];
    var albumImg = [];
    var artists = [];

    $.ajax({
        url: 'http://api.napster.com/v2.2/tracks/top?apikey=YzdjNjJlMmQtOTU1MS00YTRjLWJlMjktYzJhNDYyMjFjMTRh',
        success: function(data){
            for (var i = 0; i < data.tracks.length; i++){
                title.push(data.tracks[i].name);
                library.push(data.tracks[i].previewURL);
             albumImg.push(data.tracks[i].albumId);
                artists.push(data.tracks[i].artistsName);
            }
           $('#title').html(title[track]);
           $('#artist').html(artists[track]);
           $('#image').attr('src', albumImg[track]);
           $('audio').attr('src', library[track]).trigger('play');

            
        },
        
    });

    function jukeBox(){
       
        this.play = function(){
            $('audio').trigger('play');
            $('#play').show();
            $('#pause').hide();
        }
        
        this.pause = function(){
            $('audio').trigger('pause');
            $('#play').hide();
            $('#pause').show();
        }

        this.stop = function() {
            $('audio').each(function() {
                this.pause();
                this.currentTime = 0;
            });
            $('#stop').hide();
            $('#pause').show();
            $('#play').show();
        }
        
        this.next = function(){
            track++;
            $('#title').html(title[track]);
            $('#artist').html(artist[track]);
            $('#image').attr(albumImg[track]);
        }

        this.previous = function(){
            track--;
            $('#title').html(title[track]);
            $('#artist').html(artist[track]);
            $('#image').attr(albumImg[track]);
        }

        this.load = function(song) {
            $('audio').attr('src',song).trigger('play');
            $('#pause').show();
            $('#play').hide();
            $('#stop').show();
        }

    }

    var jukeBox = new JukeBox();

    $('#play').click(function(){
        jukeBox.play();
    });
    $('#pause').click(function(){
        jukeBox.pause();
    });

    $('#stop').click(function() {
        jukebox.stop();
    });

    $('#previous').click(function() {
        if (track != 0) {
            jukebox.previous();
            jukeBox.load(library[track]);
        }
    });

    $('#next').click(function() {
        if (track != (library.length - 1) ) {
            jukebox.next();
            jukeBox.load(library[track]);
        }
    });

});