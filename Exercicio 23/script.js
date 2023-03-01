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

/* Mostrar soma dos impares em um intervalo */
function calculoSomaImpar() {
  var numX = parseInt(document.calc.numX.value);
  var numY = parseInt(document.calc.numY.value);
  var soma = 0;

  if (numX == numY) {
    document.getElementById("result").innerHTML = "Seus números são iguais";
  }
  else if(numX > numY) {
    document.getElementById("result").innerHTML = "Digite um número menor que Y para X";
  }
  else {
    for (let i = numX; i<= numY; i++) {
      if (i % 2 === 1) {
        soma += i;
        document.getElementById("result").innerHTML = soma;
      }
    };
  }
};
