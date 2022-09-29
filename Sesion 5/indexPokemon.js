fetch('https://bedu-pokemon-api.herokuapp.com/pokemon')
    .then(function (response){
        return response.json();
    })
    .then(function ({data}) { 
        updateSelect(data);
        console.log(data);
    });

function updateSelect(pokemons)
{
    const select = document.getElementById('pokemons');
    for (const pokemon of pokemons)
    {
        const option = document.createElement('option');
    
        option.innerText = pokemon.name;
    
        option.value = pokemon.number;
    
        select.append(option);
    }
}

const button = document.getElementById('get-image'); 
button.addEventListener('click', function() { 
    const select = document.getElementById('pokemons');

    fetch(`https://bedu-pokemon-api.herokuapp.com/pokemon/${select.value}`)
    .then(function (response){
        return response.json();
    })
    .then(function ({data}) {
        updateImagen(data.artwork);
        const datos = new Map();
        datos.set('number', data.number);
        datos.set('name', data.name);
        datos.set('types', data.types);
        datos.set('sprite', data.sprite);
        updateData(datos);
    });
});

function updateImagen(url)
{
    const container = document.getElementById('img-container');
    container.innerHTML = `<img src="${url}" class="img-fluid"/>`;
}

function updateData(map)
{
    console.log(map);
    const container = document.getElementById('info-container');
    container.innerHTML = `<p class="text-dark fs-4">Numero:</p><p class="text-primary fs-4">${map.get('number')}</p>\n
    <p class="text-dark fs-4">Nombre:</p><p class="text-primary fs-4">${map.get('name')}</p>\n
    <p class="text-dark fs-4">Tipos:</p><p class="text-primary fs-4">${map.get('types')}</p>\n
    <img src="${map.get('sprite')}" class="img-fluid"/>`;
}