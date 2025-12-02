// Declaración de una clase
//class User {}

// Instancia de la clase
//const newUser = new User();

// Declaración e instanciación de una clase
// Clase con un método


class User {
    greeting() {
        return 'Hello';
    }
}
const user1 = new User();
console.log(user1.greeting()); // Hello
const developer = new User();
console.log(developer.greeting()); // Hello


// Clase con constructor
class UserWithConstructor {
    constructor() {
        console.log('Nuevo usuario');       
    }

greeting(){
    return 'Hello';
    }   
}

