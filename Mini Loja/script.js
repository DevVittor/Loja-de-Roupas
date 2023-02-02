const items = [
    {
        id:0,
        nome:'Camiseta',
        img: 'Camiseta.png',
        price: 20,
        quantidade: 0
    },
    {
        id:1,
        nome:'Short',
        img: 'Short.png',
        price: 50,
        quantidade: 0
    },
    {
        id:2,
        nome:'Tênis',
        img: 'Tênis.png',
        price: 10,
        quantidade: 0
    },
]

inicializarLoja = ()=>{
    var containerProdutos = document.getElementById('produtos');
    items.map((val)=>{
        containerProdutos.innerHTML += `

            <div class="produto-single">
                <img src="`+val.img+`"/>
                <p>`+val.nome+`</p>
                <h5>`+val.price+`</h5>
                <a key="`+val.id+`" href="#">Adicionar ao Carrinho</a>
            </div>

        `;
    })
}
inicializarLoja();

atualizarCarrinho = ()=>{
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = "";
    items.map((val)=>{
        if(val.quantidade >0 ){
            containerCarrinho.innerHTML += `
            <img src="`+val.img+`"/>
            <p>`+val.nome+`| Quantidade `+val.quantidade+`</p>
            <hr>
            <h5>`+val.price+`</h5>
        `;
        }
    })
}

var links = document.getElementsByTagName('a');
for(var i = 0; i< links.length; i++){
    links[i].addEventListener("click",function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        items[key].price++;
        atualizarCarrinho();
        return false;
    })
}