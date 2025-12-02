let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world + '!'; //antes
console.log(epicPhrase); // Hello World!

//template literals ES6
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2); // Hello World!

//multilínea antes
let lorem = 'Esto es un string. \n' + 'Esto es otra línea.';
console.log(lorem);

let lorem2 = `Esta es una frase épica.
Esta es la segunda línea.`;
console.log(lorem2); // Esta es una frase épica.
// Esta es la segunda línea.  