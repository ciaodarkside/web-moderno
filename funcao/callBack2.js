const notas = [4.1, 4.2, 5.4, 8.4, 9.2, 8.3, 8.2, 8.1]

// Sem callback
let notasBaixas1 = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// Com callBack
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)


//callback com funcao arrow

const notasMenorQue7 = nota => nota < 7

const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)