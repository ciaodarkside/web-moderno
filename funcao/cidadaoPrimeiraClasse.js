// Função em JS é first-Class Object (Citizens}
// Higher-order function

// criar de forma literal

function fun1(){

}

// Armazenar uma Variável
const fun2 = function () {}

// Armazenar em um Array
const array = [function (a,b) {return a + b}, fun1, fun2]
console.log(array[0](2,3))

// Armazenar em um atributo de um objeto

const obj = {}

obj.falar = function () {return 'Opa !'}

console.log(obj.falar())


// Passar função como parametro

function run(fun){
    fun()
}

run(function() { console.log('Executando...')})


// uma função pode retornar/conter uma função

function soma(a,b){
    return function (c){
        console.log(a+b+c)
    }
}

soma(3,5)(5)

const somarFuncoes = soma(2,2)

somarFuncoes(1)