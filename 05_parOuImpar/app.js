var paresOuImpares = require('./modulo/pareseImapares.js');


var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Número Inicial: ', function(numero1){
    let valor1 = numero1.replace(',','.');

    entradaDados.question('Número Final: ', function(numero2){
        let valor2 = numero2.replace(',','.')
    })

    console.log(paresOuImpares.parouimpar(valor1, valor2))

    

    console.log('')
      entradaDados.close();
})