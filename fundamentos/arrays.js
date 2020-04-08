const valores = [7.7, 94.2, 23.3, 2]
console.log(valores[0], valores[2])

valores[4] = 20

console.log(valores)
console.log(valores.length)
valores.push({id:3}, false, null, 'teste')
console.log(valores)
console.log(valores.pop())
console.log(valores)
delete valores[0]

console.log(valores)

console.log(typeof valores)