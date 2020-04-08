const notas= [5, 6, 7, 8 , 9]

for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome : 'Caio',
    sobrenome: 'Cezar', 
    idade: 29,
    peso: 64
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}