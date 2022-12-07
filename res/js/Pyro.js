let button = document.getElementsByClassName("pictureClassButton")[0]
let fireDescription = document.getElementsByClassName('descriptionFire')

let audio1 = new Audio("../../res/audio/turnOn.mp3");
button.addEventListener('click', loadPage) // Lors du click on appelle la fonction loadPage qui met l'element invisible
function loadPage() {
  audio1.play()
  fireDescription.style.animation.time = "0s";
}
