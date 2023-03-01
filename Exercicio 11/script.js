/* Mudar modo */
function mudaModo(){
  document.body.classList.toggle('dark')
}

/* Decimal */
var input_field = document.getElementById('nota1');
input_field.addEventListener('change', function() {
    var v = parseFloat(this.value);
    if (isNaN(v)) {
        this.value = '';
    } else {
        this.value = v.toFixed(1);
    }
});

var input_field = document.getElementById('nota2');
input_field.addEventListener('change', function() {
    var v = parseFloat(this.value);
    if (isNaN(v)) {
        this.value = '';
    } else {
        this.value = v.toFixed(1);
    }
});

/* limite decimal */
function limitDecimalPlaces(e, count) {
  if (e.target.value.indexOf('.') == -1) { return; }
  if ((e.target.value.length - e.target.value.indexOf('.')) > count) {
    e.target.value = parseFloat(e.target.value).toFixed(count);
  }
};

/* Calcular nota final e texto explicativo */
function calcularnota() {
  var nota1 = Number(document.calc.nota1.value);
  var nota2 = Number(document.calc.nota2.value);
  var resposta = document.getElementById("resposta");
  var notafinal = document.getElementById("notafinal");
  
  soma = nota1 + nota2;
  
  var condicao = (soma >= 60) ? "APROVADO"  : "REPROVADO";
  var mensagem = `Nota final ${soma.toFixed(1)}`;
  notafinal.innerHTML = mensagem;
  resposta.innerHTML = condicao;
};
