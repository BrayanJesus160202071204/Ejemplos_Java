//02-CalcularPromedio.js
//Qué hace?: Corrige una funcion que devai devolver el promedio de dos calificaciones
//Como correrlo: node 02-calcularPromedio.js

//Version con error
function calcularPromedioConError(){
    const calificacion1 = 8;
    const calificacion2 = 10;

    let promedio;

    promedio = ("calificacion1" + "calificacion2") / 2 ;

    return promedio;
}
//Version corregida

function calcularPromedio(){
    const calificacion1 = 8;
    const calificacion2 = 10;

    let promedio;

    promedio = (calificacion1 + calificacion2) / 2 ;

    return promedio;
}

console.log(calcularPromedioConError());
console.log(calcularPromedio());