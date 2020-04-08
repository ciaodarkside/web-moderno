const schedule = require('node-schedule') // importa o node-schedule

const tarefa1 = schedule.scheduleJob('*/5 * 18 * * 5', function (){
    console.log('Executando Tarefa 1 !', new Date().getSeconds()) // pega os segundos 
})

setTimeout(function () { 
    tarefa1.cancel() //cancela tarefa do temporizador por 20 segundos
    console.log('Cancelando Tarfea 1!')
}, 20000)

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule() // instancia a funcao RecurrenceRule do schedule q permite setar as regras
regra.dayOfWeek = [new schedule.Range(1, 5)] //de segunda a sexta
regra.hour = 18
regra.second = 5


const tarefa2 = schedule.scheduleJob(regra, function (){  // implementa a regra
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})