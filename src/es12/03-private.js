/*
📊 Tabla Resumen: Propiedades y Métodos
Tipo	            Sintaxis	    Acceso	        Ejemplo
Propiedad pública	this.nombre	 Desde fuera	    usuario.nombre
Propiedad privada	#edad	    Solo dentro de la clase	this.#edad
Método público	    greeting()	Desde fuera	usuario.greeting()
Método privado	    #encriptar()	Solo dentro de la clase	this.#encriptar()
Getter	            get edad()	Como propiedad	usuario.edad
Setter	            set edad(n)	Como propiedad	usuario.edad = 25
🎯 Ejemplo Real: Cuenta Bancaria
*/
//🎯 Ejemplo Real: Cuenta Bancaria
class CuentaBancaria {
  // Propiedades privadas
  #saldo;
  #numeroCuenta;
  #pin;
  
  constructor(titular, saldoInicial, pin) {
    this.titular = titular;
    this.#saldo = saldoInicial;
    this.#numeroCuenta = this.#generarNumeroCuenta();
    this.#pin = pin;
    this.transacciones = [];
  }
  
  // Método privado
  #generarNumeroCuenta() {
    return Math.random().toString().slice(2, 12);
  }
  
  // Método privado para verificar PIN
  #verificarPIN(pin) {
    return this.#pin === pin;
  }
  
  // Getter para saldo (oculto parcialmente)
  get saldo() {
    return `$${this.#saldo.toFixed(2).replace(/\d(?=\d{2})/g, '*')}`;
  }
  
  // Método público para ver saldo completo (requiere PIN)
  verSaldoCompleto(pin) {
    if (this.#verificarPIN(pin)) {
      return `$${this.#saldo.toFixed(2)}`;
    } else {
      return '❌ PIN incorrecto';
    }
  }
  
  // Depositar
  depositar(monto) {
    if (monto > 0) {
      this.#saldo += monto;
      this.transacciones.push({
        tipo: 'Depósito',
        monto,
        fecha: new Date(),
        saldo: this.#saldo
      });
      return `✅ Depósito exitoso: $${monto}`;
    }
    return '❌ Monto inválido';
  }
  
  // Retirar (requiere PIN)
  retirar(monto, pin) {
    if (!this.#verificarPIN(pin)) {
      return '❌ PIN incorrecto';
    }
    
    if (monto > this.#saldo) {
      return '❌ Saldo insuficiente';
    }
    
    if (monto > 0) {
      this.#saldo -= monto;
      this.transacciones.push({
        tipo: 'Retiro',
        monto,
        fecha: new Date(),
        saldo: this.#saldo
      });
      return `✅ Retiro exitoso: $${monto}`;
    }
    
    return '❌ Monto inválido';
  }
  
  // Transferir
  transferir(monto, cuentaDestino, pin) {
    const resultado = this.retirar(monto, pin);
    if (resultado.includes('✅')) {
      cuentaDestino.depositar(monto);
      return `✅ Transferencia exitosa: $${monto} a ${cuentaDestino.titular}`;
    }
    return resultado;
  }
  
  // Ver información
  mostrarInfo() {
    return `
╔════════════════════════════════════
║ 🏦 Cuenta Bancaria
║────────────────────────────────────
║ Titular: ${this.titular}
║ Número: *******${this.#numeroCuenta.slice(-3)}
║ Saldo: ${this.saldo}
║ Transacciones: ${this.transacciones.length}
╚════════════════════════════════════`;
  }
}

// Crear cuentas
const cuenta1 = new CuentaBancaria('Ana García', 1000, '1234');
const cuenta2 = new CuentaBancaria('Pedro López', 500, '5678');

// Ver información
console.log(cuenta1.mostrarInfo());

// Depositar
console.log(cuenta1.depositar(500));
// ✅ Depósito exitoso: $500

// Ver saldo (oculto)
console.log(cuenta1.saldo);
// $*****.00

// Ver saldo completo (con PIN)
console.log(cuenta1.verSaldoCompleto('1234'));
// $1500.00

console.log(cuenta1.verSaldoCompleto('0000'));
// ❌ PIN incorrecto

// Retirar
console.log(cuenta1.retirar(200, '1234'));
// ✅ Retiro exitoso: $200

// Transferir
console.log(cuenta1.transferir(300, cuenta2, '1234'));
// ✅ Transferencia exitosa: $300 a Pedro López

console.log(cuenta1.verSaldoCompleto('1234'));
// $1000.00

console.log(cuenta2.verSaldoCompleto('5678'));
// $800.00

// Ver transacciones
console.log(cuenta1.transacciones);