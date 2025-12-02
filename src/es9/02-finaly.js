/*
Resumen: ¿Cuándo usar Promesas?
Caso de Uso	Ejemplo
Llamadas a APIs	Fetch de productos, usuarios
Autenticación	Login, registro, verificación
Operaciones asíncronas	Subir archivos, procesar pagos
Base de datos	Guardar, actualizar, consultar
Notificaciones	Emails, SMS, push notifications
Múltiples operaciones	Promise.all() para cargar varias cosas
Las Promesas son esenciales en cualquier app moderna que necesite esperar respuestas (APIs, DB, archivos, etc.) 🚀

*/ 


const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Whoops!');
        }
    });
}

anotherFunction()
    .then(response => console.log(response)) // Hey!
    .catch(err => console.log(err))
    .finally(() => console.log('Finalizó la ejecución')); // Finalizó la ejecución 




// E-COMMERCE- PROCESO DE COMPRA CON PROMESAS Y FINALLY
// Simular el proceso completo de una compra
function procesarCompra(carrito, tarjeta) {
    return new Promise((resolve, reject) => {
        console.log('⏳ Procesando compra...');
        
        // Simular validación (2 segundos)
        setTimeout(() => {
            const total = carrito.reduce((sum, item) => sum + item.precio, 0);
            
            if (tarjeta.saldo >= total) {
                resolve({
                    mensaje: '✅ Compra exitosa',
                    total: total,
                    ordenId: Math.floor(Math.random() * 10000)
                });
            } else {
                reject('❌ Saldo insuficiente');
            }
        }, 2000);
    });
}

// Uso
const miCarrito = [
    { nombre: 'Laptop', precio: 999 },
    { nombre: 'Mouse', precio: 25 }
];

const miTarjeta = { saldo: 1500 };

procesarCompra(miCarrito, miTarjeta)
    .then(resultado => {
        console.log(resultado.mensaje);
        console.log(`Total: $${resultado.total}`);
        console.log(`Orden #${resultado.ordenId}`);
    })
    .catch(error => {
        console.log(error);
        console.log('Intenta con otra tarjeta');
    })
    .finally(() => {
        console.log('🔒 Conexión cerrada');
    });

// Salida:
// ⏳ Procesando compra...
// (espera 2 segundos)
// ✅ Compra exitosa
// Total: $1024
// Orden #7483
// 🔒 Conexión cerrada    

// SISTEMA DE NOTIFICACIONES DE COMPRAS
function enviarNotificacion(usuario, mensaje) {
    return new Promise((resolve, reject) => {
        console.log(`📧 Enviando notificación a ${usuario}...`);
        
        setTimeout(() => {
            // Simular fallo de red (10% de probabilidad)
            const fallaRed = Math.random() < 0.1;
            
            if (fallaRed) {
                reject('❌ Error de conexión. Reintenta más tarde.');
            } else {
                resolve({
                    mensaje: '✅ Notificación enviada',
                    destinatario: usuario,
                    timestamp: new Date().toLocaleString()
                });
            }
        }, 1500);
    });
}

// Uso
enviarNotificacion('ana@gmail.com', 'Tu pedido fue enviado')
    .then(resultado => {
        console.log(resultado.mensaje);
        console.log(`Enviado a: ${resultado.destinatario}`);
        console.log(`Hora: ${resultado.timestamp}`);
    })
    .catch(error => {
        console.log(error);
        // Agregar a cola de reintentos
    })
    .finally(() => {
        console.log('🔔 Proceso de notificación finalizado');
    });



    // EJEMPLO REAL COMPLETO: SISTEMA DE REGISTRO

    // Validar email
function validarEmail(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const emailExiste = email === 'ana@gmail.com'; // Simular DB
            
            if (emailExiste) {
                reject('❌ Este email ya está registrado');
            } else {
                resolve('✅ Email disponible');
            }
        }, 1000);
    });
}



// Enviar código de verificación
function enviarCodigo(email) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const codigo = Math.floor(100000 + Math.random() * 900000);
            console.log(`📧 Código enviado a ${email}: ${codigo}`);
            resolve(codigo);
        }, 1500);
    });
}

// Crear cuenta
function crearCuenta(datos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                mensaje: '✅ Cuenta creada exitosamente',
                userId: Math.floor(Math.random() * 10000)
            });
        }, 1000);
    });
}

// Proceso completo de registro
function registrarUsuario(email, password) {
    console.log('🚀 Iniciando registro...');
    
    validarEmail(email)
        .then(mensaje => {
            console.log(mensaje);
            return enviarCodigo(email);
        })
        .then(codigo => {
            console.log('✅ Código verificado');
            return crearCuenta({ email, password });
        })
        .then(resultado => {
            console.log(resultado.mensaje);
            console.log(`Tu ID de usuario es: ${resultado.userId}`);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            console.log('🏁 Proceso de registro finalizado');
        });
}

// Uso
registrarUsuario('pedro@gmail.com', 'Abc12345');


