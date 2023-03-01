/* Mudar modo */
function mudaModo(){
  document.body.classList.toggle('dark')
}

/* Decimal */
var input_field = document.getElementById('valorhora');
input_field.addEventListener('change', function() {
    var v = parseFloat(this.value);
    if (isNaN(v)) {
        this.value = '';
    } else {
        this.value = v.toFixed(2);
    }
});

/* limite decimal */
function limitDecimalPlaces(e, count) {
  if (e.target.value.indexOf('.') == -1) { return; }
  if ((e.target.value.length - e.target.value.indexOf('.')) > count) {
    e.target.value = parseFloat(e.target.value).toFixed(count);
  }
};

/* Calcular pagamento */
function calcularpagamento() {
  var nome = document.calc.nome.value;
  var valorhora = document.calc.valorhora.value;
  var quanthora = document.calc.quanthora.value;
  var resposta = document.getElementById("resposta");

  total = valorhora * quanthora;

  var mensagem = `O pagamento para ${nome} deve ser R$${total.toFixed(2)}`;
  resposta.innerHTML = mensagem;
};
