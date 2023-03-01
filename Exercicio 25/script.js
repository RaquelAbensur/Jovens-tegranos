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

/* Mostrar Signo */
function mostrarsigno() {
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var signo = '';

  if (day>=21 && month==3 || day<=20 && month==4) {
    signo = 'Áries';
  }
  else if (day>=21 && month==4 || day<=20 && month==5) {
    signo = 'Touro';
  }
  else if (day>=21 && month==5 || day<=20 && month==6) {
    signo = 'Gêmeos';
  }
  else if (day>=21 && month==6 || day<=22 && month==7) {
    signo = 'Câncer';
  }
  else if (day>=23 && month==7 || day<=22 && month==8) {
    signo = 'Leão';
  }
  else if (day>=23 && month==8 || day<=22 && month==9) {
    signo = 'Virgem';
  }
  else if (day>=23 && month==9 || day<=22 && month==10) { 
    signo = 'Libra';
  }
  else if (day>=23 && month==10 || day<=21 && month==11) { 
    signo = 'Escorpião';
  }
  else if (day>=22 && month==11 || day<=21 && month==12) {
    signo = 'Sagitário';
  }
  else if (day>=22 && month==12 || day<=20 && month==1) {
    signo = 'Capricórnio';
  }
  else if (day>=21 && month==1 || day<=18 && month==2) {
    signo = 'Aquário';
  }
  else if (day>=19 && month==2 || day<=20 && month==3) {
    signo = 'Peixes';
  }
  else {
    document.getElementById("result").innerHTML = `Informe uma data válida`;
  };

  document.getElementById("result").innerHTML = `Seu signo é ${signo}`;
};