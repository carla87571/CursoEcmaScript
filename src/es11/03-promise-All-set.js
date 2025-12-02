/*
🎯 Diferencia Clave:
Método	                 Comportamiento	                Analogía
Promise.all()	        Si UNA falla, TODO falla	    Si un estudiante reprueba, TODO el grupo reprueba
Promise.allSettled()	Espera a TODAS (fallen o no)	Espera a que TODOS los estudiantes terminen el examen
*/

// 1. Promise.all() - TODO O NADA
//Ejemplo Real: Cargar Dashboard (Debe cargarse TODO)

// Sistema de dashboard: NECESITAS todos los datos para mostrar la página
async function cargarDashboard() {
  try {
    console.log('⏳ Cargando dashboard...');
    
    const [usuario, productos, notificaciones] = await Promise.all([
      fetch('https://api.miapp.com/usuario').then(r => r.json()),
      fetch('https://api.miapp.com/productos').then(r => r.json()),
      fetch('https://api.miapp.com/notificaciones').then(r => r.json())
    ]);
    
    console.log('✅ Dashboard cargado completamente');
    console.log('Usuario:', usuario);
    console.log('Productos:', productos);
    console.log('Notificaciones:', notificaciones);
    
  } catch (error) {
    console.error('❌ Error: No se pudo cargar el dashboard');
    console.error('Alguna API falló:', error);
    // Mostrar página de error
  }
}

// Si UNA API falla, TODO falla
cargarDashboard();









const promise1 = new Promise((resolve, reject) => reject("reject 1"));
const promise2 = new Promise((resolve, reject) => resolve("resolve 2"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 3"));

// Usando Promise.allSettled para manejar todas las promesas 
Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(`Promise ${index + 1} cumplida con valor: ${result.value}`);
      } else {
        console.log(`Promise ${index + 1} rechazada con razón: ${result.reason}`);
      }
    });
  });

// Salida esperada:
// Promise 1 rechazada con razón: reject 1
// Promise 2 cumplida con valor: resolve 2
// Promise 3 cumplida con valor: resolve 3
            
           