function soBoaNoticia(nota){
    if (nota>= 7){
        console.log('Aprovado com '.concat(nota).concat( '!'))
    }
    else{
        console.log('Reprovado nota '.concat(nota).concat( '!'))
    }
}

soBoaNoticia(9)


function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('True...' )
    }

    else{
        console.log('False...')
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})