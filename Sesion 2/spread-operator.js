//SPREAT OPERATOR (...) 
//Problem = Make a copy of person object
//Here we are copying the REFERENCE, not only structure

const person = 
{
    name: "Citlalli",
    age: 28,
    lastName: "Lol",
    email: "citla@gmail.com",
    id: 1
}

const person2 = {...person}
//{
//    name: person.name,
//    age: person.age,
//    lastName: person.lastName,
//    email: person.email
//}

//const person2 = person; -> copy all the data
person2.name = 'Francisco';
person2.lastName = 'Sanchez';
person2.age = 40;
person2.email ='francisco@gmail.com';

console.log(person2,person);

const array1 = [1,2,3];
const array2 = [4,5,6];
const array3 = [7,8,9];
console.log(array1.concat(array2,array3));

const mergedArray = [0,...array1,...array2,...array3];
console.log(mergedArray);

//Problem: I want to pass indeterminated amount of parameters to a function
function sum(a,b,c,d,e)
{
    const _a = a || 0;
    const _b = b || 0;
    const _c = c || 0;
    const _d = d || 0;
    const _e = e || 0;
    // x || y   ->   if(x) {return x} else {return y};

    return _a + _b + _c + _d + _e;
}


let numbers = [];

function sum2(...numbers)
{
    let total = 0;
    for(let i = 0; i < numbers.length; i++)
    {
        total += numbers[i];
    }
    return total;
}

console.log(sum2(1,2,3)); //-> 6
console.log(sum2()); //->NaN
const sum_params = [1,2,3];
sum(sum_params);  //-> NO FUNCIONA
console.log(sum(...sum_params)); //-> 6

const set = new Set([1,1,1,2,2,3,3,4]);
const unique_values = [...set];
console.log(sum(...unique_values)); //-> 10

//-----------------------------
const persona =
{
    nombre: 'Mariano',
    apellido: 'Guerra',
    ciudad: 'Guanajuato',
    contacto: {mail: 'test@gmail.com'}
};

//Copia la referencia del arreglo y le agrega cosas
const nuevaPersona = {... persona/*, ciudad: 'Guadalajara'*/}  ///REALIZA UNA COPIA POR ENCIMA shallow copy
nuevaPersona.ciudad = 'Leon';
nuevaPersona.contacto.mail = 'mariano@gmail.com'; //cambiamos todos los objetos anidados, no solo el nuevo

console.log(persona);
console.log(nuevaPersona);

const clone = JSON.parse(JSON.stringify(persona)); //COPIAR TODO deep copy (pero las funciones no se copian)
clone.contacto.mail = 'deepCopy@test.com';
console.log(clone);


