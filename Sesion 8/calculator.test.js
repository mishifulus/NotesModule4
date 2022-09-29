//ES MODULES
//import {sum} from './calculator'

//Common JS
const {sum} = require('./calculator');

//Sirve para agrupar pruebas
describe('Testing sum function', () =>  {
    test('0 + 0 = 0', () => {
        //Esperaria que o mas 0 fuera 0
        expect(sum(0,0)).toBe(0);
    }); 

    test('n + 0 = n', () => {
        expect(sum(10,0)).toBe(10);
    }); 

    test('0 + m = m', () => {
        const random = Math.ceil(Math.random() * 100000);
        expect(sum(0,random)).toBe(random);
    }); 

    test('negative numbers', () => {
        const random1 = -1 * Math.ceil(Math.random() * 100000);
        const random2 = -1 * Math.ceil(Math.random() * 100000);
        expect(sum(random1,random2)).toBeLessThan(0);
    });

    test('strings', () => {
        expect(sum("0","1")).toBeNaN();
    }); 
});

