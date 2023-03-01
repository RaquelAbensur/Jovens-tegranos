/* Mudar modo */
function mudaModo(){
  document.body.classList.toggle('dark')
}

/* Decimal */
var input_field = document.getElementById('glicose');
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

/* Calcular glicose*/
function calculardiabetes() {
  var glicose = document.calc.glicose.value;
  var result = document.getElementById("result");

  if (glicose <= 100) {
    var mensagem = "Normal";
  }
  else if (glicose < 140 && glicose > 100) {
    var mensagem = "elevado";
  }
  else {
    var mensagem = "diabetes";
  }

  result.innerHTML = mensagem;
};
