/**
 * Scope es cuando yo puedo usar una variable dentro de una funcion o el codigo mismo
 * JS es un lenguaje interpretativo
 */

var name = "Pepito"; //Global variable = global scope

function printVariable()
{
    console.log(name);
}
printVariable();

function sum(a, b)
{
    function calculateSum(a,b)
    {
        let result = a + b; //Let tiene una scope de bloque, solo es accesible en la funcion, local scope
        //console.log(result);
        return result;
    }
    let result = calculateSum(a,b)
    return result;
}
//sum(1,2);
//console.log(result);
console.log(sum(1,2));

function sum2(a, b)
{
    let result;
    function calculateSum(a,b)
    {
        result = a + b; //Let tiene una scope de bloque, solo es accesible en la funcion, local scope
    }
    calculateSum(a,b)
    return result;
}
console.log(sum2(1,2));

