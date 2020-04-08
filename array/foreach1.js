const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
// funcao callback q passa pro foreach recebe 3 parametros, 1 - nome, 2 - indice, 3 - array
aprovados.forEach(function(nome, indice){
    console.log(indice+1+')', nome)
})

aprovados.forEach((nome, indice) => console.log(indice, nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)