/* Mudar modo */
function mudaModo(){
  document.body.classList.toggle('dark')
}

/* limite decimal */
function limitDecimalPlaces(e, count) {
  if (e.target.value.indexOf('.') == -1) { return; }
  if ((e.target.value.length - e.target.value.indexOf('.')) > count) {
    e.target.value = parseFloat(e.target.value).toFixed(count);
  }
};

/* Calcular conversão horas:minutos:segundos */
function converter() {
  var numSegundos = new Date(document.getElementById('segundos').value*1000);
  var horas = numSegundos.getUTCHours();
  var minutos = numSegundos.getUTCMinutes();
  var segundos = numSegundos.getSeconds();

  document.getElementById('resposta').innerHTML = horas.toString().padStart(2, '0') + ':' + 
  minutos.toString().padStart(2, '0') + ':' + 
  segundos.toString().padStart(2, '0');
};
