console.log(typeof String)
console.log(typeof Array)
console.log(typeof Array)

String.prototype.reverse = function (){   // funcao q pode ser criada no prototype por não estar inclusa
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function(){   // funcao q pode ser criada no prototype por não estar inclusa
    return this[0]
}

console.log([1,3,4,5,6].first())
console.log(['a','b','c','d','e'].first())

String.prototype.toString = function (){  // NÃO SOBRESCREVER UMA FUNÇÃO QUE JÁ ESTÁ INCLUSA NO PROTOTYPE
    return 'Lascou'
}

console.log('Escola Cod3r'.reverse())