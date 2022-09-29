function sum(arreglo)
{
    let resultado = 0;
    for(let number of arreglo)
    {
        resultado += number;
    }
    console.log("Sumatoria: ");
    console.log(resultado);
}

function range(start, end, step)
{
    let arreglo = [];

    if(step === undefined)
    {
        //step = 1;
        //if(end<start)
        //{
        //    step = -1;
        //}
        step = start < end ? 1 : -1;
    }

    if(end < start && step > 0)
    {
        step = step * -1;
    }

    if (step>0)
    {
        for (let i = start; i <= end; i+=step)
        {
            arreglo.push(i);
        }
    }
    else
    {
        for (let i = start; i >= end; i+=step)
        {
            arreglo.push(i);
        }
    }
    console.log("Arreglo original: ")
    console.log(arreglo);
    return arreglo;
}

sum(range(0,10));
sum(range(0,10,2));
sum(range(10,0,-2));
sum(range(10,0,2));