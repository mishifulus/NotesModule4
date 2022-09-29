function sayHi (name, f = function(){})
{
    const time = Math.round(Math.random() * 500);
    //Las promesas tienen dos posibilidades: se cumplen o no (resolve, reject)
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(`Hi ${name} (${time/1000}seg)`);
            resolve();
        }, time)
    });
}

/*sayHi('Jorge')
// THEN para especificar que se hace cuando se cumple
    .then(function ()
    {
        sayHi('Gabriel')
            .then(function() {
                sayHi('Joaquin');
            })
    }); */

sayHi('Jorge')
    .then(function ()
    {
        return sayHi('Gabriel');
    })
    .then(function ()
    {
        return sayHi('Joaquin');
    })
    .then(function ()
    {
        return sayHi('Karen');
    })
    .then(function ()
    {
        sayHi('Oscar');
    })
