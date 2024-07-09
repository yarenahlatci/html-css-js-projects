const image = document.getElementById("cover");
const title = document.getElementById("music-title");
const artist = document.getElementById("music-artist");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const playerProgress = document.getElementById("player-progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const playBtn = document.getElementById("play");
const background = document.getElementById("bg-img");

//Yeni bir audio nesnesi oluşturuyoruz
const music = new Audio();

//Müzik listemiz

const songs = [
    {
        path: "assets/pera.mp3",
        displayName: "Biri Vardı",
        cover: "assets/pera.jpg",
        artist: "Pera",
  },
  {
    path: "assets/fermanakgul.mp3",
    displayName: "İstemem Söz Sevmeni",
    cover: "assets/fermanakgul.jpg",
    artist: "Ferman Akgül",
  },
  {
    path: "assets/sebnemferah.mp3",
    displayName: "Birileri Var",
    cover: "assets/şebnemferah.jpg",
    artist: "Şebnem Ferah",
  },
  {
    path: "assets/sezanaksu.mp3",
    displayName: "Son Bakış",
    cover: "assets/sezanaksu.jpg",
    artist: "Sezan Aksu",
  },
  {
    path: "assets/sertaberener.mp3",
    displayName: "Olsun",
    cover: "assets/sertaberener.jpg",
    artist: "Sertab Erener",
  },

];

let musicIndex = 0;
let isPlaying = false;

//OYNAT - DURAKLAT
function togglePlay() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

//MÜZİĞİ BAŞLAT
function playMusic() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Duraklat");
  music.play();
}

//MÜZİĞİ DURAKLAT
function pauseMusic() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Oynat");
  music.pause();
}

//MÜZİĞİ YÜKLE
function loadMusic(song) {
  music.src = song.path;
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  image.src = song.cover;
  background.src = song.cover;
}

//MÜZİĞİ DEĞİŞTİR
function changeMusic(direction) {
  musicIndex = (musicIndex + direction + songs.length) % songs.length;
  loadMusic(songs[musicIndex]);
  playMusic();
}

//İLERLEME ÇUBUĞUNU GÜNCELLE
function updateProgressBar() {
  const { duration, currentTime } = music;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

  const formatTime = (time) => String(Math.floor(time)).padStart(2, "0");
  durationEl.textContent = `${formatTime(duration / 60)}: ${formatTime(
    duration % 60
  )}`;
  currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(
    currentTime % 60
  )}`;
}

function setProgressBar(e) {
  const width = playerProgress.clientWidth;
  const clickX = e.offsetX;
  music.currentTime(clickX / width) * music.duration;
}

playBtn.addEventListener("click", togglePlay);
prevBtn.addEventListener("click", () => changeMusic(-1));
nextBtn.addEventListener("click", () => changeMusic(1));
music.addEventListener("ended", () => changeMusic(1));
music.addEventListener("timeupdate", updateProgressBar);
playerProgress.addEventListener("click", setProgressBar);
loadMusic(songs[musicIndex]);
