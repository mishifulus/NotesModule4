/*const array = [1,2,3,4,5];
//const reverse = array.reverse(); -> forma vieja

const odd = array.findLast(x => x % 2 === 0);

console.log(odd);

//cambiar de version
//node -v
//install node@16
TARGETS: Para configurar la compatibilidad
IE: Para internet explorer
NODE: Para versiones de node*/

//const result = await Promise.resolve(5);

const person = {
    name: 'Jorge',
    address: null,
};

console.log(person.name);
console.log(person.address?.otracosa); //puede ser que exista => ?