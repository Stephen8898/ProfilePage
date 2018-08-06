var songUpload1 = ["yo","sup", "bro", "Wazzup", "next", "prev"]
var songUpload = [];
var isPlaying = false;
var songSelect = 0;

function Musicplayer (){
   var play = document.getElementById("playSong");
    this.play = function(){
         play;
         isPlaying = true;
         alert(songUpload[songSelect]);
    }

    this.pause = function(){
        if (isPlaying = true){
            play.pause();
            alert("paused")
        }
    }

    this.prev = function(){
        songSelect--;
        alert(songUpload[songSelect]);

    }

    this.next = function(){
        songSelect++;
        alert(songUpload[songSelect]);
    }

    this.stop = function(){

    }
    
    this.load = function(song) {
        play.getAttribute('src', song).onclick = 
        function() { musicPlayer.play()};
       
    }
}

var musicPlayer  = new Musicplayer();
var d = document;

d.getElementById('play').onclick = 
function() { musicPlayer.play()};

d.getElementById('pause').onclick = 
function() { musicPlayer.pause()};

d.getElementById('prev').onclick =
function() {
    if (songSelect != 0){
        musicPlayer.prev();
        musicPlayer.load(songUpload[songSelect]);
    }
    }; 

d.getElementById('next').onclick = 
function() {
    if (songSelect != (songUpload.length - 1) ){
        musicPlayer.next();
        musicPlayer.load(songUpload[songSelect]);
    }
};

d.getElementById('stop').onclick =
function() {musicPlayer.stop()};


function songUpload(){
    var x =  document.getElementById('songUpload');
    var file = x.files[0];
    
 
    if (x.files && file){
     var reader = new FileReader();
     reader.onload = function (x){
     
        musicPlayer.load(x.target.result);
     }

    }
 
 }
 




