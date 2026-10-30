//03-conservarSolo.js
//Qué hace?: Conserva solo los elementos que vienen en una lista de permitidos
//Como correrllo?: node 03-conservarSolo.js

function conservarSolo (arreglo, ...permitidos){ //... es un parametro rest
    //filter conserva los elementos donde la función devuelve true
    return arreglo.filter((elemento) => permitidos.includes(elemento));
}

console.log(conservarSolo([1, 2, 3, 4, 5], 2));