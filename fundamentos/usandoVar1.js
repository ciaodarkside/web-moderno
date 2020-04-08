{
    {
        {
            {
                var sera = 'Será ????' // variavel visivel globalmente
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste(){   // var visivel localmente
    var local = 123
}

teste()
console.log(local)