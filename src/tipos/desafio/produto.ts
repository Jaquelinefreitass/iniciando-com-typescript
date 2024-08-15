     //let produto: (: os dois pontos n é uma atribuição atribuição é (=) os dois pontos é para definir um tipo  )              
   //type Produto = CHAMA ELIAS
  // nome, desconto (0-1), função precoComDesconto
type Produto = {       
    nome: string;
    preco: number;
    desconto: number;
    precoComDesconto: () => number
}

 let produto: Produto = {
    nome: 'Sapato',
    preco: 15.95,
    desconto: 0.1,
    precoComDesconto(){
        return this.preco * (1 - this.desconto)
    }
}

console.log(produto.nome)
console.log(produto.preco)
console.log(produto.desconto)
console.log(produto.precoComDesconto())
