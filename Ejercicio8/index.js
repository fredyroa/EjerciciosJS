const frase = prompt("Introduce una frase corta");

function eliminarVocales(frase) {
    let resultado = frase.replace(/[QqWwRrTtYyPpSsDdFfGgHhJjKkLlÑñZzXxCcVvBbNnMm]/g, '')
    return resultado
}

const fraseSinVocales = eliminarVocales(frase);

alert("La frase '"  + frase + "' asi queda sin consonantes '" + fraseSinVocales + "'");