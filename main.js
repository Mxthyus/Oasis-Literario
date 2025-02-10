//let trilho = document.getElementById('trilho')
//let body = document.querySelector('body')
//trilho.addEventListener('click', ()=>{
  //  trilho.classList.toggle('dark')
//  body.classList.toggle('dark')
//})


//PARTE HTML  
//<div class="trilho" id="trilho">
      //  <div class="indicador">
     //   </div>
   // </div>

    //<script src="main.js">
    //</script>

//prototipo modo escuro


function sobre() {
  window.location.href = "sobre.html";
}
function index() {
  window.location.href = "index.html";
}
function contato() {
  window.location.href = "contato.html";
}
function login() {
  window.location.href = "login.html";
}
function compras() {
  window.location.href = "compras.html";
}
function carrinho(){
  window.location.href = "carrinho.html";
}

var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
  body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})





document.addEventListener("DOMContentLoaded", function () {
// Seleciona os botões de adicionar ao carrinho
const botoes = document.querySelectorAll(".add-carrinho");
const listaCarrinho = document.getElementById("lista-carrinho");
const totalCarrinho = document.getElementById("total");

// Array para armazenar os itens do carrinho
let carrinho = [];

// Função para adicionar item ao carrinho
botoes.forEach(botao => {
    botao.addEventListener("click", function () {
        const produto = this.parentElement;
        const nome = produto.getAttribute("data-nome");
        const preco = parseFloat(produto.getAttribute("data-preco"));

        // Verifica se o item já está no carrinho
        const itemExistente = carrinho.find(item => item.nome === nome);
        if (itemExistente) {
            itemExistente.quantidade++;
        } else {
            carrinho.push({ nome, preco, quantidade: 1 });
        }

        atualizarCarrinho();
    });
});

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    listaCarrinho.innerHTML = "";
    let total = 0;

    carrinho.forEach(item => {
        total += item.preco * item.quantidade;
        const li = document.createElement("li");
        li.textContent = `${item.quantidade}x ${item.nome} - R$ ${item.preco.toFixed(2)}`;
        listaCarrinho.appendChild(li);
    });

    totalCarrinho.textContent = total.toFixed(2);
}

});







