//! CICLO FOR
//variable a iterar, condicion, frecuencia
let number = [];
for (let n = 1; n <= 5; n++)
{
    //console.log(n);
    number.push(n * 2);
}
console.log(number);

const arr = [1,2,3,4,5];
const result = arr.map((item) => item * 2); //MAP forzosamente recorre y transforma todos los elementos
console.log(result);

//! CICLO FOR OF
const numbers = [1,2,3,4,5];

//variable, arreglo a iterar
for(let number of numbers)
{
    if(number === 4) break;
    console.log(number);
}

//! CICLO FOR IN --- Solo para objetos
const obj =
{
    a:1, b:2, c:3
};

for (const propiedad in obj)
{
    console.log(`${propiedad}: ${obj[propiedad]}`);
    if(obj[propiedad] === 1)
    {
        console.log('Aqui esta el 1');
    }
}
