const saludo = "      hola      "
const result1 = saludo.trim()
const result2 = saludo.trimStart()
const result3 = saludo.trimEnd()

result1 // 'hola'
result2 // 'hola      '
result3 // '      hola'


//LIMPIAR FORMULARIOS
//EJEMPLO REAL DE VALIDACIÓN DE LOGIN
// Usuario escribe con espacios accidentales
function validarLogin(email, password) {
  // Limpiar espacios al inicio y final
  const emailLimpio = email.trim();
  const passwordLimpia = password.trim();
  
  console.log(`Email original: "${email}"`);
  console.log(`Email limpio: "${emailLimpio}"`);
  
  // Validar
  if (emailLimpio === '' || passwordLimpia === '') {
    return 'Los campos no pueden estar vacíos';
  }
  
  return 'Login exitoso';
}

// Usuario escribe con espacios
console.log(validarLogin('  ana@gmail.com  ', '  123456  '));
// Email original: "  ana@gmail.com  "
// Email limpio: "ana@gmail.com"
// Login exitoso

console.log(validarLogin('     ', '   '));
// Los campos no pueden estar vacíos


//FORMATEAR TEXTO DE SALIDA
//  EJEMPLO REAL: GENERADOR DE RECIBOS/FACTURAS

function generarRecibo(items) {
  console.log('========== RECIBO ==========');
  
  items.forEach(item => {
    // Precio alineado a la derecha con espacios
    const precio = `$${item.precio.toFixed(2)}`;
    const precioFormateado = precio.padStart(10);
    
    // Si queremos quitar espacios del inicio
    const nombreSinEspacios = item.nombre.trimStart();
    
    console.log(`${nombreSinEspacios.padEnd(20)} ${precioFormateado}`);
  });
  
  console.log('============================');
}

generarRecibo([
  { nombre: '  Laptop', precio: 999.99 },
  { nombre: '  Mouse', precio: 25.50 },
  { nombre: '  Teclado', precio: 75.00 }
]);

// ========== RECIBO ==========
// Laptop                   $999.99
// Mouse                     $25.50
// Teclado                   $75.00
// ============================



//VALIDAR CAMPOS DE TARJETA DE CREDITO
function validarTarjeta(datos) {
  const errores = {};
  
  // Limpiar espacios
  const numero = datos.numero.trim().replace(/\s/g, '');
  const nombre = datos.nombre.trim();
  const cvv = datos.cvv.trim();
  
  // Validar número (16 dígitos)
  if (numero.length !== 16) {
    errores.numero = 'El número debe tener 16 dígitos';
  }
  
  // Validar nombre
  if (nombre === '') {
    errores.nombre = 'El nombre es obligatorio';
  }
  
  // Validar CVV (3 dígitos)
  if (cvv.length !== 3) {
    errores.cvv = 'El CVV debe tener 3 dígitos';
  }
  
  return {
    valido: Object.keys(errores).length === 0,
    errores,
    datos: { numero, nombre, cvv }
  };
}

// Usuario escribe con espacios
const tarjeta = {
  numero: '  4532 1234 5678 9012  ',
  nombre: '  ANA GARCIA  ',
  cvv: '  123  '
};

const resultado = validarTarjeta(tarjeta);
console.log(resultado);
// {
//   valido: true,
//   errores: {},
//   datos: {
//     numero: '4532123456789012',
//     nombre: 'ANA GARCIA',
//     cvv: '123'
//   }
// }