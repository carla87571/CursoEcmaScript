function newUser(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
} // forma tradicional de definir parámetros por defecto
newUser(); //oscar 32 MX
newUser('David', 12, 'CO'); //David 12 CO

// es6
function newAdmin(name = 'oscar', age = 32, country = 'MX') {
    console.log(name, age, country);
}
newAdmin(); //oscar 32 MX
newAdmin('David', 12, 'CO'); //David 12 CO
