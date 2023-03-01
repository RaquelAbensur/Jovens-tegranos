/* Mudar modo */
function mudaModo(){
  document.body.classList.toggle('dark')
}

/* Mostrar números ordenados */
function mostrarNumeros() {
  var listaNumeros = Array(
      (document.getElementById("num1").value),
      (document.getElementById("num2").value),
      (document.getElementById("num3").value),
      (document.getElementById("num4").value),
      (document.getElementById("num5").value)
  );


  document.getElementById("result").innerHTML = listaNumeros.sort((a, b) => a - b);

};
