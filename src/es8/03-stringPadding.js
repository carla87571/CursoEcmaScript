const string = 'Hello';

console.log(string.padStart(10, ' ')); // '     Hello'
console.log(string.padEnd(10, ' '));   // 'Hello     '

console.log(string.padStart(10, '*')); // '*****Hello'
console.log(string.padEnd(10, '-'));   // 'Hello-----'

const numberString = '12345';

console.log(numberString.padStart(10, '0')); // '0000012345'
console.log(numberString.padEnd(10, '0'));   // '1234500000'

// Ejemplo de uso práctico
// Generar números de factura con formato: FAC-0001, FAC-0002, etc.
function generarNumeroFactura(numero) {
  const numeroFormateado = numero.toString().padStart(4, '0');
  return `FAC-${numeroFormateado}`;
}

console.log(generarNumeroFactura(1));    // FAC-0001
console.log(generarNumeroFactura(42));   // FAC-0042
console.log(generarNumeroFactura(999));  // FAC-0999
console.log(generarNumeroFactura(1523)); // FAC-1523


// Ejemplo: Ocultar parte de un número de tarjeta
// Mostrar solo los últimos 4 dígitos
function ocultarTarjeta(numeroTarjeta) {
  const ultimos4 = numeroTarjeta.slice(-4);
  return ultimos4.padStart(16, '*');
}

console.log(ocultarTarjeta('4532123456789012')); 
// ************9012

console.log(ocultarTarjeta('5425233430109903'));
// ************9903




//Proyecto Real Completo: Sistema de Tickets
class SistemaTickets {
  constructor() {
    this.contadorTickets = 0;
  }

  generarTicket(cliente, producto, cantidad, precio) {
    this.contadorTickets++;
    const numeroTicket = this.contadorTickets.toString().padStart(5, '0');
    const fecha = new Date();
    const hora = this.formatearHora(fecha);
    
    console.log('\n' + '='.repeat(40));
    console.log('TICKET DE COMPRA'.padStart(28));
    console.log('='.repeat(40));
    console.log(`Nº: ${numeroTicket}`.padEnd(25) + `Fecha: ${fecha.toLocaleDateString()}`);
    console.log(`Hora: ${hora}`);
    console.log('-'.repeat(40));
    console.log(`Cliente: ${cliente}`);
    console.log('-'.repeat(40));
    
    const productoFormateado = producto.padEnd(20);
    const cantidadFormateada = `x${cantidad}`.padStart(5);
    const precioFormateado = `$${precio.toFixed(2)}`.padStart(10);
    
    console.log(productoFormateado + cantidadFormateada + precioFormateado);
    
    const total = cantidad * precio;
    console.log('-'.repeat(40));
    console.log('TOTAL:'.padEnd(25) + `$${total.toFixed(2)}`.padStart(10));
    console.log('='.repeat(40));
  }

  formatearHora(fecha) {
    const h = fecha.getHours().toString().padStart(2, '0');
    const m = fecha.getMinutes().toString().padStart(2, '0');
    const s = fecha.getSeconds().toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  }
}

const sistema = new SistemaTickets();
sistema.generarTicket('Ana García', 'Laptop Dell', 1, 899.99);
sistema.generarTicket('Pedro López', 'Mouse Logitech', 2, 25.50);

// ========================================
//             TICKET DE COMPRA
// ========================================
// Nº: 00001                Fecha: 11/29/2025
// Hora: 14:32:15
// ----------------------------------------
// Cliente: Ana García
// ----------------------------------------
// Laptop Dell             x1    $899.99
// ----------------------------------------
// TOTAL:                        $899.99
// ========================================