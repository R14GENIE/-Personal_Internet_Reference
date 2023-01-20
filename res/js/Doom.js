const video = document.querySelector('video');
let videoIntro = document.getElementById('videoIntro');
let audio = new Audio("../../res/audio/Mick Gordon  The Only Thing They Fear Is You  DOOM Eternal OST High Quality.mp3");
let doomMod = false;

let loader = document.getElementById('videoIntro')
let btn = loader.getElementsByClassName('btn')[0]
let btnChange = document.getElementsByClassName('btn2')[0]
btn.addEventListener('click', loadPage) // Lors du click on appelle la fonction loadPage qui met l'element invisible
btnChange.addEventListener('click', doomMod) 

function loadPage() {
  video.currentTime = video.duration
}
function doomMod() {
  console.log("a")
}
videoIntro.style.opacity = 1
  videoIntro.style.display = "none"
/*
video.autoplay = true ;
video.volume = 0.2;

video.onended = (Event) => {
  audio.play()
  audio.loop = true
  audio.volume = 0.2
  videoIntro.style.opacity = 1
  videoIntro.style.display = "none"
}

*/