class cuadrado {
    constructor(lado) {
        this.lada = lado;
        console.log("El área de un cuadrado de lado "+ lado + " es " + lado * lado + " cm2");
        console.log("El perimetro un cuadrado de lado " + lado + " es " + lado * 4 + " cm");
    }
  }

const cuadradoPequeño = new cuadrado(2);
const cuadradoMediano = new cuadrado(5);
const cuadradoGrande = new cuadrado(10);