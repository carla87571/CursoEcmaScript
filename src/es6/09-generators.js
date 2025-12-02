// Ejemplo de Generator
function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(['Oscar', 'Ana', 'Luis', 'Maria', 'Rocío']);
console.log(it.next().value); // Oscar
console.log(it.next().value); // Ana
console.log(it.next().value); // Luis
console.log(it.next().value); // Maria
console.log(it.next().value); // Rocío
console.log(it.next().value); // undefined  



// Ejemplo de función normal sin generator
function iterateNormal(array) {
    for (let value of array) {
        console.log(value);
    }
    // Se ejecuta TODO de una vez
}

iterateNormal(['Oscar', 'Ana', 'Luis']);
// Imprime:
// Oscar
// Ana
// Luis
// (Todo junto, sin pausa)