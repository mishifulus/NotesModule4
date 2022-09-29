function reverseArray(arreglo)
{
    let resultado = [];
    for(let i = arreglo.length - 1; i >= 0; i-- )
    {
        resultado.push(arreglo[i]);
    }
    return resultado
}

function reverseArrayInPlace(arreglo)
{
    for (let i = 0; i < Math.floor(array.length / 2); i++)
    {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}

console.log(reverseArray(["A", "B", "C"])); // ["C", "B", "A"]

let array = [1, 2, 3, 4, 5];
reverseArrayInPlace(array);
console.log(array); // [5, 4, 3, 2, 1]
