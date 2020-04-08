// não aceita repetição / não indexada
const times = new Set()
times.add('Vasco')
times.add('São paulo').add('Santos').add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Caio', 'Cezar', 'Ferreira', 'Caio']
const nomeSet = new Set(nomes)
console.log(nomeSet)