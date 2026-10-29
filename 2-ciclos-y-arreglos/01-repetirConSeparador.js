//01-repetirConSeparador.js
//Qué hace?: Repite un texto n veces con un separador entre cada copia.
//Comó correrlo: node 01-repetirConSeparador.js

function repetirConSeparador(texto, veces, separador){
    //1. Valdar antes de hacer cualquier cosa
    if(veces < 0){
        return "ERROR"
    }
    //2. Acumulador: empieza vacio y crece en cada vuelta
    let resultado = "";
    //3. Ciclo: se ejecuta el numero de veces
    for(let i = 0; i < veces; i++){
        resultado = resultado + texto;
        if(i < veces - 1){
            resultado = resultado + separador;
        }
    }
    return resultado;
}
console.log(repetirConSeparador("ja", 3, "-"));