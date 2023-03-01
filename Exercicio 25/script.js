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
  
  if (day>=21 && month==3 || day<=20 && month==4) {
    signo = 'Áries';
    
    document.getElementById("result").innerHTML = `Seu signo é ${signo}`;
  }
  else if (day>=21 && month==4 || day<=21 && month==5) {
    signo = 'Touro';
    
    document.getElementById("result").innerHTML = `Seu signo é ${signo}`;
  }
  else if (day>=22 && month==5 || day<=21 && month==6) {
    signo = 'Gêmeos';
    
    document.getElementById("result").innerHTML = `Seu signo é ${signo}`;
  }
  else if (day>=21 && month==6 || day<=23 && month==7) {
    signo = 'Câncer';
    
    document.getElementById("result").innerHTML = `Seu signo é ${signo}`;
  }
  else if (day>=24 && month==7 || day<=23 && month==8) {
    signo = 'Leão';
    
    document.getElementById("result").innerHTML = `Seu signo é ${signo}`;
  }
  else if (day>=24 && month==8 || day<=23 && month==9) {
    signo = 'Virgem';
    
    document.getElementById("result").innerHTML = `Seu signo é ${signo}`;
  }
  else if (day>=24 && month==9 || day<=23 && month==10) { 
    signo = 'Libra';
    
    document.getElementById("result").innerHTML = `Seu signo é ${signo}`;
  }
  else if (day>=24 && month==10 || day<=22 && month==11) { 
    signo = 'Escorpião';
    
    document.getElementById("result").innerHTML = `Seu signo é ${signo}`;
  }
  else if (day>=23 && month==11 || day<=21 && month==12) {
    signo = 'Sagitário';
    
    document.getElementById("result").innerHTML = `Seu signo é ${signo}`;
  }
  else if (day>=22 && month==12 || day<=20 && month==1) {
    signo = 'Capricórnio';
    
    document.getElementById("result").innerHTML = `Seu signo é ${signo}`;
  }
  else if (day>=21 && month==1 || day<=19 && month==2) {
    signo = 'Aquário';
    
    document.getElementById("result").innerHTML = `Seu signo é ${signo}`;
  }
  else if (day>=20 && month==2 || day<=20 && month==3) {
    signo = 'Peixes';
    
    document.getElementById("result").innerHTML = `Seu signo é ${signo}`;
  }
  else {
    document.getElementById("result").innerHTML = `Informe uma data válida`;
  };
};