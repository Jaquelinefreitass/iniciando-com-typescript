// contrutor = metodo chamado para construir uma classe e esse contrutor
// vc pode exigir um parametro
// readonly = se eu tenho um determinado atributo e ele n é para ser 
//alterado, com o readonly n preciso do get para acessar um atributo privado
// para ter a  tranquilidade de colocar um ID publico
class Curso {
    readonly id: number 
    public nome: string | undefined

    constructor(id: number) {
         this.id = id
         if(id < 1) throw new Error('Id inválido')
    }

}
// instancia a classe usando new, posso instanciar quantos curso quiser
const c1 = new Curso(123)
c1.nome = 'Iniciando com TypeScript'
console.log(c1.id)
console.log(c1.nome)

export {}