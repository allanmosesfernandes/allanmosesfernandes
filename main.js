import './assets/sass/main.scss';
const typeCustomise = document.getElementById('typed');
// const files = Object.values(require('/*.mp3'));
const files = Object.values(require('./assets/audio/*.mp3'));
const audios = files.map(v => new Audio(v));
const musicContainer = document.getElementById('music-container');
const audio = document.getElementById('audio');
const title = document.getElementById('title')
const cover = document.getElementById('cover-img');
const play = document.getElementById('play');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const faPlay = document.getElementById('fa-play');
const artist = document.getElementById('artist');
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress');
////Make an Array of Songs b
const songs = ['Border - Marbman','summer','ukulele'];
const artists = ['Marbman', 'Chomdu', 'Lodu'];
//Load Song Index
let songIndex = 0;

console.log(audio);
//Functiion to Load Song 

loadSong(songs[songIndex]);

function loadSong(song) {
    title.innerText = `${song}`;
    cover.src = `images/${song}.png`;
    audio.src = `music/${song}.mp3`;
}



///Event listener
function playSong() {
    musicContainer.classList.add('play');
    audios.forEach(v => v.play());

    // audio.play();
    faPlay.classList.remove('fa-play');
    faPlay.classList.add('fa-pause');
}

function pauseSong() {
    musicContainer.classList.remove('play');
    audios.forEach(v => v.pause());

    audio.pause();
    faPlay.classList.remove('fa-pause');
    faPlay.classList.add('fa-play');
}

play.addEventListener('click', () => {

    const isSongPlaying = musicContainer.classList.contains('play');
    console.log(musicContainer);

    console.log(isSongPlaying);
    isSongPlaying ? pauseSong() : playSong();
})

function nextSong() {
    songIndex++;
    songIndex > (songs.length -1) ? songIndex = 0  : songIndex;
    loadSong(songs[songIndex]);
    playSong();
}

function prevSong() {
    songIndex--;
    songIndex < 0 ? (songIndex = songs.length -1) : songIndex;
    loadSong(songs[songIndex]);
    playSong();
}


function updateProgress(e) {
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime/duration) * 100;
    progressBar.style.width = `${progressPercent}%`
    // console.log(e.duration);
}


function songSlide(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
    // console.log(width,clickX);
}
// audio.addEventListener('timeupdate', updateProgress)
// next.addEventListener('click', nextSong);
// prev.addEventListener('click', prevSong);

// progressContainer.addEventListener('click', songSlide)

////=========SOng Ends =======///

// audio.addEventListener('ended', nextSong);

