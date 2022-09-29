//! CALLBACK
// Es una funcion que se va a ejecutar en el futuro despues de determinada accion
function sayHi (name, f = function(){})
{
    const time = Math.round(Math.random() * 500); //Vuelve el resultado aleatorio
    setTimeout(function () {
        console.log(`Hi ${name} (${time/1000}seg)`);
        f();
    }, time)
}

//CALLBACKS HELL (anidacion de Callbacks) = poco amntenibles y complicados de modificar
sayHi('Joaquin', function() {
    sayHi('Alberto', function() {
        sayHi('Gabriel', function() {
            sayHi('Leonardo', function() {
                sayHi('Maria Jose', function(){
                    sayHi('Natalia');
                });
            });
        });
    });
});

//Funcion asincrona
$.ajax('url', {
    success: function(data) {

    }
})

