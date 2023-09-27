var paresOuImpares = require('./modulo/pareseImpares.js');


var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Número Inicial: ', function(numero1){
    let valor1 = numero1.replace(',','.');

    entradaDados.question('Número Final: ', function(numero2){
        let valor2 = numero2.replace(',','.')


        console.log('')
        console.log('+-------------------+')
        console.log('|1 - Calcular pares|')
        console.log('|2 - Calcular Impares|')
        console.log('|3 - Calcular Ambos|')
        console.log('+-------------------+')
        console.log('')

        entradaDados.question('O que deseja calcular: ', function(parImparAmbos){
            let escolha = parImparAmbos.replace(',','.')
            


    console.log(paresOuImpares.paresImpares(valor1, valor2, escolha))

        

    console.log('')
      entradaDados.close();

})
})
})