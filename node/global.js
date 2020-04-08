// console.log(global)

global.MinhaApp = Object.freeze({   //congelando objeto para ele não poder ser modificado globalmente
    saudacao(){
        return 'Olá Mundo'
    },
    
    nome: 'teste'
})