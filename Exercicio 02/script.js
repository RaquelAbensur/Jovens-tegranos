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

/* limite decimal */
function limitDecimalPlaces(e, count) {
  if (e.target.value.indexOf('.') == -1) { return; }
  if ((e.target.value.length - e.target.value.indexOf('.')) > count) {
    e.target.value = parseFloat(e.target.value).toFixed(count);
  }
};

/* Calcular area */
function calculararea() {
  var valor1 = document.calc.valor1.value;
  var valor2 = document.calc.valor2.value;
  var area = document.getElementById("area");

  resarea = valor1 * valor2;

  var mensagem = `Valor da Área: ${resarea.toFixed(4)}`;
  area.innerHTML = mensagem;
};

/* Calcular Perímetro */
function calcularperimetro() {
  var valor1 = Number(document.calc.valor1.value);
  var valor2 = Number(document.calc.valor2.value);
  var perimetro = document.getElementById("perimetro");

  resperi = (valor1 + valor2) * 2;

  var mensagem = `Valor do Perímetro: ${resperi.toFixed(4)}`;
  perimetro.innerHTML = mensagem;
};

/* Calcular Diagonal */
function calculardiagonal() {
  var valor1 = document.calc.valor1.value;
  var valor2 = document.calc.valor2.value;
  var diagonal = document.getElementById("diagonal");

  resdiag = Math.sqrt(valor1**2 + valor2**2);

  var mensagem = `Valor da Diagonal: ${resdiag.toFixed(4)}`;
  diagonal.innerHTML = mensagem;
};

