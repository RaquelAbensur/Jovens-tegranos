/* Mudar modo */
function mudaModo(){
  document.body.classList.toggle('dark')
}

/* Decimal */
var input_field = document.getElementById('numA');
input_field.addEventListener('change', function() {
    var v = parseFloat(this.value);
    if (isNaN(v)) {
        this.value = '';
    } else {
        this.value = v.toFixed(1);
    }
});

var input_field = document.getElementById('numB');
input_field.addEventListener('change', function() {
    var v = parseFloat(this.value);
    if (isNaN(v)) {
        this.value = '';
    } else {
        this.value = v.toFixed(1);
    }
});

var input_field = document.getElementById('numC');
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

/* Calcular equação */
function calcularequacao() {
  var numA = Number(document.calc.numA.value);
  var numB = Number(document.calc.numB.value);
  var numC = Number(document.calc.numC.value);
  var resposta = document.getElementById("resposta");
  
  result1 = (-numB + Math.sqrt(numB**2 - 4 * numA * numC))/ (2 * numA);

  result2 = (-numB - Math.sqrt(numB**2 - 4 * numA * numC)) / (2 * numA);

  if (isNaN(result1)) {
    var mensagem = `Esta equação não possui raízes reais`;
  }
  else {
    var mensagem = `O X1 vale: ${result1.toFixed(4)} 
    O X2 vale: ${result2.toFixed(4)}`;
  }
  
  resposta.innerHTML = mensagem;
};
