'use strict'

let areaDeTexto = document.getElementById('txt');
let divContar = document.querySelector('.contar'); 
areaDeTexto.addEventListener('keypress', (event) => {
    let contador = areaDeTexto.value.length;
    divContar.innerHTML = contador;
});


let objectLi = document.querySelectorAll('li'); 
let objectImage = document.querySelector('.img');

//let image = document.getElementById('imagem');

for(let i = 0; i < objectLi.length; i++){
    
    objectLi[i].addEventListener('mouseover', function (event) {
        objectLi[i].classList.add('active');
        objectImage.src = 'img/art.png';

    });
    objectLi[i].addEventListener('mouseout', function (event) {
        objectLi[i].classList.remove('active');
        objectImage.src = 'img/banana.svg';
    })

}



/* event click */
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