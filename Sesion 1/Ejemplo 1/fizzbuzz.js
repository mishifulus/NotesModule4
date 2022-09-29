/**
 * CREAR UNA FUNCION QUE EVALUE NUMEROS DE 0 A 100
 * CON LAS SIGUIENTES :
 * 
 * SI EL NUMERO ES UN MULTIPLO DE 3 IMPRIMIR FIZZ
 * SI EL NUMERO ES UN MULTIPLO DE 5 IMPRIMIR BUZZ
 * SI EL NUMERO ES UN MULTITPLO DE 3 Y 5 IMPRIMIR EN PANTALLA FIZZBUZZ
 */

 function fizzBuzz(){
    for(let i = 0; i<= 100; i++){
        if(i == 0)
        {
            console.log(i);
        }
        else if(i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz ", i);
        }
        else if(i % 3 == 0){
            console.log("Fizz ", i);
        }
        else if(i % 5 == 0){
            console.log("Buzz ", i);
        }
        else{
            console.log(i);
        }
    }
}

fizzBuzz();