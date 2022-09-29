/**
 * Crear una funcion llamada capitalize
 * que dado un texto, convierta la primera letra de cada palabra
 * en mayuscula
 * 
 * const text = "Hola mundo";
 * capitalize(text); //Hola Mundo
 * 
 * El reto es utilizar el pipeline operator, es decir,
 * con programacion funcional
 * 
 * f(), f2(), f3()
 * 
 * f()
 *  |> f2
 *  |> f3
 */

//text.substring(1); => ola mundo
//text[0].toUpperCase(); => H
//text.split(' '); => [ 'hola', 'mundo' ]


function capitalize(text)
{
    return text.split(' ') |> mapear(^^);

}

function mapear(text)
{
    return text.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(' ');
}


const text = 'hola mundo estoy muy feliz';
console.log(capitalize(text));