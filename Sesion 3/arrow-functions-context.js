const person = {
    name: 'Jeffer',
    lastName: 'Miller',
    sayHi: function(){
        console.log('Hi, Im ',this.name);
    }
}

person.sayHi(); //El contexto pertenece a persona Im Jeffer
const holis = person.sayHi;
holis(); //Im undefined

const slowPerson = {
    name: 'Mauricio',
    lastName: 'Perez',
    sayHi: function ()
    {
        //console.log('THIS fuera de setTimeOut:', this);
        //const context = this;
        const { name } = this;
        setTimeout(function () {
           // console.log('THIS dentro de setTimeout:', context);

            console.log('Hi Im ', name);
        }, 2000);
    }
}
slowPerson.sayHi();

//Las arrow functions heredan el contexto de la funcion padre
const slowPerson2 = {
    name: 'Julian',
    lastName: 'Ortega',
    sayHi: function ()
    {
        setTimeout(() => {
            //console.log(this);
            console.log('Hi Im ', this.name);
        }, 2000);
    }
}
slowPerson2.sayHi();