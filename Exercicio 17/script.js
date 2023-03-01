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

/* Calcular maior distancia*/
function calculardistancia() {
  var num1 = parseInt(document.calc.num1.value);
  var num2 = parseInt(document.calc.num2.value);
  var result = document.getElementById("result");

  if(num1>num2 || num1 == num2) {
    var resultado = num1/num2;
    if(Number.isInteger(resultado)){
      var mensagem = 'Os números são múltiplos';
    }else{
      var mensagem ='Os números não são múltiplos';
    };
  }else {
    var resultado = num2/num1;
    if(Number.isInteger(resultado)){
      var mensagem = 'Os números são múltiplos';
    }else{
      var mensagem = 'Os números não são múltiplos';
    };
  }
  result.innerHTML = mensagem;
};
