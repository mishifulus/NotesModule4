//Debe usarse con funciones asincronas

function sayHi (name, f = function(){})
{
    const time = Math.round(Math.random() * 500);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(`Hi ${name} (${time/1000}seg)`);
            resolve();
        }, time)
    });
}

async function sayHiExecutation()
{
    await sayHi('Jorge'); //Para esperar a que se cumpla para poder continuar
    await sayHi('Gabriel');
    await sayHi('Joaquin');
    await sayHi('Alberto');
    sayHi('Karen');
}

sayHiExecutation();