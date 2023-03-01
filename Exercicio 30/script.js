/* Mudar modo */
function mudaModo(){
  document.body.classList.toggle('dark')
}

/* Mostrar valores por extenso */
function numeroPorExtenso() {
  
  var n = document.getElementById("num").value;  
  var unidades=["Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove"];
	var especiais=["Dez","Onze", "Doze", "Treze", "Catorze", "Quinze", "Dezeseis", "Dezsete", "Dezoito", "Deznove"]; 
	var dezenas=["Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"];
		
	//Valores com 1 algarismo
  if(n.length === 1) {
    document.getElementById("result").innerHTML = unidades[parseInt(n[0])];
	}			

	//Valores com 2 algarismos
	else if(n.length === 2) {
		//Especiais
		if((n[0]=='1') && (n[1]=='0'||n[1]=='1'||n[1]=='2'||n[1]=='3'||n[1]=='4'||n[1]=='5'||n[1]=='6'||n[1]=='7'||n[1]=='8'||n[1]=='9')) {
      document.getElementById("result").innerHTML = especiais[parseInt(n[1])];
	  }

    //Inicio com 0
    else if(n[0]=='0') {
      document.getElementById("result").innerHTML = unidades[parseInt(n[0])] + " " + unidades[parseInt(n[1])];
      if (n[1]=='0'){
        document.getElementById("result").innerHTML = unidades[parseInt(n[0])];
      }
    }
    
		//Dezenas
		else if((n[0]=='2'||n[0]=='3'||n[0]=='4'||n[0]=='5'||n[0]=='6'||n[0]=='7'||n[0]=='8'||n[0]=='9') && n[1]=='0') {
      document.getElementById("result").innerHTML = dezenas[parseInt(n[0]-2)];
		}

		//Dezenas compostas
		else {
      document.getElementById("result").innerHTML = dezenas[parseInt(n[0]-2)] +" e "+ unidades[parseInt(n[1])];
		}
	}
}