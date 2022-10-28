let loader = document.getElementById('loader')
let btn = loader.getElementsByClassName('btn')[0]
let audio = new Audio("https://cdn.discordapp.com/attachments/669876482742681600/1033017844771856404/Team_Fortress_2_Soundtrack_Main_Theme.mp3"); // On crée une instance audio (ne pas oublier à changer la source de la musique)
btn.addEventListener('click', loadPage) // Lors du click on appelle la fonction loadPage qui met l'element invisible
function loadPage() {
  loader.style.opacity = 0
}
// Une fois que le loader est invisible on le display none pour ne plus avoir aucune interaction avec
loader.addEventListener('transitionend', () => { 
  loader.style.display = "none"
  
  // on jour l'audio 
  audio.play()
})

 