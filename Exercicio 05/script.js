/* Mudar modo */
function mudaModo(){
  document.body.classList.toggle('dark')
}

/* Decimal */
var input_field = document.getElementById('raio');
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
  var raio = document.calc.raio.value;
  var pi = Number(3.14159);
  var areacirculo = document.getElementById("areacirculo");

  area = pi * raio**2;

  var mensagem = `Área do Circulo: ${area.toFixed(3)}`;
  areacirculo.innerHTML = mensagem;
};
