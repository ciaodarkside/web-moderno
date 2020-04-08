function imprimirValorEntreMaxEMin(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let numero = 15

while (numero != 4 ) {
    numero = imprimirValorEntreMaxEMin(1, 15)
    console.log(numero)
}
