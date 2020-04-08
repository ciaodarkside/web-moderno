const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 44933
prod1['Desconto Legal'] = 3.45 // evitar atributos com espaço
console.log(prod1)

const prod2 = { 
    nome: 'Camisa Nike', 
    preco: 300,
    obj: {
        blabla:1,
        obj: {
            blabla2:2
        }
    }
}

console.log(prod2)