//Número de enlaces de la página.
var numeroEnlaces = document.getElementsByTagName("a");
console.log("Número de enlaces de la página = " + numeroEnlaces.length);

//Dirección a la que enlaza el penúltimo enlace.
console.log("Dirección a la que enlaza el penúltimo enlace = " + numeroEnlaces[numeroEnlaces.length - 2].href);

//Número de enlaces del tercer párrafo.
var tercerParrafo = document.getElementById("third-paragraph");
var numeroEnlacesTercerParrafo = tercerParrafo.getElementsByTagName("a");
console.log("Número de enlaces del tercer párrafo = " + numeroEnlacesTercerParrafo.length);