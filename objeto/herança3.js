const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value:'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){ // lanço que percorre atributos do objeto
    filha2.hasOwnProperty(key) ?   // funcao que verifica se o atributo pertence ao objeto filha2, e operador ternario que mostra o resultado
        console.log(key): console.log(key,'por herança')
}