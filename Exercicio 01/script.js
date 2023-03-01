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
        this.value = v.toFixed(1);
    }
});

var input_field = document.getElementById('valor2');
input_field.addEventListener('change', function() {
    var v = parseFloat(this.value);
    if (isNaN(v)) {
        this.value = '';
    } else {
        this.value = v.toFixed(1);
    }
});

var input_field = document.getElementById('valor3');
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
}

/* Calcular area */
function calculararea() {
  var valor1 = document.calc.valor1.value;
  var valor2 = document.calc.valor2.value;
  var area = document.getElementById("area");

  resarea = valor1 * valor2;

  var mensagem = `Área do terreno: ${resarea.toFixed(2)}`;
  area.innerHTML = mensagem;
}

/* Calcular Preço */
function calcularpreco() {
  var valor1 = document.calc.valor1.value;
  var valor2 = document.calc.valor2.value;
  var valor3 = document.calc.valor3.value;
  var preco = document.getElementById("preco");

  respreco = valor1 * valor2 * valor3;

  var mensagem = `Preço do terreno: ${respreco.toFixed(2)}`;
  preco.innerHTML = mensagem;
}


