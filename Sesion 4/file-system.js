const fs = require('fs');

console.log('Leyendo el archivo...');

//la funcion anonima se ejecuta en el futuro
fs.readFile('basic-concepts.js', 'utf-8', function(err, text) {
    console.log('Archivo leido...');
    console.log(text);
});

console.log('Archivo en proceso...');

function readFilePromise(filename)
{
    return new Promise(function (resolve, reject)
    {
        fs.readFile(filename, 'utf-8', function (err, text)
        {
            if(err)
            {
                reject();
            }
            else
            {
                resolve(text);
            }
        });
    });
}

readFilePromise('basic-concepts.js')
    .then(function(text)
    {
        console.log(text);
    });