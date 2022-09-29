//! FETCH -> receives information or content of a web site with http protocol, make peticiones
//! is necessary use promises
//! the information is binary (1,0)

/*fetch("https://bedu.org").then(function (response) {
    console.log(response); //Respuesta en binario
});*/

//recibimimos la respuesta del servidor
fetch("https://bedu.org").then(function (response) {
    return response.text();
})
//cnvertimos el body de la respuesta en texto
.then(function (html) {
    console.log(html);
});
