import * as apis from "./apis.js"; 
import './index.css';

fetch('https://bedu-dogs-api.herokuapp.com/breeds')
    .then(function (response){
        //console.log(response); //Respuesta con el estandar, headers y body
        return response.json();
    })
    .then(function ({data}) { //destructuring
        //console.log(data);
        apis.updateSelect(data);
    });

/*const url = 'https://bedu-dogs-api.herokuapp.com/breeds';
const getPokemons = async (url) => {
    try {
        const res = await fetch(url);
        if (res.status === 200) {
            const pokemons = res.json();
            console.log(pokemons);
        }

        if (res.status === 404)
        {}
    }
    catch (error)
    {

    }
}*/



const button = document.getElementById('get-image'); 
button.addEventListener('click', function() { //escucha el click y cuenta cuantos se dan
    //Obtengo la raza seleccionada
    const select = document.getElementById('breeds');

    //Consulto la imagen aleatoria de la raza seleccionada
    fetch(`https://bedu-dogs-api.herokuapp.com/breeds/${select.value}/images`)
    .then(function (response){
        return response.json();
    })
    .then(function ({data}) {
        // Actualizar la imagen en el HTML
        apis.updateImagen(data);
    });
});



