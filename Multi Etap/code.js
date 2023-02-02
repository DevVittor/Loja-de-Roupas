let etapa01 = document.querySelector("#etp1");
etapa01.style.display = "flex";
let etapa02 = document.querySelector("#etp2");
etapa02.style.display = "none";
let etapa03 = document.querySelector("#etp3");
etapa03.style.display = "none";
let etapa04 = document.querySelector("#etp4");
etapa04.style.display = "none";
let btnBack = document.querySelector("#back");
btnBack.style.display = "none";
let btnNext = document.querySelector("#next");
btnNext.style.display = "flex";

btnNext.addEventListener("click",()=>{
    etapa01.style.display = "none";
    etapa02.style.display = "flex";
    btnBack.style.display = "flex";
});