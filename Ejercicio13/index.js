const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];
const numberPar = []
const numberImpar = []

for(var i=0; i<number.length; i++) {
    if(number[i] % 2 == 0) {
        var numeroP = number[i]
        numberPar.push(numeroP)
    }
    else {
        var numeroI = number[i]
        numberImpar.push(numeroI)
    }

}
console.log("Array Completo: [" + number + "]");
console.log("Array de numeros pares: [" + numberPar + "]");
console.log("Array de numeros impares: [" +numberImpar + "]");