Array.prototype.map2 = function (callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]


// retornar um array com apenas os preços

const paraObjeto = json => JSON.parse(json)  // converte o JSON para objeto
const apenasPreco = produto => produto.preco //retorna o preco
let resultado = carrinho.map2(paraObjeto).map2(apenasPreco) //primeiro converte dps retorna o preco

console.log(resultado)





