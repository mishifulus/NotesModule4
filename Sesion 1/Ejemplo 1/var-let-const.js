/**
 * VAR es una function-scope
 */

function isAdult(age)
{
    if(age >= 18)
    {
        var result = "is Adult";
    }
    else
    {
        var result = "is not Adult";
    }
    return result;
}

console.log(isAdult(18));

/**
 * LET y CONST es una constante de block-scope
 */

 function isAdult(age)
 {
    let result;
     if(age >= 18)
     {
        result = "is Adult";
     }
     else
     {
        result = "is not Adult";
     }
     return result;
 }
 
 console.log(isAdult(18));