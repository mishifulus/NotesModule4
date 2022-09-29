//! REST PARAMETER DUDAS
const listOfUsers = ['Juan', 'Renata', 'Gonzalo'];

function printNames(nombre, ...users) //Cuando no se cuantos parametros voy a recibir
{
    console.log(nombre); //Juan [ 'Renata', 'Gonzalo' ]
    console.log(users);
    const [nombre1, nombre2, ...info] = users;
    console.log(nombre2, info); // Gonzalo [ 'Trabajadores' ]
}
printNames(listOfUsers); //[ [ 'Juan', 'Renata', 'Gonzalo' ] ] anida los arreglos porque el operador rest crea un arreglo
printNames('Juan', 'Renata', 'Gonzalo', 'Trabajadores'); //[ 'Juan', 'Renata', 'Gonzalo' ]