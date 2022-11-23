let meetPage = document.getElementById('imageMeet')
let audio = new Audio("../../res/audio/MeetAudio.mp3"); // On crée une instance audio (ne pas oublier à changer la source de la musique)

meetPage.style.opacity = 0
meetPage.style.display = "none"

function launchMusic() {
  audio.play()
}
audio.addEventListener('ended', (e) => {
  meetPage.style.opacity = 0
  meetPage.style.display = "none"
})

//document.body.onload = launchMusic;
