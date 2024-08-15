// null = se passar um email diferente dos cadastrado n vai conseguir 
// retornar um usuario,por isso tem q colocar assim Usuario | null
// que significa ou retorno um usuario ou retorno nulo
// para retornar um valor = na liste de usuario tem um metodo
// chamado (find) nele vc testa  cada usuario, email === para 
// cada usuario é igual o que foi passado por parametros se for 
// se for ele retorna um usuario, o METODO FIND  pode retornar duas possibilidade
// Usuario ou undefined quando ele n encontra ele retorna undefined
// para vc deixar null em vez de undefined coloca assim (?? null)
//assim eu tenho a possibilidade de retornar um usuario ou null,
//Então é muito importante o uso do null porque ele é uma forma de vc 
// retornar algo opcional ou seja vou tenta retornar um usuario mas n é 
// garantido q ele seje retornado ai coloco o null
type Usuario = { nome: string; email: string }

const usuarios: Usuario[] = [
    { nome: 'Joao', email: 'joao@gmail.com' },
    { nome: 'Pedro', email: 'pedro@gmail.com' },
    { nome: 'Maria', email: 'maria@gmail.com' },
    { nome: 'Jose', email: 'jose@gmail.com' },
    { nome: 'Paulo', email: 'paulo@gmail.com' },
    { nome: 'Ana', email: 'ana@gmail.com' },
]

function buscarPorEmail(email: string): Usuario |null {
    return usuarios.find(u => u.email === email) ?? null
}

console.log(buscarPorEmail('ana@gmail.com'))
console.log(buscarPorEmail('maria@gmail.com'))
console.log(buscarPorEmail('mari@gmail.com'))