const sub = require('./sub')

test('A função subtração deve retornar 0 ao soma 1 e 1', () => {
    expect(sub(1, 1)).toBe(0)
})
