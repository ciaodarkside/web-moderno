const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome:'Caio',
        nota: 9.4
    }, {
        nome: 'Cezar',
        nota: 5.4
    }]
}, {
    nome:'Turma M2',
    alunos:[{
        nome:'Cezar',
        nota: 6
    },{
        nome:'Gomes',
        nota: 8
    }]
}]

const getNotaDoAluno = aluno => aluno.nota

const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotaDaTurma)

console.log(notas1)


Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)