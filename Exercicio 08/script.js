/* Mudar modo */
function mudaModo(){
  document.body.classList.toggle('dark')
}

/* Decimal */
var input_field = document.getElementById('medidaA');
input_field.addEventListener('change', function() {
    var v = parseFloat(this.value);
    if (isNaN(v)) {
        this.value = '';
    } else {
        this.value = v.toFixed(1);
    }
});

var input_field = document.getElementById('medidaB');
input_field.addEventListener('change', function() {
    var v = parseFloat(this.value);
    if (isNaN(v)) {
        this.value = '';
    } else {
        this.value = v.toFixed(1);
    }
});

var input_field = document.getElementById('medidaC');
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

/* Calcular area quadrado, triangulo e trapezio */
function calculararea() {
  var medidaA = Number(document.calc.medidaA.value);
  var medidaB = Number(document.calc.medidaB.value);
  var medidaC = Number(document.calc.medidaC.value);
  var resposta = document.getElementById("resposta");

  quadrado = medidaA**2;
  triangulo = medidaA * medidaB/2;
  trapezio = (medidaA + medidaB) * medidaC / 2;

  var mensagem = `ÁREA DO QUADRADO: ${quadrado.toFixed(4)}
  ÁREA DO TRIÂNGULO: ${triangulo.toFixed(4)}
  ÁREA DO TRAPÉZIO: ${trapezio.toFixed(4)}`;
  resposta.innerHTML = mensagem;
};
