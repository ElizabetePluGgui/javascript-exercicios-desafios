var pare;
var segundos = 0;
var minutos = 0;

function iniciar() {}

function parar() {}

function reiniciar() {}

function atualizar() {
  segundos++;
  if (segundos > 59) {
    minutos++;
    segundos = 0;
    if (minutos < 10) {
      document.getElementById('minutos').value = '0' + minutos;
    } else {
      document.getElementById('minutos').value = minutos;
    }
  }
  if (segundos < 10) {
    document.getElementById('segundos').value = '0' + segundos;
  } else {
    document.getElementById('segundos').value = segundos;
  }
}
