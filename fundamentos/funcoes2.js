// armazenando funcao em uma variavel

const imprimirSoma = function(a, b) {
    console.log(a+b)
}

imprimirSoma(13,9)


// armazenando uma funcao arrow em uma variavel

const soma = (a,b) => {
    return a+b
}

console.log(soma(3,5))


//retorno implícito

const subtracao = (a,b) => a-b
console.log(subtracao(2,3))

const imprimirMensagem = mensagem => console.log(mensagem)

imprimirMensagem('Olá mundo')