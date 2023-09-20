/***************************************************************
 * Objetivo: Listar números pares e impares
 * Data: 18/09/2023
 * Autor: Giovanna
 * Versão: 1.0
 **************************************************************/

function paresImpares (valorInicial, valorFinal){
    let numeroInicial = valorInicial;
    let numeroFinal = valorFinal;

    if(numeroInicial < 0 || numeroInicial > 500){
        console.log('>°< ERRO: O valor inicial precisa estar entre 0 e 500 !')
    }else if(numeroFinal < 100 || numeroFinal > 1000){
        console.log('>°< ERRO: O valor inicial precisa estar entre 0 e 500 !')
    }else if(numeroInicial == '' || numeroFinal == ''){
        console.log('>°< ERRO: Os campos não podem estar vazios !')
    }else if(numeroInicial > numeroFinal){
        console.log('>°< ERRO: O valor inicial não pode ser maior que o final !')
    }else if(numeroInicial == numeroFinal){
        console.log('>°< ERRO: Os valores não podem ser iguais !')
    }else{

        let contadorPar = 0;
        let contadorImpar = 0;

        console.log('Lista de números Pares:')
        for(; numeroInicial <= numeroFinal; numeroInicial++){
            if(numeroInicial % 2 == 0){
                console.log(valorInicial)
                contadorPar++;
            }
        }
        console.log('')
        console.log('Qtde de números pares encontrados: ' +contadorPar)
        console.log('')

        for(;numeroInicial <= numeroFinal ; numeroInicial++){
            if(numeroInicial % 2 != 0){
                console.log(numeroInicial)
                contadorImpar++
            }

    }
}   
    module.exports = {
        paresImpares
    }
    }