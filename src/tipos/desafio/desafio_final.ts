// type ContaCorrente (numero, saldo, movimentar)
type ContaCorrente = {
    numero: number
    saldo: number
    movimentar: (valor: number) => void
}


// type Cliente (nome, email, contas[]) 

type Cliente = {
    nome: string
    email: string
    contas: ContaCorrente[]
}
function movimentar(this: ContaCorrente, valor: number) {
    this.saldo += valor
}

//const clientes: Cliente[] = [...]
const clientes: Cliente[] = [
    {
        nome: 'Ana',
        email: 'ana@gmail.com',
        contas: [
            { numero: 1234, saldo: 1000, movimentar, },
            { numero: 1236, saldo: 350.33, movimentar, },
        ],

    },
    {
        nome: 'Joao',
        email: 'jao@gmail.com',
        contas: [
            { numero: 3232, saldo: 670.12, movimentar, },
            { numero: 3000, saldo: 1398.89, movimentar, },
        ],

    },
]

// movimentarConta(numConta: number, valor: number)
 function movimentarConta(numConta: number, valor: number) {
    const conta = clientes.map(cli => {
         return cli.contas.find(cc => cc.numero === numConta)
    }).filter(c => c) [0]
    conta?.movimentar(valor)
 }
 function consultarSaldo(numConta: number): number | null {
    const conta = clientes.map(cli => {
         return cli.contas.find(cc => cc.numero === numConta)
    }).filter(c => c) [0]
    return conta?.saldo ?? null
 }

// console.log(...)

movimentarConta(3232, 678.90)
console.log(consultarSaldo(3232))

movimentarConta(1234, -678.90)
console.log(consultarSaldo(1234))