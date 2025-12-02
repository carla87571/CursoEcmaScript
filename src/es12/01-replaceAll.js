const string = 'JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web: JavaScript';
const replacedString = string.replaceAll('JavaScript', 'ECMAScript');
console.log(replacedString);
// 'ECMAScript es maravilloso, con ECMAScript puedo crear el futuro de la web: ECMAScript'      

const string2 = 'JavaScript es maravilloso';
const replacedString2 = string2.replaceAll(' ', '-');
console.log(replacedString2);
// 'JavaScript-es-maravilloso'

const mensaje = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web."

mensaje.replace("JavaScript", "Python")
// 'Python es maravilloso, con JavaScript puedo crear el futuro de la web.'

mensaje.replaceAll("JavaScript", "Python")
// 'Python es maravilloso, con Python puedo crear el futuro de la web.'

mensaje.replaceAll(/a/g, "*")
// 'J*v*Script es m*r*villoso, con J*v*Script puedo cre*r el futuro de l* web.'