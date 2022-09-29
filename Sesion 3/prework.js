//Crea una arrow function que un reciba mensaje y lo imprima en pantalla
mensaje = (mensaje = 'hola') => console.log(mensaje);

//Ahora asígnale una variable a esa función y mándala a llamar
const funcion = (mensaje = 'hola') => console.log(mensaje);
funcion();

//Transforma la siguiente función a arrow function asignada a una variable:
function suma(num1,num2){
    var resultado = num1 + num2;
    return resultado;
}

const resultado = (num1, num2) => num1 + num2;
console.log(resultado);

//Resultado?
function resta(num1, num2) {
    return num1 - num2;
  }
const total = resta(5, 2, 4, 2);
console.log(total); //3