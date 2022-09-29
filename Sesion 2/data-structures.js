//DATA STRUCTURES
//A way of storage data or information

//Map -> Diccionary of data, storage data associates with a key
const table = new Map();

table.set("my_key", "my_value");

const faketable = {};
faketable["192928929283"] = "Juliana Medina"

table.set("192928929283", "Juliana Medina"); //KEY -> VALUE
table.set("918293292", "Luis Medina");

function key(){}
table.set(key, []);
console.log(table.get(key)); //Estructura la llave, y luego la obtiene'

table.set("14/09/2022", new Date()); //It can save all types of value as key or value

//Asociando un valor a una funcion con map
function weirdKey(){

}
table.set(weirdKey, 9);
console.log(table.get(weirdKey));

//Set 
//is a collection of element with no duplicates and no order
//Note: Sets are case sensitive
const set = new Set([1,1,1,2,2,3,3]);
set.add(5); //I'm modifing the inner reference of set -> referencia interna
set.add(9);
set.add("Hola");
set.add(true);
set.add("HOLA")

console.log(set.values()); //Obtengo un iterable del conjunto, ya que no se puede acceder por orden o key
const uniques = [...set];
console.log(uniques); //Aqui usamos spread operator y lo convertimos en un array] (MAS RECOMENDABLE EL VALUES)

console.log(set);
// -> Set(7) { 1, 2, 3, 5, 9, 'Hola', true }

const arr = [1,2,3];
arr.push(5); //I'm modifing the inner reference of array -> referencia interna