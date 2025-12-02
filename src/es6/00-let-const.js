var lastName = "Davidson"; //declarar y asignar
lastName = "Smith";  //reasignar
console.log(lastName); // Smith

let fruit = "Apple"; //declarar y asignar
fruit = "Banana"; //reasignar
console.log(fruit); // Banana

const animal = "Dog"; //declarar y asignar
// animal = "Cat"; //reasignar (esto causará un error)
console.log(animal); // Dog

const ftuits = () => {
    if(true) {
        var fruit1 = "Apple"; //function scope
        let fruit2 = "Kiwi"; //block scope
        const fruit3 = "Banana"; //block scope
        console.log(fruit1); // Apple
        console.log(fruit2); // Kiwi
        console.log(fruit3); // Banana  
    }
}
fruits();

// console.log(fruit1); // Error: fruit1 is not defined
// console.log(fruit2); // Error: fruit2 is not defined
// console.log(fruit3); // Error: fruit3 is not defineds();