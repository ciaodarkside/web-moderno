// par nome/valor
const teste = 'Ola' // contexto léxico 1

function exec(){
    const teste = 'Oiiii' // contexto léxico 2
    return teste
}

// objetos são grupos aninhandos de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade:32,
    peso:62,
    endereço: {
        rua: 'J R Silva',
        numero: 45
    }
}

console.log(teste)
console.log(exec())
console.log(cliente)