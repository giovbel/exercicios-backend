/***************************************************************
 * Objetivo: Gerenciar médias escolares de uma universidade
 * Data: 13/09/2023
 * Autor: Giovanna
 * Versão: 1.0
 **************************************************************/

const gerarMedia = function(primeiraNota, segundaNota, terceiraNota, quartaNota){
    let nota1 = primeiraNota
    let nota2 = segundaNota
    let nota3 = terceiraNota
    let nota4 = quartaNota

    let media
    let status

    if(nota1 > 100 || nota1 < 0 || nota2 > 100 || nota2 > 0 || nota3 > 100 || nota3 < 0 || nota4 > 100 || nota4 < 0){
        console.log('')
        console.log('>< ERRO: O valor inserido não é válido')
    }if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
        console.log('')
        console.log('>< ERRO: Os campos devem estar preenchidos')
    }if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
        console.log('')
        console.log('>< ERRO: Não é possível calcular as notas com caractéres')
    }else{

        nota1 = Number(nota1)
        nota2 = Number(nota2)
        nota3 = Number(nota3)
        nota4 = Number(nota4)

        media = (nota1 + nota2 + nota3 + nota4) / 4

        if(status >= 70){
            status = 'APROVADO'
        }else if(status < 50){
            status = 'REPROVADO'
        }else if(status >= 50 && status <= 69) {
            status = 'EXAME'
        } 

        if (status == 'EXAME'){
            let nota5

            media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5
        } if(nota5 >= 60 && media >= 60){
            status = 'APROVADO'
        }

        console.log()
    }
}