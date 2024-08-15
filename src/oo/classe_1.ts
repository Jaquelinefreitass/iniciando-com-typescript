// ter um atributo public faz com que vc consiga através da
// anotação (.) acessar diretamente esses atributos tanto para modificar linha 7 quanto para ler linha 9
// modificadores de acesso = private | public => específico do Ts
class Curso {
    private _id: number | undefined
    public nome: string | undefined

    // metodo para ler console.log(c1.id)
    get id() {
        return this._id
    }

    //metodo para alterar o ID 
    set id(id: number | undefined) {
        if ((id ?? 0) > 0) {
            this._id = id
        }

    }
}
// instancia a classe usando new, posso instanciar quantos curso quiser
const c1 = new Curso()
c1.id = 123
c1.nome = 'Iniciando com TypeScript'
console.log(c1.id)
console.log(c1.nome)

// exportando o obj em vazio tranforma o arquivo em módulo
// o módulo está dentro de um escopo e ele n vai reclamar
// podendo usar o módulo isolado da aplicação
export {}