const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    pessoa: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) =>{  // operador destructing para acessar a chave e o valor do objeto pessoa
    console.log(`${chave}: ${valor}`)
})


Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // define se o atributo vai ser listado no objeto
    writable: false, // define se ele vai poder ser escrito
    value:'01/01/2019'
})


pessoa.dataNascimento = '01/01/2015'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))



// Object.assign (ECMAScript 2016)

const dest = {a: 1 } // objeto de destino  
const o1 = {b: 2 }
const o2 = {c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // concatena os atributos dos objetos com os do objeto de destino, e sobrescreve os que já existirem

Object.freeze(obj) //congela o objeto e o torna imutável
obj.c = 1234
console.log(obj)