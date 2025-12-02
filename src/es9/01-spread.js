const user = {
  username: "gndx",
  age: 34,
  country: "CO"
}

// ===== REST OPERATOR (Agrupa) =====
// ✅ REST en objetos - agrupa lo que sobra
const {username, ...values} = user;
console.log(username); // 'gndx'
console.log(values); // { age: 34, country: 'CO' }

// REST en arrays - agrupa elementos restantes
const [primero, segundo, ...resto] = [1, 2, 3, 4, 5];
console.log(primero);  // 1
console.log(segundo);  // 2
console.log(resto);    // [3, 4, 5]

// REST en funciones - agrupa todos los argumentos
function sumar(...numeros) {
  return numeros.reduce((a, b) => a + b, 0);
}
console.log(sumar(1, 2, 3, 4, 5)); // 15


// ===== SPREAD OPERATOR (Expande) =====
// ✅ SPREAD en objetos - expande propiedades
const newUser = {
  ...user,  // Expande todas las propiedades
  city: 'Bogotá'
};
console.log(newUser);
// { username: 'gndx', age: 34, country: 'CO', city: 'Bogotá' }


// SPREAD en arrays - expande elementos
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

// SPREAD para llamar funciones
const numeros = [10, 5, 8, 15, 3];
console.log(Math.max(...numeros)); // 15

// SPREAD para copiar objetos/arrays (sin referencia)
const userCopy = {...user};
console.log(userCopy); // { username: 'gndx', age: 34, country: 'CO' }

/*
Regla nemotécnica:

REST = REunir/Sobre/Todo lo demás
SPREAD = Expandir/Separar
¡Mismo símbolo (...), diferente propósito según dónde lo uses! 
*/