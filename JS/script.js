var ale = Math.floor(Math.random() * 4 + 1);

function ouvir() {
    let audio = document.querySelector('.s'+ale);
    audio.play();
    //window.alert('Enjoy the song!!!');
}

function parar() {
    let audio = document.querySelector('.s'+ale);
    //audio.currentTime = 300;
    audio.currentTime = 1000;
    //audio.stop(1);
    //location.reload();
}

function pausar() {
    let audio = document.querySelector('.s'+ale);
    audio.pause();
}