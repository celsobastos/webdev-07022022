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

let notaPrimeiroBimestre = +'10'; // " + - * / % (mod) resto"
let notaSegundoBimestre = 5;
let faltas = 0;
let media = (notaPrimeiroBimestre + notaSegundoBimestre) / 2;
let aluno = "Carlos";
/*
    se media >= 7 e faltas = 0 => aprovado
    se media < 7 reprovado
    >, >=, <=, !=, ==, === , !== (e ou não)
*/
if (media >= 7 && faltas === 0) {
    console.log('Olá ' + aluno + ' a media é: ' + media + ' você está aprovada.');
}
else{
    console.log('Olá ' + aluno + ' a media é: ' + media + ' Você está Reprovado(a)');
}












/*
let aceitoContrato = false;
let nomeCompleto = "Jonas Almeida";
const COLOR_RED = '#ff0000';
console.log(typeof aceitoContrato);
console.log('Hello world');
*/