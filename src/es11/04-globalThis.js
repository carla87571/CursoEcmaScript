console.log(window);
console.log(global);
console.log(self);

console.log(globalThis);

// En el navegador
window === globalThis // true

// En Node.js
global === globalThis // true

// Accediendo a globalThis
globalThis.miVariable = 'Hola Mundo';
console.log(miVariable); // 'Hola Mundo'