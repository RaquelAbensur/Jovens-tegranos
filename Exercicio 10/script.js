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

/* Achar numero menor */
function calcmenor() {
  var num1 = document.calc.num1.value;
  var num2 = document.calc.num2.value;
  var num3 = document.calc.num3.value;
  var resposta = document.getElementById("resposta");

  var min = Math.min(num1, num2, num3);

  var mensagem = `O menor número é ${min}`;
  resposta.innerHTML = mensagem;
};
