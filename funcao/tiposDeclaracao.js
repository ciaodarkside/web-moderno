console.log(soma(3, 4))
// function declaration
// pode ser usada antes da declaracao
function soma(x, y){
    return x + y
}

// function expression 
// só pode ser usada dps da declaração
const sub = function (x,y) {
    return x - y
}

// named function expression
// só pode ser usada depois da declaração
const mult = function mult(x, y){
    return x * y
}