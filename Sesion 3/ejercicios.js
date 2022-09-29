/**
 * 1. La función createTable recibe como parámetro
 * un arreglo de usuarios dónde cada uno tiene "id" y "name".
 * 
 *  Realizar la implementación para regresar un <table> de HTML con 
 *  la columna del ID y NOMBRE. 
 * 
 *  <table>
 *    <thead>
 *    </thead>
 *    <tbody>
 *    </tbody>
 *  </table>
 */

function createTable(users)
{
    let html = 
    `<table>
        <thead>
            <th>ID</th>
            <th>Nombre</th>
        </thead>
        <tbody>
            ${users.map(({id,name}) => `
            <tr>
                <td>${id}</td>
                <td>${name}</td>
            </tr>`).join('\n')}
        </tbody>
    </table>
    `;

    return html;

}

console.log('Tabla de usuarios: ',createTable([
    {
        id: 1,
        name: 'Jorge'
    },
    {
        id: 2,
        name: 'Francisco'
    }
]));

/**
 * 2. La función minMax recibe un arreglo de números.
 * 
 *  Realizar la implementación para regresar en un objeto el número
 *  mínimo y el número máximo.
 */

function minMax(array)
{
    let max = 0;
    let min = 0;
    for(let number of array)
    {
        max = number > max ? number : max;
        min = number < min ? number : min;
        //min: Math.min(...array),
        //max: Math.max(...array)
    }
    return {
        min: min, max: max
    }
}

console.log('Maximo y minimo: ', minMax([1,2,3,-100]));


/**
 * 3. La función unique recibe un arreglo de números.
 * 
 * Realizar la implementación para regresar los elementos únicos del arreglo.
 */

function unique(array)
{
    const set = new Set(array);
    return [...set];
}

console.log('Areglo con numeros unicos: ',unique([1,1,1,2,2,2,3,3,3,3,4,4,5,5,6]));