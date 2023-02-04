const texto = prompt("Escriba un frase o texto");

function tipoTexto(texto) {

    var resultado = "";
    
    //"+texto+"\" ";

    if(texto == texto.toUpperCase()) {
      resultado = " está escrito con sólo mayúsculas";
    }
    else if(texto == texto.toLowerCase()) {
      resultado = " está escrito con sólo minúsculas";
    }
    else {
      resultado = " está escrito con mayúsculas y minúsculas";
    }
    return resultado;
  }

  var resultado = tipoTexto(texto)

alert("El texto '" + texto + "'" + resultado);