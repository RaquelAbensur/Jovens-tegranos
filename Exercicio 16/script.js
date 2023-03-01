/* Mudar modo */
function mudaModo(){
  document.body.classList.toggle('dark')
}

/* Decimal */
var input_field = document.getElementById('num1');
input_field.addEventListener('change', function() {
    var v = parseFloat(this.value);
    if (isNaN(v)) {
        this.value = '';
    } else {
        this.value = v.toFixed(2);
    }
});

var input_field = document.getElementById('num2');
input_field.addEventListener('change', function() {
    var v = parseFloat(this.value);
    if (isNaN(v)) {
        this.value = '';
    } else {
        this.value = v.toFixed(2);
    }
});

var input_field = document.getElementById('num3');
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

/* Calcular maior distancia*/
function calculardistancia() {
  var num1 = document.calc.num1.value;
  var num2 = document.calc.num2.value;
  var num3 = document.calc.num3.value;
  var result = document.getElementById("result");

  var max = Math.max(num1, num2, num3);

  var mensagem = `O maior número é ${max}`;
  result.innerHTML = mensagem;
};
