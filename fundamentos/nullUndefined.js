let valor // declarado mas nao inicializada
console.log(valor)
valor = null // ausência de valor porém foi declarada, não aponta pra nenhum local de memória
console.log(null)

const produto = {}

console.log(produto.preco)
console.log(produto)

produto.preco = 32
console.log(produto)

produto.preco = undefined // evitar declarar undefined 
console.log(!!produto.preco)
delete produto.preco
console.log(produto)

produto.preco = null // sem preço

console.log(!!produto.preco)
console.log(produto)