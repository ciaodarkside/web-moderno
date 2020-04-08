// Object.preventExtesions
// não permite adicionar mais atributos ao objeto, mas permite excluir e modificar.
const produto = Object.preventExtensions({
    nome:'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível', Object.isExtensible(produto))


produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'

delete produto.tag

console.log(produto)




// Object.seal 
// não permite adicionar novos atributos nem exlcuir, mas permite modificar

const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)

console.log('Selado:', Object.isSealed(pessoa))

pessoa.nome = 'Caio'
delete pessoa.idade
pessoa.altura = 1.90
pessoa.idade = 22

console.log(pessoa)



// Object.freeze = selado + valores constates