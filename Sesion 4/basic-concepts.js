//Instrucciones sincronas
console.log('A');
console.log('B');

//Funcion asincrona - cuenta dos segundos hasta que termina el event loop (hilo unico)
setTimeout(function () {
    console.log('E');
}, 2000);

setTimeout(function () {
    console.log('F');
}, 4000);

console.log('C');

for (let i = 0; 0 <= 20000; i++)
{
    console.log(i);
}

console.log('D');
// A B C .... D ... E ... F(Event queue)