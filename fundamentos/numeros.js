const peso1 = 1.0
const peso2 = Number('3')
console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.342
const avaliacao2 = 6.343

const total = avaliacao1 * peso1 + avaliacao2 * peso2
let media = total/(peso1 + peso2)
console.log(media.toFixed(2))
console.log(media.toString(2))