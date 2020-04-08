function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula = new Aula('Até breve', 456)


// simulando o new

function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype 
    f.apply(obj, params)
    return obj
}


const aula3 = novo(Aula, 'Ola', 213)
const aula4 = novo(Aula, 'Boa tarde', 938)

console.log(aula3, aula4)