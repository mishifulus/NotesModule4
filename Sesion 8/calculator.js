//ES MODULES
//export function sum(a,b){...}

//Common JS
exports.sum = function(a,b)
{
    if(typeof a !== "number" || typeof b !== "number")
    {
        return NaN;
    }
    return a + b;
}

exports.subs = function(a,b)
{
    if(typeof a !== "number" || typeof b !== "number")
    {
        return NaN;
    }
    return a - b;
}