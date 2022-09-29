/**
 * VERSION JAVA
 * 
 * public class Person {
 *  private String name;
 *  private int age;
 * 
 *  public Person(String name, int age) {
 *      this.name = name;
 *      this.age = age;
 *  }
 * }
 * 
 * Person person = new Person("Gabriel", 20);
 * person.name; //error
 * person.getName(); //bien
 */

class Person {
    #name; //declarando propiedad privada

    constructor(name, age)
    {
        //this.name = name;
        this.#name = name;
        this.age = age;
    }

    getName()
    {
        return this.#name;
    }
}

const person = new Person('Gabriel', 20);
console.log(person.getName());