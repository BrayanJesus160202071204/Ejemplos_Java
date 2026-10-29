//05-presentarProducto.js
//Que hace?:Arma el mensaje de una oferta uniendi variables
//Como correrlo?: node 05-presentarProducto.js

const producto = "Teclado mecanico";
const marca = "Acme";
const precio = 899;
const descuento = 150;

const nombreCompleto = marca + " " + producto;
const precioFinal = precio - descuento;

//Con el operador + 
const mensaje = "Oferta: " + nombreCompleto + " a $" + precioFinal + " pesos.";
console.log (mensaje);
//Con template literal ( comillas investidas)
const mensajeTemplate = `Oferta: ${nombreCompleto} a $${precioFinal} pesos.`;
console.log (mensajeTemplate);
console.log (mensaje === mensajeTemplate);