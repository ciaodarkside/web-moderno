class Avo {
    constructor(sobrenome, idade, profissao){
        this.sobrenome = sobrenome
        this.idade = idade
        this.profissao = profissao
    }
}

class Pai extends Avo {
    constructor(){
        super('Carlos', 30, 'mecanico')

    }
}

class Filho extends Avo {
    constructor(){
        super('Silva',20,'desempregado')
       
    }
}

const filho = new Filho
const avo = new Avo 
avo.idade = 50
avo.sobrenome = 'Antonio'
const pai = new Pai

console.log(pai)
console.log(avo)
console.log(filho)
