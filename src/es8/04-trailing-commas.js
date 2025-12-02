// EL TRAILING COMMA, SIRVE PARA EVITAR  CONFLICTOS EN GIT CUANDO VARIOS
// DESARROLLADORES ESTÁN TRABAJANDO EN EL MISMO CÓDIGO Y SE HACEN CAMBIOS SIMULTÁNEOS
// ✅ BIEN - Trailing comma (coma al final)
const array = [
  24,
  34,
  25,
  45,  // ← Coma final (trailing comma)
];

const user = {
  nombre: 'Ana',
  edad: 25,
  ciudad: 'Madrid',  // ← Coma final
};

function sum(
  a,
  b,
  c,  // ← Coma final
) {
  return a + b + c;
}

// Ejemplo Real 1: Lista de productos en E-commerce
// Imagina que estás creando un catalogo de productos 
// y tu equipo va agregando productos constamente.

// SIN trailing commas (coma al final)
const productos = [
  { id: 1, nombre: 'Laptop', precio: 999 },
  { id: 2, nombre: 'Mouse', precio: 25 },
  { id: 3, nombre: 'Teclado', precio: 75 }  // ← Sin coma
];

// Problema: Si quires agregar un producto nuevo:

const productos1 = [ //cambio el nombre para evitar conficto
  { id: 1, nombre: 'Laptop', precio: 999 },
  { id: 2, nombre: 'Mouse', precio: 25 },
  { id: 3, nombre: 'Teclado', precio: 75 }, // ← Tuviste que agregar la coma aquí
  { id: 4, nombre: 'Monitor', precio: 200 }
];

// En Git se ve así:
/*
  { id: 2, nombre: 'Mouse', precio: 25 },
- { id: 3, nombre: 'Teclado', precio: 75 }
+ { id: 3, nombre: 'Teclado', precio: 75 },  ← Modificaste esta línea
+ { id: 4, nombre: 'Monitor', precio: 200 }  ← Agregaste esta línea
];
*/
// RESULTADO: MODIFICASTE 2 LÍNEAS, AUNQUE SOLO QUERÍAS AGREGAR 1 PRODUCTO



// CON trailing commas (coma al final)
const productos3 = [
  { id: 1, nombre: 'Laptop', precio: 999 },
  { id: 2, nombre: 'Mouse', precio: 25 },
  { id: 3, nombre: 'Teclado', precio: 75 },  // ← CON coma
];

// Agregando un nuevo producto:
const productos4 = [
  { id: 1, nombre: 'Laptop', precio: 999 },
  { id: 2, nombre: 'Mouse', precio: 25 },
  { id: 3, nombre: 'Teclado', precio: 75 },
  { id: 4, nombre: 'Monitor', precio: 200 },  // ← Solo agregaste esta línea
];

// EN GIT SE VE ASI
/*
  { id: 3, nombre: 'Teclado', precio: 75 },
+ { id: 4, nombre: 'Monitor', precio: 200 },  ← Solo 1 línea cambiada
];
*/