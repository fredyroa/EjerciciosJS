const meses = ["enero", "febrero", "marzo", "mayo", "abril", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
const mesesSiete = [];

for(var i=0; i<meses.length; i++) {
    if(meses[i].length >= 7) {
    //    var mes = meses[i]
        mesesSiete.push(meses[i])
    }
}

var numeroMesesSiete = mesesSiete.length

console.log("Meses del año: [" + meses + "]");
console.log("Meses con mas de 7 letras son: [" + mesesSiete + "]");
console.log("Hay " + numeroMesesSiete + " meses con mas de 7 letras");