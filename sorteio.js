const alunos = ['Caio', 'Eduardo', 'Jonathan', 'Matheus', 'Jairo'];
const grupoFormado = [];

function getRandom(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
}


for (let i=0; i <= alunos.length; i++){
    const valor = getRandom(0, alunos.length);
    const sorteado = alunos[valor]; 
    grupoFormado.push(sorteado);
    alunos.splice(alunos.indexOf(sorteado), 1);
}
console.log('======== GRUPO FINAL ========');
console.log(grupoFormado);