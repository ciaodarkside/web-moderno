function funcaoConstrutora(nome){
    this.nome = nome
    this.falar = function() {
        console.log('Meu nome é', this.nome)
    }
}

pessoa = new funcaoConstrutora('Caio')
pessoa.falar()
