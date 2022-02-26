'use strict'
/* promise */

let buscaUber = fetch('http://www.ubber.com'); // API Uber
let busca99 = fetch('http://www.99.com'); // API 99

let promise = new Promise.race([buscaUber,busca99]);

let promise = new Promise((resolve, reject) => {

    let login = 'usuariotest.com';
    // let regx = RegExp('[A-Za-z]','i')
    // login.test(regx);

    if(login.indexOf('@') == -1){
        return reject('Email invalido');
    }
    else {
        return resolve('Sucesso!');
    }

});

promise.then((mensagem) => {
    console.log(mensagem);
}).catch((error) => {
    console.log(error);
});






function chamada1(){
    console.log('chamada1');
}

function chamada2(){
    console.log('chamada2');
}

let fetchData = function (url) {
    fetch(url).then(function (resp) {
        return resp.json();
    }).then(function (data){
        data.map((dataArray) => {
            document.querySelector(".pessoas").innerHTML += '<br>' + dataArray.name;
        });
        console.log('promise');
        chamada1();
        //document.querySelector(".pessoas").append(data[0].name);
    }).catch(function (error) {
        console.log(error + 'Algo deu errado');
    });
}

fetchData('https://jsonplaceholder.typicode.com/users');

chamada2();



function saveStore() {
    localStorage.setItem('email','testemail@gmail.com')
}

function getStore(){
    return localStorage.getItem('email');
}

document.querySelector('.email').innerHTML = getStore();
saveStore();

function getCep(cep){
    let http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if( this.status == 200) {
            //console.log(this.responseText);
            let endereco = JSON.parse(this.responseText);
            document.querySelector('.input-name').value = endereco.cep;
        }
    }
    http.open('GET', `https://viacep.com.br/ws/${cep}/json/`, true);
    http.send();
}
let botaoBuscaCep = document.querySelector('.busca-cep');

botaoBuscaCep.addEventListener('click', function (event) {
    getCep('04849-270');
    event.preventDefault();
})


/**
 * Adicione comentarios que explica o que essa função esta fazendo
 * @param {*} id O que esse parametro faz?
 */
function contadorDeCaracteres(id) {
    let areaDeTexto = document.getElementById(id);
    let divContar = document.querySelector('.contar'); 
    areaDeTexto.addEventListener('keyup', (event) => {
        let contador = areaDeTexto.value.length;
        divContar.innerHTML = contador;
    });
}


contadorDeCaracteres('txt');

let objectLi = document.querySelectorAll('li'); 
let objectImage = document.querySelector('.img');

//let image = document.getElementById('imagem');

for(let i = 0; i < objectLi.length; i++){
    
    objectLi[i].addEventListener('mouseover', function (event) {
        this.classList.add('active');
        objectImage.src = 'img/art.png';

    });
    objectLi[i].addEventListener('mouseout', function (event) {
        this.classList.remove('active');
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