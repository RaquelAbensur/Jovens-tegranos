/* Mudar modo */
function mudaModo(){
  document.body.classList.toggle('dark')
}

/* Decimal */
var input_field = document.getElementById('valor');
input_field.addEventListener('change', function() {
    var v = parseFloat(this.value);
    if (isNaN(v)) {
        this.value = '';
    } else {
        this.value = v.toFixed(2);
    }
});

/* limite decimal */
function limitDecimalPlaces(e, count) {
  if (e.target.value.indexOf('.') == -1) { return; }
  if ((e.target.value.length - e.target.value.indexOf('.')) > count) {
    e.target.value = parseFloat(e.target.value).toFixed(count);
  }
};

/* Calcular salario*/
function calcularsalario() {
  var valor = Number(document.calc.valor.value);
  var result = document.getElementById("result");

  /* 20% */
  if (valor <= 999) {
    porcentagem = 20;
    aumento = (porcentagem / 100) * valor;
    newsalario = valor + aumento;
    var mensagem = `Novo sálario: R$${newsalario.toFixed(2)}
    Aumento: R$${aumento.toFixed(2)}
    Porcentagem: ${porcentagem} %`;
  }
  /* 15% */ 
  else if ((valor => 1000) && (valor <= 2999)) {
    porcentagem = 15;
    aumento = (porcentagem / 100) * valor;
    newsalario = valor + aumento;
    var mensagem = `Novo sálario: R$${newsalario.toFixed(2)}
    Aumento: R$${aumento.toFixed(2)}
    Porcentagem: ${porcentagem} %`;
  }
  /* 10% */
  else if ((valor => 3000) && (valor <= 7999)) {
    porcentagem = 10;
    aumento = (porcentagem / 100) * valor;
    newsalario = valor + aumento;
    var mensagem = `Novo sálario: R$${newsalario.toFixed(2)}
    Aumento: R$${aumento.toFixed(2)}
    Porcentagem: ${porcentagem} %`;
  }
  /* 05% */
  else {
    porcentagem = 0.5;
    aumento = (porcentagem / 100) * valor;
    newsalario = valor + aumento;
    var mensagem = `Novo sálario: R$${newsalario.toFixed(2)}
    Aumento: R$${aumento.toFixed(2)}
    Porcentagem: ${porcentagem} %`;
  }
  
  result.innerHTML = mensagem;
};
