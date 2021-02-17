var pare;
var segundos = 0;
var minutos = 0;

function iniciar() {
  document.getElementById('parar').style = 'display:inline';
  document.getElementById('iniciar').style = 'display: none';
  document.getElementById('reiniciar').style = 'display: none';
  document.getElementById('iniciar').innerHTML = 'Continuar';

  pare = setInterval('atualizar()', 1000);
}

function parar() {
  clearInterval(pare);
  document.getElementById('parar').style = 'display:none';
  document.getElementById('iniciar').style = 'display:inline';
  document.getElementById('reiniciar').style = 'display:inline';
}

function reiniciar() {
  document.location.reload();
}

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
