/* Mudar modo */
function mudaModo(){
  document.body.classList.toggle('dark')
}

/* limite decimal */
function limitDecimalPlaces(e, count) {
  if (e.target.value.indexOf('.') == -1) { return; }
  if ((e.target.value.length - e.target.value.indexOf('.')) > count) {
    e.target.value = parseFloat(e.target.value).toFixed(count);
  }
};

/* Calcular soma intervalo*/
function calcularsomaintervalo() {
  var soma = 0, i;
  var numI = parseInt(document.calc.numI.value);
  var numF = parseInt(document.calc.numF.value);
  i = numI;
  var result = document.getElementById("result");

  if (numI > numF) {
    var mensagem = "O seu número inicial tem que ser menor que o final."
  }
  else {
    for (i; i<= numF; i++) {
      soma+= i;
      var mensagem = `Resultado: ${soma}`;
    }
  }
  result.innerHTML = mensagem;
};
