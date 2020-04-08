const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 123.99,
    desconto: 0.23
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'Arquivo salvo !')
})