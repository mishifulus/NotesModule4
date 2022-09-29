/**
 * public class Dog
 * {
 *  private String NAME;
 *  private String breed;
 * }
 * 
 * public Dog(String name, String bread)
 * {
 *  this.name = name;
 *  this.breed = breed;
 * }
 * 
 * public String barkYourName()
 * {
 *  String name = "Another name";
 *  System.out.println("Woof " + this.name)
 * }
 */

function barkYourName()
{
    console.log("Woof", this.name);
}

const dog =
{
    name: 'Dinky',
    breed: 'Electrico',
    barkYourName : barkYourName
}
dog.barkYourName();

const dogv2 =
{
    name: 'Dinky',
    breed: 'Electrico',
    barkYourName2 : function()
    {
        console.log("Woof", this.name);
    }
}
globalThis.name = "Firulais"
const barkYourName2 = dogv2.barkYourName2;

dog.barkYourName2();
barkYourName2();

//In java "this" takes the value of the object that invokes the function
