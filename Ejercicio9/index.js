const gradosC = prompt("Introduce el valor de ° Centigrados para convertir a ° Fahrenheit");

function conversionCelsiusFahrenheit(gradosC) {
    const gradosF = (gradosC * 9/5) + 32;
    return gradosF;
}

gradosF = conversionCelsiusFahrenheit(gradosC);

alert(gradosC + "° Centigrados equivale a " + gradosF + "° Fahrenheit");