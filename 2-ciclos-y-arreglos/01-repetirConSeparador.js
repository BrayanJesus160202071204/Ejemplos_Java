//01-repetirConSeparador.js
//Qué hace?: Repite un texto n veces con un separador entre cada copia.
//Comó correrlo: node 01-repetirConSeparador.js

function repetirConSeparador(texto, veces, separador){
    //1. Valdar antes de hacer cualquier cosa
    if(veces < 0){
        return "ERROR";
    }
    //2. Acumulador: empieza vacio y crece en cada vuelta
    let resultado = "";
    //3. Ciclo: se ejecuta el numero de veces
    for(let i = 0; i < veces; i++){
        resultado += texto;  //+= repite la primera palabra entre las cuales hay un igual y se le grega la segunda con un signo de mas
        if(i < veces - 1){
            resultado += separador; // ej del anterior resulto= resultado + separador 
        }
    }
    return resultado;
}
console.log(repetirConSeparador("ja", 3, "-"));
console.log(repetirConSeparador("eco", 5, "..."));
console.log(repetirConSeparador("hola", 0, ",")===" ");
console.log(repetirConSeparador("x", -2, "*"));