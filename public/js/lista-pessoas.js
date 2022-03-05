console.log(Pessoas);
let div = 
document.querySelector('.lista-pessoas');
$('.lista-pessoas');

let pessoas = Pessoas;
let lista = pessoas.lista;

for (let i = 0; i < 3; i++) {
    div.innerHTML += `<div>${lista[i].id} | ${lista[i].nome}</div>`;
}

lista.map((pessoas) => {
    div.innerHTML += `<div>${pessoas.id} | ${pessoas.nome}</div>`; 
});
