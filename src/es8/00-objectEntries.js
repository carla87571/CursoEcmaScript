const countries = {
  AR: 'Argentina',
  BO: 'Bolivia',
  BR: 'Brasil',
};

const entries = Object.entries(countries);
console.log(entries);
// [
//   [ 'AR', 'Argentina' ],
//   [ 'BO', 'Bolivia' ],
//   [ 'BR', 'Brasil' ]
// ]

// Podemos convertirlo de nuevo a un objeto con Object.fromEntries()
const newCountries = Object.fromEntries(entries);
console.log(newCountries);
// { AR: 'Argentina', BO: 'Bolivia', BR: 'Brasil' }

// Ejemplo práctico: Iterar sobre las entradas de un objeto
entries.forEach(([code, country]) => {
  console.log(`${code}: ${country}`);
});
// AR: Argentina
// BO: Bolivia
// BR: Brasil

// Ejemplo: Convertir un objeto a un mapa (Map)
const countriesMap = new Map(entries);
console.log(countriesMap);
// Map(3) { 'AR' => 'Argentina', 'BO' => 'Bolivia', 'BR' => 'Brasil' }

// Ejemplo: Filtrar entradas de un objeto
const filteredEntries = entries.filter(([code, country]) => country.startsWith('B'));
console.log(filteredEntries);
// [ [ 'BO', 'Bolivia' ], [ 'BR', 'Brasil' ] ]

// Convertir las entradas filtradas de nuevo a un objeto
const filteredCountries = Object.fromEntries(filteredEntries);
console.log(filteredCountries);
// { BO: 'Bolivia', BR: 'Brasil' }

// Ejemplo: Contar el número de entradas en un objeto
const numberOfCountries = entries.length;
console.log(numberOfCountries); // 3  




//E-commerce: Filtros de Productos
// Objeto con filtros seleccionados por el usuario
const filtrosActivos = {
  categoria: 'Electrónica',
  marca: 'Samsung',
  precioMin: 100,
  precioMax: 500,
  envioGratis: true
};

// Construir query string para API
function construirURL(filtros) {
  const params = Object.entries(filtros)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  
  return `https://api.tienda.com/productos?${params}`;
}

console.log(construirURL(filtrosActivos));
// https://api.tienda.com/productos?categoria=Electrónica&marca=Samsung&precioMin=100&precioMax=500&envioGratis=true




// Formulario: Validación de campos
// Datos del formulario de registro
const formulario = {
  nombre: 'Ana García',
  email: 'ana@gmail.com',
  password: '12345',
  telefono: '',
  terminos: false
};

// Validar todos los campos
function validarFormulario(datos) {
  const errores = {};
  
  Object.entries(datos).forEach(([campo, valor]) => {
    // Validar campos vacíos
    if (valor === '' || valor === null) {
      errores[campo] = `El campo ${campo} es obligatorio`;
    }
    
    // Validar email
    if (campo === 'email' && !valor.includes('@')) {
      errores[campo] = 'Email inválido';
    }
    
    // Validar password
    if (campo === 'password' && valor.length < 8) {
      errores[campo] = 'La contraseña debe tener al menos 8 caracteres';
    }
    
    // Validar términos
    if (campo === 'terminos' && !valor) {
      errores[campo] = 'Debes aceptar los términos y condiciones';
    }
  });
  
  return errores;
}

const errores = validarFormulario(formulario);
console.log(errores);
// {
//   password: 'La contraseña debe tener al menos 8 caracteres',
//   telefono: 'El campo telefono es obligatorio',
//   terminos: 'Debes aceptar los términos y condiciones'
// }