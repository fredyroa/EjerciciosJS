// Determinar el número mayoy del Array
const data = ["hola", 2, 5, "adios"];
console.log("opcion 1 el numero mayor es " + Math.max(data[1], data[2]));

let soloNumeros = data.filter(data =>  Number.isInteger(data));
console.log("opcion 2 el numero mayor es " + Math.max(...soloNumeros));
