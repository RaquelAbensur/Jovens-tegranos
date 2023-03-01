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

/* Mostrar pares */
function mostrarpares() {
  var num = parseInt(document.calc.num.value);
  var result = document.getElementById("result");
  var i = 0, msg = " ";

  while (i <= num) {
    if (i % 2 == 0) {
      msg += i + ", ";
    }
    i++;
  }
  msg = msg.substr(0, msg.length -2);
  result.innerHTML = msg;
};
