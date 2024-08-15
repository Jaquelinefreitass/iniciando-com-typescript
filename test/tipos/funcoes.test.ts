import { multiplicar, multiplicarPerigosa, saudacao } from "../../src/tipos/funcoes"

test('Deve retornar uma saudação baseada na hora atual', () =>{
    const s = saudacao('Jaque')
    expect(s).toBe('Olá Jaque! Passar bem!')
})

test('Deve multiplicar dois números', () => {
    const resultado = multiplicar(4, 5)
    expect(resultado).toBe(20)
})

test('Deve retornar NaN COM PARAMETRO DO TIPO string', () => {
    const resultado = multiplicarPerigosa("a", 5)
    expect(resultado).toBeNaN()
})