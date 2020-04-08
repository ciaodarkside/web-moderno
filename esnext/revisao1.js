// let e const

{
    var a = 1
    let b = 2
    console.log(b)
}
console.log(a)

// Template String

let produto = 'Shampoo'
console.log(`Usando ${produto}`)

// Destructuring

const [l, e, ...tras] = 'Cesar'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3] //pulando o segundo elemento 
console.log(x, y)

const {idade:i, nome:n} = {nome: 'Caio', idade: 20}
console.log(i, n)