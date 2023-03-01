/* Mudar modo */
function mudaModo(){
  document.body.classList.toggle('dark')
}

/* Decimal */
var input_field = document.getElementById('temp');
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

/* Calcular temperatura*/
function calculartemperatura(escala) {
  var temp = document.calc.temp.value;
  var result = document.getElementById("result");

  /* Celsius -> Fahrenheit*/
  if(escala == "celsius") {
    var resultado = (temp * (9 / 5) ) + 32;
    var mensagem = `Temperatura equivalente em Fahrenheit: ${resultado.toFixed(2)}º`;
  }
  /* Fahrenheit -> Celsius*/
  else {
    var resultado = ( temp - 32) * 5 / 9;
    var mensagem = `Temperatura equivalente em Celsius: ${resultado.toFixed(2)}º`;
  }
  result.innerHTML = mensagem;
};
