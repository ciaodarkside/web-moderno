const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

// console.log(tecnologias.react) 

console.log(tecnologias.get('react').framework) // passa o valor da chave q quer obter

const chavesVariadas = new Map([
    [function() {}, 'função'],
    [{}, 'objeto'],
    [123, 'número']
])
chavesVariadas.forEach((valor, chave) =>{
    console.log(chave, valor)
})

console.log(chavesVariadas.has(123))

chavesVariadas.delete(123)

console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)


chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') //chave não se repete 
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)
