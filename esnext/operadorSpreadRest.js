// operador ... rest(juntar) / spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto

const funcionario = { nome: 'Maria', salario: 2323.32}
const clone = {ativo: true, ...funcionario} // espalhando funcionario

console.log(clone)

// usar spread com array

const grupoA = ['joão', 'Pedro', 'Glória']
const grupoFinal = ['Maria', 'Caio', ...grupoA]
console.log(grupoFinal)