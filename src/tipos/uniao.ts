// EX: uma nota pode ser representada tanto apartir de um numero
// tanto apartir  de um conceito ( A+,b- ...)
let nota: number | string = 10
nota = 'A+'

console.log(nota)

type NotaOUConceitos = number | 'A' | 'B' | 'C'| 'D'| 'E'| 'F'

let n1: NotaOUConceitos = 7
n1 = 'C'

function imprimirNota(nota: NotaOUConceitos) { //checagem de tipos
    if(typeof nota === 'number') {
        console.log(`Nota ${nota}`)
    }else{
        console.log(`Conceito ${nota}`)
    }
}

n1 = 9.5
imprimirNota(n1)

