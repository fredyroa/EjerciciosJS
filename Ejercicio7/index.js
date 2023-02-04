const numeros = [1,2,3,4,5,6];


function sumaPar (numeros){
    var suma = 0;

    for(var i=0; i<numeros.length; i++) {
        if(numeros[i] % 2 == 0) {
            suma = suma + numeros[i]; 
        }
    }
    return suma;
}

const valor = sumaPar(numeros)
alert("la suma de los numeros pares de [" + numeros + "] es " + valor);

