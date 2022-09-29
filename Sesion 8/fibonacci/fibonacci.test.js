const { fibonacci } = require('./fibonacci');

describe('fibonacci', () => {
    test('fibo(1) = 1', () => {
        expect (fibonacci(1)).toBe(1);
    });

    test('fibo(2) = 1', () => {
        expect (fibonacci(2)).toBe(1);
    });

    test('fibo(n) = fibo(n-1) + fibo(n-2)', () => {
        expect (fibonacci(3)).toBe(2);
        expect (fibonacci(4)).toBe(3);
        expect (fibonacci(5)).toBe(5);
    });

    test('fibo(negative) = NaN', () => {
        const random = -1 * Math.ceil(Math.random() * 1000000);
        expect(fibonacci(random)).toBeNaN();
    });
})