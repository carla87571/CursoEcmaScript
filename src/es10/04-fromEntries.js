// 1. Objeto original
const usuario = {
  name: 'Andres',
  email: 'andres@correo.com',
  age: 23
};

// 2. Convertir objeto a array (Object.entries)
const arrayEntries = Object.entries(usuario);
console.log(arrayEntries);
// [
//   ['name', 'Andres'],
//   ['email', 'andres@correo.com'],
//   ['age', 23]
// ]

// 3. Convertir array a objeto (Object.fromEntries)
const usuarioNuevo = Object.fromEntries(arrayEntries);
console.log(usuarioNuevo);
// {
//   name: 'Andres',
//   email: 'andres@correo.com',
//   age: 23
// }


// TRANSFORMAR VALORES DE UN OBJETO
// Sistema de precios: Aplicar descuento del 20%
const precios = {
  laptop: 1000,
  mouse: 50,
  teclado: 100
};

const preciosConDescuento = Object.fromEntries(
  Object.entries(precios).map(([producto, precio]) => 
    [producto, precio * 0.8]  // 20% descuento
  )
);

console.log(preciosConDescuento);
// {
//   laptop: 800,
//   mouse: 40,
//   teclado: 80
// }