const gato = document.getElementById('gato-sprite');
let direccion = 'ida';
let frame = 0;
const totalFrames = 4;
let cambioSprite;

function alternarFrame() {
  frame = (frame + 1) % totalFrames;
  const offsetX = frame * 80; // 80px por frame
  gato.style.backgroundPosition = `-${offsetX}px 0`;
}

function animarGato() {
  gato.style.opacity = 1;

  gato.classList.remove('ida', 'vuelta');
  void gato.offsetWidth;
  gato.classList.add(direccion);

  cambioSprite = setInterval(alternarFrame, 100);

  setTimeout(() => {
    clearInterval(cambioSprite);
    gato.style.opacity = 0;
    gato.style.backgroundPosition = `0 0`;
  }, 4000);

  direccion = (direccion === 'ida') ? 'vuelta' : 'ida';
}

animarGato();
setInterval(animarGato, 6000);