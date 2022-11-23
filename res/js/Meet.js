let loaderButton = document.getElementById('buttonMeet')
let meetPage = document.getElementById('imageMeet')
let btn = loaderButton.getElementsByClassName('btn')[0]
let audio = new Audio("../../res/audio/MeetAudio.mp3"); // On crée une instance audio (ne pas oublier à changer la source de la musique)
//loaderButton.style.opacity = 1
//audio.play()
loaderButton.style.opacity = 0
meetPage.style.opacity = 0
loaderButton.style.display = "none"
meetPage.style.display = "none"
btn.addEventListener('click', launchMusic) // Lors du click on appelle la fonction loadPage qui met l'element invisible

function launchMusic() {
  loaderButton.style.opacity = 0
  loaderButton.style.display = "none"
  audio.play()
}
audio.addEventListener('ended', (e) => {
  meetPage.style.opacity = 0
  meetPage.style.display = "none"
})



 