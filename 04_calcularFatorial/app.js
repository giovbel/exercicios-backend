var calcularFatorial = require('./modulo/calculoFatorial.js');


var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Número: ', function(valorDigitado){

    let numero = valorDigitado.replace(',','.');

    console.log(calcularFatorial.calcularFatorial(numero))

    console.log('')
      entradaDados.close();
})