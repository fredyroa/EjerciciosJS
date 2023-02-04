const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2];
var suma = 0
var suma2 = 0

// Forma 1 for
for(var i=0; i<notas.length; i++) {
    suma += notas[i];
}
alert("la suma 1 (for) del array  " + notas + " es " + suma);

//Forma 2 for of
for (const numeros of notas){
    suma2 += numeros;
}
alert("la suma 2 (for of) del array  " + notas + " es " + suma);