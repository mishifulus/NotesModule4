function isAdult(age)
{
    let result = do {
        if(age >= 18)
        {
            result = "You're an adult";
        }
        else
        {
            result = "You aren't an adult";
        }
    }
    
    return result;
}
const edad = Math.ceil(Math.random() * 100);
console.log('Edad: ', edad);
console.log(isAdult(edad));