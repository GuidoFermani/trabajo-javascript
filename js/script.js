const nombre = prompt("¿Cuál es tu nombre?");
const apellido = prompt("¿Cuál es tu apellido?");
const anioNacimiento = parseInt(prompt("¿En qué año naciste?"));

const anioActual = 2026;
let edad = anioActual - anioNacimiento;

const mensaje = "Hola " + nombre + " " + apellido + ", tenés " + edad + " años.";

console.log(mensaje);
alert(mensaje);