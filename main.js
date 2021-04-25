import './assets/sass/main.scss';



let audioUrl = require('./assets/audio/Jetson.m4a');
let sound = new Audio(audioUrl);

const typeCustomise = document.getElementById('typed');
// const files = Object.values(require('/*.m4a'));
const files = Object.values(require('./assets/audio/*.m4a'));
const audios = files.map(v => new Audio(v));
// const musicContainer = document.getElementById('music-container');
// const audio = document.getElementById('audio');
// const title = document.getElementById('title')
// const cover = document.getElementById('cover-img');
// const play = document.getElementById('play');
// const prev = document.getElementById('prev');
// const next = document.getElementById('next');
// const faPlay = document.getElementById('fa-play');
// const artist = document.getElementById('artist');

// // const chandu = IloveyouRiyaaaaaaaaaaaaat
// const progressContainer = document.getElementById('progress-container');
// const progressBar = document.getElementById('progress');
// ////Make an Array of Songs b
// const songs = ['Border - Marbman','summer','ukulele'];
// const artists = ['Marbman', 'Chomdu', 'Lodu'];
// //Load Song Index
// let songIndex = 0;

// // console.log(audio);
// //Functiion to Load Song 

// loadSong(songs[songIndex]);

// function loadSong(song) {
//     title.innerText = `${song}`;
//     cover.src = `images/${song}.png`;
//     audio.src = `music/${song}.mp3`;
// }

//     // audios.forEach(v => v.play());


// ///Event listener
// function playSong() {
//     musicContainer.classList.add('play');
//     audios.forEach(v => v.play());

//     // audio.play();
//     faPlay.classList.remove('fa-play');
//     faPlay.classList.add('fa-pause');
// }

// function pauseSong() {
//     musicContainer.classList.remove('play');
//     audios.forEach(v => v.pause());

//     audio.pause();
//     faPlay.classList.remove('fa-pause');
//     faPlay.classList.add('fa-play');
// }

// play.addEventListener('click', () => {

//     const isSongPlaying = musicContainer.classList.contains('play');
//     // console.log(musicContainer);

//     // console.log(isSongPlaying);
//     isSongPlaying ? pauseSong() : playSong();
// })

// function nextSong() {
//     songIndex++;
//     songIndex > (songs.length -1) ? songIndex = 0  : songIndex;
//     loadSong(songs[songIndex]);
//     playSong();
// }

// function prevSong() {
//     songIndex--;
//     songIndex < 0 ? (songIndex = songs.length -1) : songIndex;
//     loadSong(songs[songIndex]);
//     playSong();
// }


// function updateProgress(e) {
//     const {duration, currentTime} = e.srcElement;
//     const progressPercent = (currentTime/duration) * 100;
//     progressBar.style.width = `${progressPercent}%`
//     // console.log(e.duration);
// }


// function songSlide(e) {
//     const width = this.clientWidth;
//     const clickX = e.offsetX;
//     const duration = audio.duration;

//     audio.currentTime = (clickX / width) * duration;
//     // console.log(width,clickX);
// }
// audio.addEventListener('timeupdate', updateProgress)
// next.addEventListener('click', nextSong);
// prev.addEventListener('click', prevSong);

// progressContainer.addEventListener('click', songSlide)

////=========SOng Ends =======///

// audio.addEventListener('ended', nextSong);

//tl.timeScale(0.25)
//ScrubGSAPTimeline(tl)

///fetch elements

const songs = ['Jetson', 'fastfree', 'MUJA'];
const musicBox = document.querySelector('.music-box');
const volumeControl = document.querySelector('#volume-control');
const progressContainer = document.getElementById('progress-bar');
let totalDuration = document.querySelector('.Total-duration');
let currentDuration = document.querySelector('.currentTime');
const playButton = document.querySelector('#play');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const cover = document.querySelector('.cover');
console.log(playButton);
//iNITIALLY LOAD SONG DETAILS INTO DOM

const audio = document.getElementById('player');
const progress = document.getElementById('progress');
let songIndex = 0;
////////----Update Progress Bar-----//////

function updateProgress(e) {
const {duration, currentTime } = e.srcElement; //srcElement is the audio 
const progressPercent = (currentTime/ duration ) *100;
progress.style.width = `${progressPercent}%`;

var s = parseInt(sound.duration % 60);
var m = parseInt((sound.duration / 60) % 60);

// totalDuration.innerHTML = m + ':' + s;

var sec = parseInt(sound.currentTime % 60);
if(sec < 10) {
    sec =  '0' + sec;
}
else (sec)
var min = parseInt((sound.currentTime / 60) % 60);
currentDuration.innerHTML = min + ':' + sec ;
}

volumeControl.addEventListener('change', () => {
    sound.volume = (volumeControl.value) / 100;
})


//Update Song Details
// loadSong(songs[songIndex]);

// function loadSong(song) {
//     audio.src = `assets/audio/${song}.m4a`;
// }



function updateDuration(e) {
const width = this.clientWidth;
const clickPosition = e.offsetX;
const duration = sound.duration;
sound.currentTime = (clickPosition / width ) * duration;
}
function playSong () {
    musicBox.classList.add('playing');
        // audios.forEach(v => v.play());
    sound.play();
    playButton.querySelector('.fas').classList.remove('fa-play');
    playButton.querySelector('.fas').classList.add('fa-pause');
    sound.play();
    cover.classList.add('rotate');
}

function pauseSong () {
    musicBox.classList.remove('playing');
    playButton.querySelector('.fas').classList.remove('fa-pause');
    playButton.querySelector('.fas').classList.add('fa-play');
    sound.pause();
    cover.classList.remove('rotate');

}

playButton.addEventListener('click', () => {
    const isPlaying = musicBox.classList.contains('playing');
    isPlaying ? pauseSong() : playSong();
})


//Time - song update
sound.addEventListener('timeupdate', updateProgress);

//Click on Progress Bar to update song

progressContainer.addEventListener('click', updateDuration)

prevButton.addEventListener('click', () => {
    sound.currentTime = 0;
})

nextButton.addEventListener('click', () => {
    sound.currentTime = audio.currentTime + 10;
})