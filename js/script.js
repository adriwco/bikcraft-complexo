//Ativar links do menu
const links = document.querySelectorAll('.header-menu a');
function ativarLink(link){
  const url = window.location.href;
  const href = link.href;
  if(url.includes(href)){
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);

//Ativar items do orçamento
const parametros = new URLSearchParams(window.location.search);
function ativarProduto(parametro){
  const elemento = document.getElementById(parametro)
  if(elemento){
    elemento.checked = true;
  } 
}
parametros.forEach(ativarProduto);