function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco *(1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 3000,
    desc: 0.15,
    getPreco
}


global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 40000, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// diferença entre o call e apply, é q dps do parametro do objeto, o call você passa direto, e no apply é uma lista.
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$']))
