function imprimirSoma(a, b) {
    console.log(a+b)
}

imprimirSoma(5, 5)

function soma(a, b=0){

    return a + b
}

console.log(soma(3,2))
console.log(soma(1))