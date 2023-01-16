const video = document.querySelector('video');
let videoIntro = document.getElementById('videoIntro');
let audio = new Audio("../../res/audio/ORDER.mp3");

let loader = document.getElementById('videoIntro')
let btn = loader.getElementsByClassName('btn')[0]
btn.addEventListener('click', loadPage) // Lors du click on appelle la fonction loadPage qui met l'element invisible
function loadPage() {
  video.currentTime = video.duration

}

video.autoplay = true ;
video.volume = 0.2;

video.onended = (Event) => {
  audio.play()
  audio.loop = true
  audio.volume = 0.2
  videoIntro.style.opacity = 1
  videoIntro.style.display = "none"
}

