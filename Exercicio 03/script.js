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

/* Calcular media */
function calcularmedia() {
  var nome1 = document.calc.nome1.value;
  var nome2 = document.calc.nome2.value;
  var idade1 = Number(document.calc.idade1.value);
  var idade2 = Number(document.calc.idade2.value);
  var resposta = document.getElementById("resposta");

  media = (idade1 + idade2) / 2;

  var mensagem = `A idade média de ${nome1} e ${nome2} é de ${media.toFixed(1)} anos`;
  resposta.innerHTML = mensagem;
};