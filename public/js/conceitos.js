"use strict"
/*
Tipos de dados
--------------------------------------
number // 50 - 3.5
string // 'djd###%'
boolean // true | false
null 
undefined
object
*/

// let idade = Number('25');
// let idade = String(25);
//let encontrandoTipo = typeof nota;

// let convertBool = String(false);
// console.log(convertBool);

let notaPrimeiroBimestre = [10, 5, 0, 4, 9]; // " + - * / % (mod) resto"
let notaSegundoBimestre  = [10, 5, 0, 8, 6];
let faltas = 0;
let aluno = ['Pedro','Paulo','Jonas','Amanda','Bianca']; // Array

/*
    se media >= 7 e faltas = 0 => aprovado
    se media < 7 reprovado
    >, >=, <=, !=, ==, === , !== (e ou não)
*/
for(let i = 0; i < aluno.length; i++){
    let media = (notaPrimeiroBimestre[i] + notaSegundoBimestre[i]) / 2;
    let mensagem;
    let nomeDoAluno = aluno[i];
    if (media >= 7 && faltas === 0) {
        mensagem = `Olá ${nomeDoAluno} a media é: ${media} você está aprovada`;
    }
    else if (media > 3 && faltas === 0){

        mensagem = `Olá ${nomeDoAluno} a media é: ${media} você está de Recuperação`;
    }
    else{
        mensagem = `Olá ${nomeDoAluno} a media é: ${media} você está Reprovado(a)`;
    }

    console.log(mensagem);
}



/*
let i = 1;
while (i <= 10) {

    // if(i === 5) {
    //     break;
    // }

    if (media >= 7 && faltas === 0) {
        console.log('Olá ' + aluno + ' a media é: ' + media + ' você está aprovada.');
    }
    else{
        console.log('Olá ' + aluno + ' a media é: ' + media + ' Você está Reprovado(a)');
    }
    i++; // "i = i + 2" // "i-- == i = i - 1"
}
*/










/*
let aceitoContrato = false;
let nomeCompleto = "Jonas Almeida";
const COLOR_RED = '#ff0000';
console.log(typeof aceitoContrato);
console.log('Hello world');
*/