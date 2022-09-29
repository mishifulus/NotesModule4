function sum(a = 0,b = 0)
{
    return a + b;
}

console.log(sum(0)); //undefined -> 0
console.log(sum(10)); //undefined - > 10

function map(array = [], funcion = function(x){return x;}) //funcion null provoca errores
{
    let newArray = [];
    for (let entry of array)
    {
        newArray.push(funcion(entry));
    }
    return newArray;
}

const newArray = map([1,2,3], function (entry) {return entry * 3;});

console.log(newArray);

const misteryArray = map([1,2,3]); 

console.log(misteryArray); //[undefined, undefined, undefined]

//! DEFAULT PARAMETERS DUDAS
function getName(name = 'Mariano')
{
    console.log('name: ', name);
    
}
getName();

function getName2(arr = []) //no itera nada, pero no truena
{
    const res = arr.map((el) => el * 2);
    console.log('name: ', res);
}
getName2();