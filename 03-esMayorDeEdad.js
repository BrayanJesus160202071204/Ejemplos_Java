//03-esMayorDeEdad.js
//Qué hace?: Devuelve true si la edad es 18 o más.
// Cómo correrlo?: node 03-esMayorDeEdad.js

//Versión larga, con if/else
    function esMayorDeEdad(edad) {
        if (edad >= 18){
            return true;
        }else {
            return false;
        }
    }

    //vesión corta: la coparación ya es un boleano

    const esMayorDeEdadCorta = (edad) => edad >= 18;

    console.log (esMayorDeEdad(25));
    console.log (esMayorDeEdad(15));
    console.log (esMayorDeEdadCorta(10));
    console.log (esMayorDeEdadCorta(25));
