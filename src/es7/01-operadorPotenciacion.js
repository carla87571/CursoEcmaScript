const potencia = 2**3

console.log(potencia) // 8

// Comparación con Math.pow
// ❌ Antigua (más código)
const resultado1 = Math.pow(2, 3);
console.log(resultado1); // 8

// ✅ Moderna (más corta)
const resultado2 = 2 ** 3;
console.log(resultado2); // 8

// Ejemplo: Cálculo del área de un cuadrado
const lado = 5;
const area = lado ** 2;
console.log(`Área: ${area} cm²`); // 25 cm²

// Ejemplo: Cálculo del volumen de un cubo
const arista = 3;
const volumen = arista ** 3;
console.log(`Volumen: ${volumen} cm³`); // 27 cm³

// Ejemplo: Conversión de kilobytes a bytes
const kilobytes = 5;
const bytes = kilobytes * (2 ** 10); // 1 KB = 1024 bytes
console.log(`${kilobytes} KB = ${bytes} bytes`); // 5120 bytes