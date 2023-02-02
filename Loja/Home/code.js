let abrirMenu = document.getElementById("open-menu");
abrirMenu.style.cursor = "pointer";
let menuOculto = document.querySelector(".conta-menu");
abrirMenu.addEventListener("click", () => {
  menuOculto.classList.toggle("menu_visible");
});

let idUser = document.querySelector("#id_user");
idUser.textContent = "#" + idUser.textContent;

//Filtro select Disabled

let inputFiltro = document.querySelector("#filtro");
let filtroSelect = document.querySelector("#filtro_disabled");
filtroSelect.style.display = "none";
inputFiltro.addEventListener("click", () => {
  filtroSelect.disabled = true;
});

//Hidden Input Search

let iconSearch = document.querySelector("#icon_search");
let inputSearch = document.querySelector("#input_search");

iconSearch.addEventListener("click", () => {
  inputSearch.style.display = "block";
  iconSearch.style.display = "none";
});

document.querySelector("link[rel='shortcut icon']").href = "https://www.svgrepo.com/show/303206/javascript-logo.svg";

//Mudar Cor de Menu

let menuSelect = document.querySelector(".menu-navegation");
menuSelect.addEventListener("click",()=>{
    let menuAtual = document.querySelector(".link");
    menuAtual.classList.toggle("menuHover");
});