export function updateImagen(url)
{
    //Toma la URL e ingresa la etiqueta imagen
    const container = document.getElementById('img-container');
    container.innerHTML = `<img src="${url}" class="img-fluid"/>`;
}

export function updateSelect(breeds)
{
    const select = document.getElementById('breeds');
    for (const breed of breeds)
    {
        //option
        const option = document.createElement('option');

        //nombre de la raza
        option.innerText = breed;

        //valor del option con la raza
        option.value = breed;

        select.append(option);
    }
}

