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

/* Calcular valor operadora*/
function calcularoperadora() {
  var min = Number(document.calc.min.value);
  var valor = document.getElementById("valor");
  
  if (min <= 100) {
    var mensagem = "Valor a pagar: R$50.00";
  }
  else {
    excedeu = (min - 100) * 2 + 50;
    var mensagem = `Valor a pagar: R$${excedeu.toFixed(2)}`;
  }
  
  valor.innerHTML = mensagem;
};
