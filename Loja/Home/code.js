let btnBuy = document.querySelector('#buy');
let nameProduct = document.querySelector('#name_Product').textContent;
let notificar = document.querySelector('#notification');
notificar.textContent = 0;
notificar.classList.add('menucart');
btnBuy.addEventListener("click",()=>{
    notificar.textContent++;
    notificar.classList.add('menucart');
    notificar.style.visibility = "visible";
});

let carrinho = document.querySelector('.bi-cart4');
let mostrarCarrinho = document.querySelector('#carro');
let mostrarSeta = document.querySelector('#seta_cart');

carrinho.addEventListener("click",()=>{
    mostrarCarrinho.classList.toggle('carrinho');
    mostrarSeta.classList.toggle('seta_cart');
});

