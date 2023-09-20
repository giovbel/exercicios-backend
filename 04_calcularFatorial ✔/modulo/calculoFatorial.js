/*********************************************************************
 * Objetivo: Calcular o Fatorial de um número fornecido pelo usuário
 * Data: 18/09/2023
 * Autor: Giovanna
 * Versão: 1.0
 ********************************************************************/

const calcularFatorial = function(numero){
    let valorDigitado = numero;
    let contador;
    let resultado = 1;

    let status = false

    if(valorDigitado == ''){
        console.log('>°< ERRO: É obrigatório todos os campos estarem preenchidos !')
    }else if(isNaN(valorDigitado)){
        console.log('>°< ERRO: Não é possível gerar calculo com a entrada de caracteres!')
    }else if(valorDigitado == 0){
        console.log('>°< ERRO: Não existe fatorial de 0 !')
    }else if(valorDigitado == 1){
        console.log('>°< ERRO: O número digitado precisa ser maior do que 1 !')
    }else{

        console.log('')

        valorDigitado = Number(valorDigitado)
        contador = Number(contador)

        for(contador = 2; contador <= valorDigitado; contador++){
            resultado *= contador;
        }

        console.log(`O fatorial de ${numero} é ${resultado}`)
        return status
    }
    }
    
    module.exports = {
        calcularFatorial
    }