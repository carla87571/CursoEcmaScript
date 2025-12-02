//Utilizando strings
const saludo = "Hola mundo"
//              0123456789  ← índices

saludo.includes("Hola") // true
saludo.includes("Mundo") // false
saludo.includes(" ") // true
saludo.includes("Hola", 1) // false
// Busca "Hola" empezando desde la posición 1

// Posición 0: "H" ← NO empieza aquí
// Posición 1: "o" ← Empieza AQUÍ
// Busca en: "ola mundo"
// ¿Encuentra "Hola"? NO → false

saludo.includes("mundo", -5) // true
// Con números negativos, cuenta desde el FINAL

// String: "Hola mundo"
// Longitud: 10 caracteres
// -5 significa: 10 - 5 = posición 5

// Posición 5: "m" ← Empieza AQUÍ
// Busca en: "mundo"
// ¿Encuentra "mundo"? SÍ → true



const texto = "JavaScript es genial";
//             0123456789...

// SIN segundo argumento (busca en todo el string)
console.log(texto.includes("Java"));        // true
console.log(texto.includes("genial"));      // true

// CON segundo argumento (desde dónde buscar)
console.log(texto.includes("Java", 0));     // true (busca desde el inicio)
console.log(texto.includes("Java", 1));     // false (se salta la "J")
console.log(texto.includes("Script", 4));   // true (empieza desde "S")
console.log(texto.includes("genial", 15));  // true (empieza desde "g")
console.log(texto.includes("genial", 16));  // false (se salta "genial")

// Con números NEGATIVOS
console.log(texto.includes("genial", -6));  // true (20 - 6 = posición 14)
console.log(texto.includes("Java", -20));   // true (empieza desde 0)