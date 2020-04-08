
Array.prototype.filter2 = function (callback){
    const novaLista = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){  
            novaLista.push(this[i])
        }
    }
    return novaLista
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4999, fragil: true },
    { nome: 'Copo de vidro', preco: 32.12, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const caros = function (item){
    return item.preco > 500
}
const frageis = function (item){
    return item.fragil === true
}

// console.log(produtos.filter(function(p){
//     return p.preco > 10
// }))


console.log(produtos.filter2(caros).filter2(frageis))

