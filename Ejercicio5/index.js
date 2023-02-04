const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var numero = prompt("Introduce tu número de DNI (sin la letra)");

if(numero < 0 || numero > 99999999) {
    alert("El número proporcionado no es válido");
  }
else {
    var letraCalculada = letras[numero % 23];
    alert("Para el número de DNI " + numero + " la letra correcta es " + letraCalculada);
  }