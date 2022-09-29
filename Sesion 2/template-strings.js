const nombre = 'Mariano';
const nombre2 = 'Mariana';
const apellido = 'Guerra';
const isHombre = false;

//Revisa si es hombre, y regresa el nombre, sino, regresa el nombre2. Tambien le concatena el apellido
//Las comillas al reves son para detectar logica en un string
//La condicion interior es un operador ternario
console.log(`${isHombre ? nombre: nombre2} ${apellido}`);

/*if(isHombre === true)
{
    return nombre;
}
else
{
    return nombre2;
}*/

//Califica la primera condicion, si es true, hace el evento, sino no hace nada
// variableBoolean && eventoTrue