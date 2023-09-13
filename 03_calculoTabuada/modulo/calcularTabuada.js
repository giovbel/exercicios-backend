/***************************************************************
 * Objetivo: Gerar o calculo da tabuada inicial e final
 * Data: 13/09/2023
 * Autor: Giovanna
 * Versão: 1.0
 **************************************************************/

const gerarTabuada = function(valorTabuada1,valorTabuada2, valorInicial, valorFinal){

   
    let tabuadaInicial = valorTabuada1
    let tabuadaFinal = valorTabuada2
    let contador = valorInicial
    let contadorFinal = valorFinal
    let resultado

    let status = false

    
    if(tabuadaInicial == '' || tabuadaFinal == '' || contador == '' || contadorFinal == '')
    console.log('>°< ERRO: É obrigatório informar todos os valores !')
    //validação de entrada de caracteres inválidos
    else if(isNaN(tabuadaInicial) || isNaN(tabuadaFinal) || isNaN(contador) || isNaN(contadorFinal))
    console.log('>°< ERRO: Não é possível gerar a tabuada com a entrada de caracteres!')
    else{

        
        tabuadaInicial = Number(tabuadaInicial)
        tabuadaFinal = Number(tabuadaFinal)
        contador = Number(contador)
        contadorFinal = Number(contadorFinal)

        if(contador > contadorFinal)
        {
            contador = valorFinal;
            contadorFinal = valorInicial;   
        }
        

        for(; contador <= contadorFinal; contador++){
            resultado = tabuadaInicial * contador
            console.log(`${tabuadaInicial} x ${contador} = ${resultado}`)
            status = true
        }

        for(; contador <= contadorFinal; contador++){
            resultado = tabuadaFinal * contador
            console.log()
            console.log(`${tabuadaFinal} x ${contador} = ${resultado}`)
            status = true
        }
    }
    return status
}

module.exports = {
    gerarTabuada
}
