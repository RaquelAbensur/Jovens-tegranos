/* Mudar modo */
function mudaModo(){
  document.body.classList.toggle('dark')
}

/* Mostrar consoante e vogais */
function exibirvalores() {
  var val1 = document.getElementById("val1").value;
  var ref = "aeiouAEIOU"
  var vogal = 0;
  var conso = 0;


  for (i = 0; i < val1.length; i++) {
    if ((val1.charAt(i) >= 'A' && val1.charAt(i) <= 'Z') || (val1.charAt(i) >= 'a' && val1.charAt(i) <= 'z')){
      if (ref.indexOf(val1.charAt(i)) != -1) {
        vogal++;
      }
      else {
        conso++;
      }
    }
  }
  document.getElementById("result").innerHTML = `Contem ${vogal} vogais` + "<br/>" + `Contem ${conso} consoantes`;
    
};