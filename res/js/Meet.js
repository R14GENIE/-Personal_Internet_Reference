let loader = document.getElementById('loaderMeet')
let btn = loader.getElementsByClassName('btn')[0]
let audio = new Audio("../../res/audio/MeetAudio.mp3"); // On crée une instance audio (ne pas oublier à changer la source de la musique)
loader.style.opacity = 0
//audio.play()
audio.addEventListener('ended', (e) => {
  loader.style.opacity = 0
  console.log('audio fini')
})

 