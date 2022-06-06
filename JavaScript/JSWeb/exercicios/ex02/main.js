const numero = document.querySelectorAll('input[type=button]');


function imprimirNumero(){
  alert(numero);
}
document.querySelector('input[type=tel]').onclick = imprimirNumero;
