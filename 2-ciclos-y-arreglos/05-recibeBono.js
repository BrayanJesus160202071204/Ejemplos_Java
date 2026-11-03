// 05-recibeBono.js
//Qué hace?: Regla con excepción y exepcion de la exepción 
//Comoó correrlo?: node 05-recibeBono.js

//recive bono si bendio 100 o mas 
//Expción: No lo recibe si tubo mas de tres faltas
//A menos que vendio 200 o mas 

function recibeBono (ventas, faltas){
    const vendioSuficiente = ventas >= 100;
    const muchasFaltas = faltas > 3;
    const ventasExepcionales = ventas >= 200;

    return vendioSuficiente && (!muchasFaltas || ventasExepcionales);
}

console.log(recibeBono(150, 1));
console.log(recibeBono(150, 5));
console.log(recibeBono(250, 5));
console.log(recibeBono(80, 0));