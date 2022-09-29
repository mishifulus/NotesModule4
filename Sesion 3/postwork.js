//! Deep Comparison
function deepEqual(a, b) {
    if (a === b) return true;
  
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;
  
    let keysA = Object.keys(a), keysB = Object.keys(b);
  
    if (keysA.length !== keysB.length) return false;
  
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
  
    return true;
}
console.log(deepEqual(obj, obj)); // true

console.log(deepEqual(obj, { here: 1, object: 2 })); // false

console.log(deepEqual(obj, { here: { is: "an" }, object: 2 })); // true

const listOfUsers = ['Juan', 'Renata', 'Gonzalo'];

function arrayToList(arr)
{
    let list = {};
    for (let e = arr.length - 1; e >= 0; e--)
    {
        console.log('LISTA: ', list);
        list = {
            valor: arr[e],
            ref: list
        };
    }
    return list;
}

console.log(arrayToList(listOfUsers));
/**
 * LISTA:  { valor: 'Renata', ref: { valor: 'Gonzalo', ref: {} } }
{
  valor: 'Juan',
  ref: { valor: 'Renata', ref: { valor: 'Gonzalo', ref: {} } }
}
 */