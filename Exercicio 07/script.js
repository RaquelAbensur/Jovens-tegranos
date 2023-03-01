/* Mudar modo */
function mudaModo(){
  document.body.classList.toggle('dark')
}

/* Decimal */
var input_field = document.getElementById('combustivel');
input_field.addEventListener('change', function() {
    var v = parseFloat(this.value);
    if (isNaN(v)) {
        this.value = '';
    } else {
        this.value = v.toFixed(1);
    }
});

/* limite decimal */
function limitDecimalPlaces(e, count) {
  if (e.target.value.indexOf('.') == -1) { return; }
  if ((e.target.value.length - e.target.value.indexOf('.')) > count) {
    e.target.value = parseFloat(e.target.value).toFixed(count);
  }
};

/* Calcular consumo */
function calcularconsumo() {
  var distancia = document.calc.distancia.value;
  var combustivel = document.calc.combustivel.value;
  var consumoM = document.getElementById("consumoM");

  total = distancia / combustivel;

  var mensagem = `Consumo Médio: ${total.toFixed(3)}L`;
  consumoM.innerHTML = mensagem;
};
