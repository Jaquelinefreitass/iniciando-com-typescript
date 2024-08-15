const Erros = {
    NOME_NULO: 'nome_nulo',
    EMAIL_NÃO_ENCONTRADO: 'email_não_encontrado',
    URL_iNVALIDA: 'url_invalida'
} as const

let erro: string
erro = Erros.NOME_NULO
erro = 'cpf_invalido'

console.log(erro)