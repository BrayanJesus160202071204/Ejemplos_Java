//02-invertirPalabras.js
//Qué hace?: Invierte el orden de las palabras de una frece
//Como correrlo: node 02-invertirPalabras.js

//Version con siclo que recorre de atrás hacia adelante
function invertirPalabras (frase) {
    const palabras = frase.split(" "); //string -> arreglo
    const resultado =[];

    for (let i = palabras.length -1; i >= 0; i--){
        resultado.push(palabras[i]);
    }

    return resultado.join(" "); // arreglo -> string

}

//Version con metodos encadenados 
const invertirPalabrasCorta = (frase) => frase.split(" ").reverse().join(" "); //reverse = for 
console.log(invertirPalabrasCorta("uno dos tres"));
console.log(invertirPalabras("aprender JavaScript es divertido"));
console.log(invertirPalabras("ho la"));
console.log(invertirPalabras("")==="")