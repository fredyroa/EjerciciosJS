// Calculo del volumen
// base 16 cm * 23 cm
// altura 13 cm
const volumen = 16 * 23 * 13;
console.log('volumen', volumen + ' cm3');

// Calculo del Área
// A = al * 2ab
const areaLateral = 23 * 13;
const areaBase = 16 * 23;
const areaTotal = areaLateral + 2 * areaBase;
console.log('área', areaTotal + ' cm2');

//Generalización
const base = 23;
const altura = 13;
const ancho = 16;

const volumen2 = base * altura * ancho;
console.log('volumen2', volumen2 + ' cm3')

const areaTotal2 = base * altura + 2 * base * ancho;
console.log('área2', areaTotal2 + ' cm2');