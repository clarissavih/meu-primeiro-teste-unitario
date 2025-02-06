const mult = require('./mult') 

test('A função multiplicar deve retornar 4 ao mult 2 e 2', () => {
    expect(mult(2, 2)).toBe(4)
})