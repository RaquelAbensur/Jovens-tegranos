/* Mudar modo */
function mudaModo(){
  document.body.classList.toggle('dark')
}

// Valida CNPJ

function validaCNPJ() {
  var cnpj = document.getElementById("cnpj").value;
  let numeros = cnpj.split("-")[0].replace(/[.|\/]/g,""); 
  let digitos = cnpj.split("-")[1];
    
  if ((getPrimeiroDigito(numeros) != digitos[0]) && (getSegundoDigito(numeros+""+digitos[0]) != digitos[1])){
    document.getElementById("result").innerHTML = "CNPJ Invalido";
  }
  else {
    document.getElementById("result").innerHTML = "CNPJ Valido";
  };
  
}

function getPrimeiroDigito(numeros) {
  let peso = 2;
  let resultado = 0;

  for (let i = numeros.length - 1; i >= 0; i--){
    resultado += numeros[i] * peso;
    peso = (peso == 9 ? 2 : peso+1);
  }
  modulo = resultado % 11;
  resultado = (modulo < 2 ? 0 : 11 - modulo)
  return resultado;
}

function getSegundoDigito(numeros) {
  let peso = 2
  let resultado = 0;

  for (let i = numeros.length - 1; i >= 0; i--){
    resultado += numeros[i] * peso;
    peso = (peso == 9 ? 2 : peso+1);
  }
  modulo = resultado % 11;
  resultado = (modulo < 2 ? 0 : 11 - modulo);
  return resultado;
}