const topics = ["JavaScript", "Variables", "funciones", "condicionales", "bucles"];
const topicsUpper = []

for(var i=0; i<topics.length; i++) {
    var palabra = topics[i].toUpperCase()
    topicsUpper.push(palabra)
}

topicsUpper.reverse()
console.log(topicsUpper)