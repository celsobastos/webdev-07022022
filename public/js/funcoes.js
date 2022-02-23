'use strict'
/* Callback */
function alerta(ola, mundo, msnola, msnmundo = 'Mundo') {
    ola(msnola);
    mundo(msnmundo);
}

alerta(msn => console.log(msn), msn => console.log(msn), 'Ola');


/*
let lista = [1,2,3];

let j = lista.lastIndexOf(1);
console.log(j);

let Pessoa = {
    nome: 'Matheus',
    idade: 45,
    mensagem: function () {
        console.log('Olá Mundo');
    }
}

let json = JSON.stringify(Pessoa);
let convert = JSON.parse(json);

console.log(json);

let Usuario = {
    admin: true,
    login: 'matheus@gmail.com',
    __proto__: Pessoa,
}

console.log(Usuario.mensagem());

let x = 1;
*/


// let Pessoas = {
//     dados:[{
//         nome: 'Matheus',
//         idade: 25,
//         salario: 5000,
//         notas: [10,5,9],
//         endereco: {
//             cep: '05814-525',
//             rua: 'Rua Nove de Julho',
//             numero: 123,
//         }
//     }]
// };
// console.log(Pessoas.dados[0].nome);




/*
let subtrai = function (numuro) {
    return 40 - numuro;    
}

let subtrai2 = numuro => {
    let sub2 = 40 - numuro;
    console.log(sub2);
}; 

subtrai2(3);

let arrowFunc = () => false;
let returno = arrowFunc();

let express = function() {
    console.log('Expressão');
}
express();


aumentoSalarial(1000, 32);
*/
// function aumentoSalarial(salario, porcentagem) {
//     let aumento = salario + salario * (porcentagem / 100);
//     //return aumento;
//     printMensagem(aumento);
// }
// function printMensagem(salario){
//     console.log(`Novo salario: ${salario}`);
// }
// aumentoSalarial(2000,10);

// printMensagem(aumentoSalarial(2000,10));
// printMensagem(aumentoSalarial(3000,15));
// printMensagem(aumentoSalarial(3500,35));

// console.log(`Novo salario 2: ${aumentoSalarial(3000,15)}`);



