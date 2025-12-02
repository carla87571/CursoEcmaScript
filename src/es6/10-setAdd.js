const frutas = new Set(['🍎', '🍌', '🍊']);

// .add() - Agregar
frutas.add('🍇');

// .has() - Verificar si existe
console.log(frutas.has('🍎')); // true
console.log(frutas.has('🍉')); // false

// .delete() - Eliminar
frutas.delete('🍌');

// .size - Tamaño
console.log(frutas.size); // 3

// .clear() - Vaciar todo
frutas.clear();
console.log(frutas.size); // 0

//crear un set
// Crear un Set vacío
const miSet = new Set();

// Agregar elementos con .add()
miSet.add(1);
miSet.add(2);
miSet.add(3);
miSet.add(2); // ← Intenta agregar duplicado (lo ignora)

console.log(miSet); // Set(3) { 1, 2, 3 }

// Crear un set desde un array
const numeros = [1, 2, 3, 4, 5, 5, 4, 3];
const miSetDesdeArray = new Set(numeros);
console.log(miSetDesdeArray); // Set(5) { 1, 2, 3, 4, 5 }

// Ejemplo práctico: Almacenar usuarios únicos que dieron "like" a una publicación
const likes = new Set();

likes.add('usuario123');
likes.add('maria456');
likes.add('juan789');
likes.add('usuario123'); // Intenta dar like dos veces (se ignora)

console.log(likes.size); // 3 (no cuenta duplicados)
console.log(likes.has('maria456')); // true

// Otro ejemplo: IDs de productos en el carrito (sin repetir)
const productosEnCarrito = new Set();

productosEnCarrito.add('prod-001'); // iPhone
productosEnCarrito.add('prod-002'); // AirPods
productosEnCarrito.add('prod-001'); // Intenta agregar iPhone otra vez

console.log(productosEnCarrito.size); // 2 productos únicos



//Eliminar Duplicados de un array
// Tienes emails duplicados
const emails = [
    'ana@gmail.com',
    'pedro@gmail.com',
    'ana@gmail.com',
    'luis@gmail.com',
    'pedro@gmail.com'
];

// Usar Set para eliminar duplicados
const emailsUnicos = [...new Set(emails)];

console.log(emailsUnicos);
// ['ana@gmail.com', 'pedro@gmail.com', 'luis@gmail.com']