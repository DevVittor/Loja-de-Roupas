let menu = document.querySelector(".painel");
let ativarMenu = document.getElementById("cliq");
ativarMenu.textContent = "Anunciar";

let page = document.getElementsByTagName('title')[0].innerHTML = "Cartão de Produto";
let nomeProduto = document.querySelector("#nome");
let priceProduto = document.querySelector("#valor");
let produto = document.querySelector("#nomeProduto");
let price = document.querySelector("#priceProduto");
let estado = document.querySelector("#estado");
let usado = document.querySelector("#usado");
let mostrarEstado = document.querySelector("#estadoProduto");

ativarMenu.addEventListener("click",()=>{
    ativarMenu.textContent = "Publicar";
    produto.textContent = nomeProduto.value;
    price.textContent = priceProduto.value;
    mostrarEstado.textContent = usado.textContent;
});