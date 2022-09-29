//Funcion declaration
function sum(a,b)
{
    return a + b;
}

//Function expression with an annonymous function
const sum_expression = function (a,b){
    return a + b;
}

//New function expresion
const sum_af = (a,b) => {
    return a + b;
}

//Abreviation like lamdas
const sum_shorter = (a,b) => a + b;

//ECMAScript 5
const newArray = [1,2,3].map(function (entry) {
    return entry * 2;
})

const newArray2 = [1,2,3].map(function (entry) {
    console.log(entry);
    return entry * 2;
})

//ECMAScript 6 with arrow functions
const newArray_af = [1,2,3].map((entry) => entry * 2);

const newArray_af2 = [1,2,3].map((entry) => {
    console.log(entry);
    return entry * 2;
});

//! ARROW FUNCTIONS DUDAS

const heroes = ['Tony', 'Peter', 'Stephen', 'Bruce'];

//Sin arrow
heroes.map(function(name)
{
    console.log(name);
    //contexto global
});

//Con arrow (con fat arrow)
heroes.map((name)=> console.log(name)); //contexto del padre

//return declarado (no se deben usar operadores ternearios juntos)
const addLastName = heroes.map(name => {
    /*if(name === 'Tony')
    {
        return `${name} Stark`;
    }
    if(name === 'Peter')
    {
        return `${name} Parker`;
    }
    if(name === 'Stephen')
    {
        return `${name} Strange`;
    }
    else
    {
        return 'Unkown hero';
    }*/

    switch(name)
    {
        case 'Tony':
            return `${name} Stark`;
        case 'Peter':
            return `${name} Parker`;
        case 'Stephen':
            return `${name} Strange`;
        default:
            return 'Unkown hero';
    }
});
//Sin return regresa [undefined, undefined, undefined]
//El map siempre regresa un arreglo
console.log(addLastName); //[ 'Tony Stark', 'Peter Parker', 'Stephen Strange', 'Unkown hero' ]