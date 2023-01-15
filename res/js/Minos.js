const video = document.querySelector('video');
let videoIntro = document.getElementById('videoIntro');
let audio = new Audio("../../res/audio/ORDER.mp3");

video.autoplay = true ;
video.volume = 0.2;

video.onended = (Event) => {
  audio.play()
  audio.loop = true
  audio.volume = 0.2
  videoIntro.style.opacity = 1
  videoIntro.style.display = "none"
}

