const alunos = [
    { nome: 'Caio', nota: 10.0, bolsista: false},
    { nome: 'Cezar', nota: 6.0, bolsista: true},
    { nome: 'Ferreira', nota: 10.0, bolsista: false},
    { nome: 'Gomes', nota: 10.0, bolsista: true},
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)