'use strict'


let botao = document.querySelector('.btn');
botao.addEventListener('click', (event) => {
    let objNome = document.querySelector('.input-name');
    let nome = objNome.value;
    let divError = document.querySelector('.error');
    
    let buscaCaracter = new RegExp('@','i');
    let testReg = buscaCaracter.test(nome);
    if(nome == '') {
        divError.innerHTML = 'Erro! campo vazio';
        //objNome.classList('m-error');
    }
    else if (nome.length < 6){
        divError.innerHTML = 'Nome: não pode ser menor que 6 caracteres';
    }
    else if (testReg) {
        divError.innerHTML = 'Não pode usar @';
    }
    else {
        divError.innerHTML = 'Tudo certo';
    }
    event.preventDefault();

});