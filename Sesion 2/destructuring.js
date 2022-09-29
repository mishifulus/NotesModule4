//DESTRUCTURING -> Forma de obtener propiedades y almacenarlas en variables de un bobjeto o arreglo

const numbers = [1,2,3]

const person = 
{
    name: "Citlalli",
    age: 28,
    lastName: "Lol"
}

const info = 
{
    address: "Mi casita",
    city: "Leon"
}

const dog =
{
    name: 'Dinky',
    breed: 'Eectrico',
    age: '8',
    bark:function ()
    {
        console.log('Woof!');
    }
}

//Forma vieja: crear manualmente variables para cada objeto
const name = dog.name;
const breed = dog.breed;

//Forma nueva
const {name: dogName, dogBreed, ...rest} = dog;
console.log(dogName);
console.log(dogBreed);
console.log(rest); //Extrae todo lo que resta del objeto

//Arreglos
const arreglo = [1,2,3,4,5];
const [first, seccond, ...everything_else] = arreglo;

console.log(first);
console.log(seccond);
console.log(everything_else);

//ECMAScript 5
//const name = person.name;
//const lastName = person.lastName;
//const personaAge = person.age;

//const index0 = numbers[0];
//const index1 = numbers[1];

//ECMAScript 6
//const {name, lastName, age} = person;

//const [position0, position1] = numbers;

//El destructuring tambien puede aplicar a los parametros
//Vieja
function sayHi1(person, info)
{
    console.log("Hi, my name is " + person.name + " and I'm " + person.age + " years old");
    console.log("Yo vivo en " + info.address);
} 
sayHi1(person, info);

//Nueva
function sayHi2({name, age}, {address}) //Obtenemos solo estos parametros de todo el objeto recibido
{
    console.log("Hi, my name is " + name + " and I'm " + age + " years old");
    console.log("Yo vivo en " + address);
}
sayHi2(person, info);
