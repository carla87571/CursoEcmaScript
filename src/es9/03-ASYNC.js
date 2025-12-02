/*
¿Por qué usar esto?
✅ Cuando tienes muchos datos y no quieres cargarlos todos de golpe
✅ Cuando quieres control total de cuándo obtener el siguiente elemento
✅ Cuando trabajas con streams de datos (ej: leer archivos grandes)

En resumen: Es como tener una máquina que te da cosas de una en una cuando tú quieras, en lugar de darte todo junto y romper tu computadora 🎮
*/ 


// Generador asíncrono
//eJEMPLO rEAL (MÁS FÁCIL)
// Imagina una aplicación de fotos

async function* cargarFotos() {
  yield await Promise.resolve('📸 Foto 1')
  yield await Promise.resolve('📸 Foto 2')
  yield await Promise.resolve('📸 Foto 3')
}

const galeria = cargarFotos()

// Cargas una foto a la vez (para no saturar la memoria)
galeria.next().then(foto => console.log(foto.value))  // 📸 Foto 1
galeria.next().then(foto => console.log(foto.value))  // 📸 Foto 2
galeria.next().then(foto => console.log(foto.value))  // 📸 Foto 3




// Otro ejemplo: Generador asíncrono simple
async function* anotherGenerator() {
  yield await Promise.resolve(1)
  yield await Promise.resolve(2)
  yield await Promise.resolve(3)
}

const generador = anotherGenerator()
generador.next().then(respuesta => console.log(respuesta.value))
generador.next().then(respuesta => console.log(respuesta.value))
generador.next().then(respuesta => console.log(respuesta.value))

async function forAwait() {
  const nombres = ["Alexa", "Oscar", "David"]
  for await (let valor of nombres) {
    console.log(valor)
  }
}

forAwait()

