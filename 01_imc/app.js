var IMC = require('./modulo/imc.js');


var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('')

entradaDados.question('Qual seu peso: ', function(pesoPessoa){

    let peso  = pesoPessoa.replace(',','.');


//entrada de dados do tipo de pagamento
entradaDados.question('Qual sua altura: ', function(alturaPessoa){

    let altura = alturaPessoa.replace(',','.');

    console.log('------------------')
        console.log('')

        //chama a função pra calcular a tabuada
    console.log(IMC.calcularIMC(peso, altura))

    console.log('')
      entradaDados.close();
})
})
