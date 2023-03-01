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

/* Mostrar tabuada */
function mostrartabuada() {
  var num = parseInt(document.calc.num.value);
  var i;

  document.getElementById("result").innerHTML = "Tabuada do " + num + "<br/>";

  for (i=1; i<=10; i++) {

  document.getElementById("result").innerHTML += num + " x " + i + " = " + (num*i) + "<br>";

  }
};
