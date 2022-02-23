'use strict'

let arrowFunc = () => false;
let returno = arrowFunc();

let express = function() {
    console.log('Expressão');
}
express();


aumentoSalarial(1000, 32);

function aumentoSalarial(salario, porcentagem) {
    let aumento = salario + salario * (porcentagem / 100);
    //return aumento;
    printMensagem(aumento);
}
function printMensagem(salario){
    console.log(`Novo salario: ${salario}`);
}
aumentoSalarial(2000,10);

// printMensagem(aumentoSalarial(2000,10));
// printMensagem(aumentoSalarial(3000,15));
// printMensagem(aumentoSalarial(3500,35));

// console.log(`Novo salario 2: ${aumentoSalarial(3000,15)}`);



