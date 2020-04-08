const alunos = [
    { nome: 'Caio', nota: 10.0, bolsista: false},
    { nome: 'Cezar', nota: 6.0, bolsista: true},
    { nome: 'Ferreira', nota: 10.0, bolsista: false},
    { nome: 'Gomes', nota: 10.0, bolsista: true},
]

// desafio 1: Todos alunos são bolsista ?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a=>a.bolsista).reduce(todosBolsistas))





// desafio2: algum aluno é bolsista ?


const algumBosista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBosista))