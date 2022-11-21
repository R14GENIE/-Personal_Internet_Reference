let loader = document.getElementById('loader')
let btn = loader.getElementsByClassName('btn')[0]
let audio = new Audio("../../res/audio/MeetAudio.mp3"); // On crée une instance audio (ne pas oublier à changer la source de la musique)
loader.style.opacity = 1
audio.play()
wait(4000)
loader.style.opacity = 0
 