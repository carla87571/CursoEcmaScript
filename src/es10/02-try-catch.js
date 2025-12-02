try {
    hello ();
} catch (error) {
    console.log(error);
}

try {
    anotherFn();
} catch {
    console.log("esto es un error")
}


//Ejemplo de TRY CATCH, LLAMADAS A API(Fetch)
// E-commerce: Cargar productos desde una API
async function obtenerProductos() {
  try {
    const response = await fetch('https://api.mitienda.com/productos');
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const productos = await response.json();
    console.log('✅ Productos cargados:', productos);
    return productos;
    
  } catch (error) {
    console.error('❌ Error al cargar productos:', error.message);
    
    // Mostrar mensaje al usuario
    alert('No se pudieron cargar los productos. Intenta más tarde.');
    
    // Retornar array vacío como fallback
    return [];
  }
}

// Uso
obtenerProductos();

//PROCESAR PAGO (STRIPE/PAYPAL)
async function procesarPago(tarjeta, monto) {
  try {
    console.log('💳 Procesando pago...');
    
    // Validar tarjeta
    if (!tarjeta.numero || tarjeta.numero.length !== 16) {
      throw new Error('Número de tarjeta inválido');
    }
    
    if (!tarjeta.cvv || tarjeta.cvv.length !== 3) {
      throw new Error('CVV inválido');
    }
    
    // Simular llamada a API de pago
    const response = await fetch('https://api.stripe.com/v1/charges', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tarjeta, monto })
    });
    
    if (!response.ok) {
      throw new Error('Pago rechazado');
    }
    
    const resultado = await response.json();
    
    console.log('✅ Pago exitoso');
    return {
      exito: true,
      mensaje: 'Pago procesado correctamente',
      transaccionId: resultado.id
    };
    
  } catch (error) {
    console.error('❌ Error en el pago:', error.message);
    
    return {
      exito: false,
      mensaje: error.message
    };
  }
}

// Uso
const tarjeta = {
  numero: '4532123456789012',
  cvv: '123',
  expiracion: '12/25'
};

procesarPago(tarjeta, 99.99)
  .then(resultado => {
    if (resultado.exito) {
      alert('¡Pago exitoso!');
    } else {
      alert(`Error: ${resultado.mensaje}`);
    }
  });