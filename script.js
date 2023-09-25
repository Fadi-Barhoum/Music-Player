let songs = [
    {
        songImage: "media/songImage.png",
        singer: "Singer Name0",
        songName: "Song Name0",
        songURL: "media/song.mp3",
    },
    {
        songImage: "media/songImage1.png",
        singer: "Song Name1",
        songName: "Singer Name1",
        songURL: "media/song1.mp3",
    },
    {
        songImage: "media/songImage1.png",
        singer: "Song Name2",
        songName: "Singer Name2",
        songURL: "media/song1.mp3",
    },
];


let progress = document.getElementById("progress");
let ctrlIcon = document.getElementById("ctrlIcon");
let song = document.getElementById("song");
let currentTime = document.getElementById("currentTime");
let songLong = document.getElementById("songLong");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;

    let songMinutes = Math.floor(song.duration/60);
    let songSeconds = Math.floor(song.duration-(songMinutes*60));
    
    songLong.innerHTML = songMinutes + ":" + songSeconds;

    let currentMinutes = Math.floor(song.currentTime/60);
    let currentSecound = Math.floor(song.currentTime-(currentMinutes*60));

    currentTime.innerHTML = currentMinutes + ":" + currentSecound;
    song.pause();
}

function playPause(){
    if (ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.add("fa-play");
        ctrlIcon.classList.remove("fa-pause");
    }else{
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");  
    }
}

if (song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
        let currentMinutes = Math.floor(song.currentTime/60);
        let currentSecound = Math.floor(song.currentTime-(currentMinutes*60));
        if (currentSecound < 10) {
            currentSecound = '0' + currentSecound; 
          }
        currentTime.innerHTML = currentMinutes + ":" + currentSecound;
    }, 500);
}


progress.onchange = function(){
    song.currentTime = progress.value;
}

let songImage = document.getElementById("songImage");
let songName = document.getElementById("songName");
let singer = document.getElementById("singer");
let songNumber = 0;
function changeSong(){
    songNumber++;   
    if (songNumber < songs.length){
        console.log(songNumber);
        songImage.src = songs[songNumber].songImage;
        song.src = songs[songNumber].songURL;
        singer.innerHTML = songs[songNumber].singer;
        songName.innerHTML = songs[songNumber].songName;
        ctrlIcon.classList.add("fa-play");
        ctrlIcon.classList.remove("fa-pause");
    }else{
        songNumber =-1;
        changeSong();
    }
}

changeSong();

function changeBackSong(){
    songNumber--;
    if (songNumber >= 0){
        console.log(songNumber);
        songImage.src = songs[songNumber].songImage;
        song.src = songs[songNumber].songURL;
        singer.innerHTML = songs[songNumber].singer;
        songName.innerHTML = songs[songNumber].songName;
    }else{
        songNumber = songs.length;
        changeBackSong();
    }
}
