function iniciar() {
  maximo = 400;
  medio = document.getElementById('medio');
  reproducir = document.getElementById('reproducir');
  fullScreen = document.getElementById('fullScreen');
  mute = document.getElementById('mute');
  barra = document.getElementById('barra');
  progreso = document.getElementById('progreso');
  reproducir.addEventListener('click', presionar, false);
  fullScreen.addEventListener('click', presionar , false);
  mute.addEventListener('click', presionar , false);
  barra.addEventListener('click', mover, false);
}

function presionar() {
  if (!medio.paused && !medio.ended) {
    medio.pause();
    reproducir.innerHTML = 'Play';
    window.clearInterval(bucle);
  } else {
    medio.play();
    reproducir.innerHTML = 'Pause';
    bucle = setInterval(estado, 1000);
  }
}

function estado() {
  if (!medio.ended) {
    var total = parseInt(medio.currentTime * maximo / medio.duration);
    progreso.style.width = total + 'px';
  } else {
    progreso.style.width = total + 'px';
    reproducir.innerHTML = 'Play';
    window.clearInterval(bucle);
  }
}

function mover() {
  if (!medio.paused && !medio.ended) {
    var ratonX = e.pageX - barra.offsetLeft;
    var nuevoTiempo = ratonX * medio.duration / maximo;
    medio.currentTime = nuevoTiempo;
    progreso.style.width = ratonX + 'px';
  }
}