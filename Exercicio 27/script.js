/* Mudar modo */
function mudaModo(){
  document.body.classList.toggle('dark')
}


/* Mostrar se é palindrome ou não*/

function mostraspalindrome() {
  var texto = document.calc.texto.value;
  var re = /[\W_]/g;
  const juntar = texto.toLowerCase().replace(re, '');
  const reverso = juntar.split('').reverse().join('');

  if (juntar === reverso) {
    document.getElementById('result').innerHTML = `Seu texto é um palindromo ${texto}`;
  }
  else {
    textoN = texto.split('').reverse().join('');
    document.getElementById('result').innerHTML = `Seu texto não é um palindromo ${textoN}`;
  }
}
