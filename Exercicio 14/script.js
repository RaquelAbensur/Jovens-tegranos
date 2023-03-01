/* Mudar modo */
function mudaModo(){
  document.body.classList.toggle('dark')
}

/* Decimal */
var input_field = document.getElementById('valor1');
input_field.addEventListener('change', function() {
    var v = parseFloat(this.value);
    if (isNaN(v)) {
        this.value = '';
    } else {
        this.value = v.toFixed(2);
    }
});

var input_field = document.getElementById('valor2');
input_field.addEventListener('change', function() {
    var v = parseFloat(this.value);
    if (isNaN(v)) {
        this.value = '';
    } else {
        this.value = v.toFixed(2);
    }
});

var input_field = document.getElementById('valor3');
input_field.addEventListener('change', function() {
    var v = parseFloat(this.value);
    if (isNaN(v)) {
        this.value = '';
    } else {
        this.value = v.toFixed(3);
    }
});

/* limite decimal */
function limitDecimalPlaces(e, count) {
  if (e.target.value.indexOf('.') == -1) { return; }
  if ((e.target.value.length - e.target.value.indexOf('.')) > count) {
    e.target.value = parseFloat(e.target.value).toFixed(count);
  }
};

/* Calcular troco e faltante*/
function calculartroco() {
  var valor1 = document.calc.valor1.value;
  var valor2 = document.calc.valor2.value;
  var quant = document.calc.quant.value;
  var result = document.getElementById("result");

  total = quant * valor1;
  troco = valor2 - total;

  if (troco < 0) {
    faltante = total - valor2;
    var mensagem = `Faltam: R$${faltante.toFixed(2)} reais`;
  }
  else {
    var mensagem = `Troco: R$${troco.toFixed(2)} reais`;
  }

  result.innerHTML = mensagem;
};
