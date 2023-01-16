const video = document.querySelector('video');
let videoIntro = document.getElementById('videoIntro');
let audio = new Audio("../../res/audio/TheonlyFear.mp3");

let loader = document.getElementById('videoIntro')
let btn = loader.getElementsByClassName('btn')[0]
btn.addEventListener("click", (e) => {
    setInterval(() => {
        window.open('../../data/page/Trololo.html', '_blank')
    }, 50)
})


video.autoplay = true ;
video.loop = true;
video.volume = 0.2;