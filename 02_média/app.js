var media = require('./modulo/mediaEscolar.js');


var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Nome do aluno: ', function(nomeAluno){

    let nomeA = nomeAluno.replace(',','.');

    entradaDados.question('Nome do professor: ', function(nomeProfessor){

        let nomeP = nomeProfessor.replace(',','.');

        entradaDados.question('Sexo do aluno: ', function(sexoAluno){
        
            let sexoA = sexoAluno.replace(',','.');
    
        entradaDados.question('Sexo do professor: ', function(sexoProfessor){
        
        let sexoP = sexoProfessor.replace(',','.');

        entradaDados.question('Nome do curso: ', function(nomeCurso){
        
            let curso = nomeCurso.replace(',','.');
  

    entradaDados.question('Nome da disciplina: ', function(nomeDisciplina){
        
        let disciplina = nomeDisciplina.replace(',','.');

        entradaDados.question('Nota 1: ', function(primeiraNota){
        
            let nota1 = primeiraNota.replace(',','.');

            entradaDados.question('Nota 2: ', function(segundaNota){
        
                let nota2 = segundaNota.replace(',','.');
        

        entradaDados.question('Nota 3: ', function(terceiraNota){
        
            let nota3 = terceiraNota.replace(',','.');

            entradaDados.question('Nota 4: ', function(quartaNota){
        
                let nota4 = quartaNota.replace(',','.');
        })
    })
    })
})
})
})
})
})
})
})