const video = document.querySelector('video');
let videoIntro = document.getElementById('videoIntro');
let audioA = new Audio("../../res/audio/Mick Gordon  The Only Thing They Fear Is You  DOOM Eternal OST High Quality.mp3");
let audioB = new Audio("../../res/audio/Doom OST - E1M1 - At Doom's Gate.mp3");

let doomModValue = false;

let loader = document.getElementById('videoIntro')
let btn = loader.getElementsByClassName('btn')[0]
let btnChange = document.getElementsByClassName('pictureClassBTN')[0]
let imageLeft = document.getElementsByClassName('pictureClass')[0]
btn.addEventListener('click', loadPage) // Lors du click on appelle la fonction loadPage qui met l'element invisible
btnChange.addEventListener('click', doomMod) 

function loadPage() {
  video.currentTime = video.duration
}

function doomMod() {
  if (!doomModValue) {
    audioA.pause();
    audioA.currentTime = 0;
    audioB.play()
    //Changement du site
    btnChange.src = "../../data/image/logoMain/Doom.png"
    imageLeft.src = "../../data/image/Doom/OldDoomSlayer.png"
    document.getElementById("middleAutre").style.backgroundImage = "url('../../data/image/Doom/OldDoomBackground.jpg')";
  }
  else{
    audioB.pause();
    audioB.currentTime = 0;
    audioA.play()
    //Changement du site
    btnChange.src = "../../data/image/logoMain/OldDoom.png"
    imageLeft.src = "../../data/image/Doom/Doomguy_Eternal.png"
    document.getElementById("middleAutre").style.backgroundImage = "../../data/image/Doom/OldDoomBackground.jpg";
  }
  doomModValue = !doomModValue;
}

audioA.loop = true
audioA.volume = 0.1
audioB.volume = 0.1
//video.autoplay = true ;
//video.volume = 0.2;
videoIntro.style.opacity = 1
videoIntro.style.display = "none"
//audioA.play()

video.onended = (Event) => {
  audioA.play()
  audioA.loop = true
  audioA.volume = 0.1
  videoIntro.style.opacity = 1
  videoIntro.style.display = "none"
}

