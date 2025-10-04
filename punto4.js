let dividendo = parseInt(prompt("Ingresa el número que quieres dividir"));
let divisor = parseInt(prompt("Ingresa el número por el que quieres dividir"));

let residuo = dividendo % divisor;

console.log(`El residuo de dividir ${dividendo} entre ${divisor} es ${residuo}`);

let nota1 = parseFloat(prompt("Ingresa la primera nota"));
let nota2 = parseFloat(prompt("Ingresa la segunda nota"));

if (nota1 === nota2) {
  console.log("Las dos notas son iguales.");
} else {
  console.log("Las dos notas son diferentes.");
}





let dineroDisponible = parseInt(prompt("¿Cuánto dinero tienes?"));
let valorCompra = parseInt(prompt("¿Cuánto costó la compra?"));

let dineroRestante = dineroDisponible - valorCompra;

console.log(`Después de la compra te quedan $${dineroRestante} pesos.`);




let vidasActuales = parseInt(prompt("¿Cuántas vidas tienes actualmente?"));
let vidasExtra = parseInt(prompt("¿Cuántas vidas quieres agregar?"));

let vidasTotales = vidasActuales + vidasExtra;

console.log(`Ahora tienes ${vidasTotales} vidas en total.`);




let nota1_ = parseInt(prompt("Ingresa la primera nota"));
let nota2_ = parseInt(prompt("Ingresa la segunda nota"));
let nota3_ = parseInt(prompt("Ingresa la tercera nota")); 

let promedio = (nota1_ + nota2_ + nota3_) / 3; console.log(`El promedio de tus notas es ${promedio.toFixed(2)}`);




let dineroTotal = parseInt(prompt("¿Cuánto dinero tienes en total?"));
let valorMoneda = 500;

let cantidadMonedas = Math.floor(dineroTotal / valorMoneda);

console.log(`Puedes recibir ${cantidadMonedas} monedas de $${valorMoneda}.`);
