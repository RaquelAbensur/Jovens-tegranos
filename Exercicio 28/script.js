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

/* Mostrar numero maior e menor */
function maiorMenor() {
  var listaNumeros = [
    document.getElementById("num1").value,
    document.getElementById("num2").value,
    document.getElementById("num3").value,
    document.getElementById("num4").value,
    document.getElementById("num5").value
  ];  
  
  var menor = Math.min(...listaNumeros);
  var maior = Math.max(...listaNumeros);

  document.getElementById("result").innerHTML = `O menor número é ${menor}` + "<br/>" + `O maior número é ${maior}`;

};
