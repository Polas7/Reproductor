var cuentaSonido = 1;

document.querySelector('#btnSiguiente').addEventListener('click', siguienteCancion);
document.querySelector('#btnAnterior').addEventListener('click', cancionAnterior);

function siguienteCancion(){
  cuentaSonido++;
  if(cuentaSonido >= sonidos.length){
    cuentaSonido = 0;
  }
  reproductor.src = sonidos[cuentaSonido];
  reproductor.play();
}

function cancionAnterior(){
  cuentaSonido--;
  if(cuentaSonido <= 0){
    cuentaSonido = (sonidos.length -1);
  }