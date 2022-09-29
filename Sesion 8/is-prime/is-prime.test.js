//More information about of matchers https://jestjs.io/docs/using-matchers
const {isPrime} = require('./is-prime');

describe('isPrime', () => {
    test('Non-prime numbers', () => {
        for(let i = 1; i <= 1000; i++)
        {
            const multiplicador = Math.ceil(Math.random() * 11) + 2;
            const random = Math.ceil(Math.random() * 1000000) + 2;
            expect(isPrime(multiplicador * random)).toBeFalsy();
        }
    });

    test('Prime numbers', () => {
        const cases = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

        for(const primeNumber of cases)
        {
            expect(isPrime(primeNumber)).toBeTruthy();
        }
    })

    //test con coverage: porcentaje de cuanto del codigo estamos probando
    //npm run test:coverage
});