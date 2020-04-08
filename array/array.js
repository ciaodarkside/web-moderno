console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Caio', 'Cesar')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])


aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)
aprovados[9] = 'Gomes'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // ordena o array
console.log(aprovados)

delete aprovados[1]

console.log(aprovados[1])
console.log(aprovados[2])


aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Colocando o Carlos', 'Colocando a Ana')  // primeiro paramentro é o indice, o segundo é quantos vão ser removidos, e o terceiro em adiante é quantos vão ser inseridos no array.

console.log(aprovados)

