//sumarPares.js
//Qué hace?: Suma los numeros pares de un rango con validacion de entradas 
//Cómo correrlo?: node sumarPares.js

function sumarPares(a, b){
    //1. Validar: enteros y no negativos
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    if (a<0 || b<0) return "ERROR";

    //2. Ordenar no importa cual benga primero
    const inicio = Math.min(a, b);
    const fin = Math.max(a, b);

    //3. Acumular
    let suma = 0;
    for (let n = inicio; n <= fin; n++){
        if (n % 2 === 0){
            suma += n;
        }
    }
    return suma;
}
console.log(sumarPares(1, 10));
console.log(sumarPares(10, 1));
console.log(sumarPares(3, 3));
console.log(sumarPares(-4, 6));
console.log(sumarPares(2.5, 8));
console.log(sumarPares(2, "8"));
console.log(sumarPares(2, [8]));