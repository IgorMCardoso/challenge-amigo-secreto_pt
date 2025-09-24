//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
const input = document.getElementById("amigo");
const listaDeAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function adicionarAmigo() {
    
    const nome = input.value.trim();

    if(nome === ""){
        alert("Entrada inválida. Escreva um nome.")
        return;
    }

    amigos.push(nome);

    exibirLista();

    input.value = "";
    input.focus();
}

function exibirLista() {
    listaDeAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        listaDeAmigos.appendChild(item);
    });

    listaDeAmigos.style.display = amigos.length > 0 ? "flex" : nome;
}

function sortearAmigo() {

    if(amigos.length === 0) {
        alert("Sem amigos na lista, adicione pelo menos um para ser possível sortear");
        return;
    }

    const numeroAleatorio = Math.floor(Math.random() * amigos.length);
    const escolhido = amigos.splice(numeroAleatorio, 1)[0];

    resultado.textContent = `O amigo sorteado é: ${escolhido}`;

    exibirLista();
    
    listaDeAmigos.style.display = "none";
}