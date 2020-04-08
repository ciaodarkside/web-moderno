const alunos = [
    { nome: 'João', nota: 9.00},
    { nome: 'Caio', nota: 5}
]

// Imperativo

let total1 = 0
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}

console.log(total1 /alunos.length)


// Declarativo

const getNota = aluno => aluno.nota
const soma = (acumulador, atual) => acumulador + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2)
console.log(total2 / alunos.length)