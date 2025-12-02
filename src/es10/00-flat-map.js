// APLANAR ARRAY ANIDADOS
//Ejemplo Real: E-commerce - Listado de Productos
// Tienes productos organizados por categorías
const inventario = [
  ['Laptop', 'Mouse', 'Teclado'],           // Electrónica
  ['Camiseta', 'Pantalón'],                 // Ropa
  ['Silla', 'Escritorio', 'Lámpara']        // Muebles
];

// Necesitas una lista simple de TODOS los productos
const todosLosProductos = inventario.flat();

console.log(todosLosProductos);
// ['Laptop', 'Mouse', 'Teclado', 'Camiseta', 'Pantalón', 'Silla', 'Escritorio', 'Lámpara']

/*
Para qué?

Mostrar todos los productos en un buscador
Contar el total de productos
Generar un reporte completo
*/








// FLAT
const array = [1,2,[3,4],5,6]
const result = array.flat() 
result// [1,2,3,4,5,6]
console.log(array.flat(1)); // [1,2,3,4,5,6]
console.log(result); // [1,2,3,4,5,6]

const array2 = [1, 2, [3, 4, [5, 6]]];
const result2 = array2.flat() 
result2// [1, 2, 3, 4, [5, 6]]
console.log(result2);

// ...existing code...

const array3 = [1, 2, [3, 4, [5, 6]]];
const result3 = array3.flat(2);  // ← Corregido
console.log(result3); // [1, 2, 3, 4, 5, 6]


const array4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
const result4 = array4.flat(Infinity) 
result4// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const array5 = [1, 1, 2, 3,4 , [1,3,5,6], [1,2,4]]
console.log(array5.flat(3)); // [1, 1, 2, 3, 4, 1, 3, 5, 6, 1, 2, 4]



// FLATMAP
const array6 = [1, 2, 3, 4, 5]
const result6 = array6.flatMap(x => [x, x * 2]) 
result6// [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
console.log(result6); // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

const array7 = ['Hello World']
const result7 = array7.flatMap(x => x.split(' ')) 
result7// ['Hello', 'World']
console.log(result7); // ['Hello', 'World']