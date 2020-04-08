// coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,

    propietario:{
        nome:'Caio',
        idade:20,
        endereco: {
            logradouro:'Rua J R SILVA',
            numero: 45
        }
    },

    condutores: [{
        nome:' Caio',
        idade: 20
    }, {
        nome:'Cezar',
        idade: 20
    }],

    calcularValorSeguro: function(a,b){
        console.log(a+b)
    }
}

carro.propietario.endereco.numero = 1000
carro['propietario']['endereco']['logradouro'] = 'Av gigante'
console.log(carro)

console.log(carro.condutores[1])
carro.calcularValorSeguro(15,15)

delete carro.condutores
delete carro.propietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length) // irá gerar erro pois o lenght está indefinido