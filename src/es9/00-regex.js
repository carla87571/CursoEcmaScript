const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
console.table(match)



// Validar Formularios (E-ecommerce/Apps)
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

console.log(validarEmail('ana@gmail.com'));    // true
console.log(validarEmail('invalido.com'));     // false
console.log(validarEmail('sin@arroba'));       // false


// Validar TELÉFONO (México: 10 dígitos)
function validarTelefono(tel) {
  const regex = /^[0-9]{10}$/;
  return regex.test(tel);
}

console.log(validarTelefono('5512345678'));    // true
console.log(validarTelefono('123'));           // false



// Validar CONTRASEÑA (mínimo 8 caracteres, 1 mayúscula, 1 número)
function validarPassword(password) {
  const regex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
  return regex.test(password);
}

console.log(validarPassword('Abc12345'));      // true
console.log(validarPassword('abc12345'));      // false (sin mayúscula)
console.log(validarPassword('Abc123'));        // false (menos de 8)