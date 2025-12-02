/*
Qué es el Operador ??  ?
El operador ?? retorna el valor de la derecha solo si el
 de la izquierda es null o undefined.
*/

// DIFERENCIA CON || (OR LÓGICO)
// Con || (OR lógico)
const valor1 = 0 || 'default';
console.log(valor1); // 'default' ❌ (0 es falsy)

const valor2 = '' || 'default';
console.log(valor2); // 'default' ❌ ('' es falsy)

// Con ?? (Nullish Coalescing)
const valor3 = 0 ?? 'default';
console.log(valor3); // 0 ✅ (0 es válido)

const valor4 = '' ?? 'default';
console.log(valor4); // '' ✅ ('' es válido)

const valor5 = null ?? 'default';
console.log(valor5); // 'default' ✅ (null no es válido)



//6.- API RESPONSE CON DATOS OPCIONALES
// Procesar respuesta de API
async function obtenerUsuario(id) {
  const response = await fetch(`https://api.miapp.com/usuarios/${id}`);
  const data = await response.json();
  
  return {
    id: data.id,
    nombre: data.nombre ?? 'Usuario',
    email: data.email,
    edad: data.edad ?? null,
    pais: data.pais ?? 'No especificado',
    foto: data.foto ?? 'default-avatar.png',
    seguidores: data.seguidores ?? 0,  // 0 es válido
    verificado: data.verificado ?? false
  };
}

// Respuesta de API incompleta
const apiResponse = {
  id: 123,
  nombre: 'Ana',
  email: 'ana@gmail.com',
  seguidores: 0  // ← Usuario nuevo (0 seguidores)
};

const usuario = {
  id: apiResponse.id,
  nombre: apiResponse.nombre ?? 'Usuario',
  email: apiResponse.email,
  edad: apiResponse.edad ?? null,
  pais: apiResponse.pais ?? 'No especificado',
  foto: apiResponse.foto ?? 'default-avatar.png',
  seguidores: apiResponse.seguidores ?? 0,
  verificado: apiResponse.verificado ?? false
};

console.log(usuario);
// {
//   id: 123,
//   nombre: 'Ana',
//   email: 'ana@gmail.com',
//   edad: null,
//   pais: 'No especificado',
//   foto: 'default-avatar.png',
//   seguidores: 0,  // ✅ Respeta el 0
//   verificado: false
// }


// 2. Promise.allSettled() - ESPERA A TODOS
// Ejemplo Real: Enviar Notificaciones (No importa si algunas fallan)
// Sistema de notificaciones: Enviar por Email, SMS y Push
async function enviarNotificaciones(usuario, mensaje) {
  console.log('📤 Enviando notificaciones...');
  
  const resultados = await Promise.allSettled([
    enviarEmail(usuario.email, mensaje),
    enviarSMS(usuario.telefono, mensaje),
    enviarPush(usuario.id, mensaje)
  ]);
  
  // Procesar resultados
  console.log('\n📊 Resultados:');
  resultados.forEach((resultado, index) => {
    const tipo = ['Email', 'SMS', 'Push'][index];
    
    if (resultado.status === 'fulfilled') {
      console.log(`✅ ${tipo}: Enviado exitosamente`);
    } else {
      console.log(`❌ ${tipo}: Falló - ${resultado.reason}`);
    }
  });
  
  // Contar exitosos
  const exitosos = resultados.filter(r => r.status === 'fulfilled').length;
  console.log(`\n📈 Total: ${exitosos}/3 notificaciones enviadas`);
}

// Funciones auxiliares (simuladas)
function enviarEmail(email, mensaje) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email) {
        resolve('Email enviado');
      } else {
        reject('Email no válido');
      }
    }, 1000);
  });
}

function enviarSMS(telefono, mensaje) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simular fallo (sin saldo)
      reject('Sin saldo para enviar SMS');
    }, 800);
  });
}

function enviarPush(userId, mensaje) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        resolve('Push enviado');
      } else {
        reject('Usuario sin dispositivo');
      }
    }, 600);
  });
}

// Uso
const usuario1 = {
  id: 123,
  email: 'ana@gmail.com',
  telefono: '5512345678'
};

enviarNotificaciones(usuario, '¡Tu pedido fue enviado!');

// Salida:
// 📤 Enviando notificaciones...
// 
// 📊 Resultados:
// ✅ Email: Enviado exitosamente
// ❌ SMS: Falló - Sin saldo para enviar SMS
// ✅ Push: Enviado exitosamente
// 
// 📈 Total: 2/3 notificaciones enviadas






const anotherNumber = 1;
const validate = anotherNumber ?? 5;
console.log(validate); // 1

const nullish = null;
const validateNullish = nullish ?? 'Es nulo o undefined';
console.log(validateNullish); // 'Es nulo o undefined'

const undefinedValue = undefined;
const validateUndefined = undefinedValue ?? 'Es nulo o undefined';
console.log(validateUndefined); // 'Es nulo o undefined'
