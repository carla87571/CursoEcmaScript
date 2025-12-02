// enhanced object literals
function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    };
}
console.log(newUser('carla', 28, 'PE', 1)); // {user: "carla", age: 28, country: "PE", id: 1}   


const nombre = "Andres"// nombre: nombre
const edad = 23
const esteEsUnID = 1

const objeto = {
    nombre, 
    edad,
    id: esteEsUnID
}

console.log(objeto); // { nombre: 'Andres', edad: 23, id: 1 }