let loader = document.getElementById('loaderMeet')
let btn = loader.getElementsByClassName('btn')[0]
let audio = new Audio("../../res/audio/MeetAudio.mp3"); // On crée une instance audio (ne pas oublier à changer la source de la musique)

//audio.play()
btn.addEventListener('click', launchMusic) // Lors du click on appelle la fonction loadPage qui met l'element invisible
function loadPage() {
  loader.style.opacity = 0
}
function launchMusic() {
  audio.play()
}
audio.addEventListener('ended', (e) => {
  loader.style.opacity = 0
})
loader.addEventListener('transitionend', () => { 
  loader.style.display = "none"
})
 