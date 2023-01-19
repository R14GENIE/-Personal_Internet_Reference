const video = document.querySelector('video');
let videoIntro = document.getElementById('videoIntro');
let audio = new Audio("../../res/audio/TheonlyFear.mp3");
let audio2 = new Audio("../../res/audio/SamIntro.mp3");

let loader = document.getElementById('videoIntro')
let btn = loader.getElementsByClassName('btn')[0]
btn.addEventListener('click', loadPage) // Lors du click on appelle la fonction loadPage qui met l'element invisible
function loadPage() {
  video.currentTime = video.duration

}

video.autoplay = true ;
audio2.play()

video.onended = (Event) => {
  audio2.currentTime = audio2.duration 
  audio.play()
  audio.loop = true
  audio.volume = 0.2
  videoIntro.style.opacity = 1
  videoIntro.style.display = "none"
}

