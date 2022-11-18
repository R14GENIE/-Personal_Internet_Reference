let loader = document.getElementById('loader')
let btn = loader.getElementsByClassName('btn')[0]
let audio = new Audio("res/audio/MeetAudio.mp3"); // On crée une instance audio (ne pas oublier à changer la source de la musique)
audio.play()
setTimeout(loadPage, 3000);
function loadPage() {
  loader.style.opacity = 0
}
/*
// Une fois que le loader est invisible on le display none pour ne plus avoir aucune interaction avec
loader.addEventListener('transitionend', () => { 
  loader.style.display = "none"
  
  // on jour l'audio 
  audio.play()
})
*/
 