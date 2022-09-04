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

//Sessão de perguntas frequentes
const perguntas = document.querySelectorAll('.perguntas button');
function ativarPergunta(event){
  const pergunta = event.currentTarget; //pergando o elemento
  const controls = pergunta.getAttribute('aria-controls'); // aria-controls="..."
  const resposta = document.getElementById(controls); // controls -> id resposta
  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa"); // retorno booleano -> existencia!
  pergunta.setAttribute("aria-expanded", ativa); // aria-expanded="...", indicar se estar expandido(true) ou comprimido(false)...
}
function eventosPerguntas(pergunta){
  pergunta.addEventListener('click', ativarPergunta);
}
perguntas.forEach(eventosPerguntas);

// Galeria de bicicleta
const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImagem(event){
  const img = event.currentTarget;
  const media = window.matchMedia('(min-width: 1000px)').matches;
  if(media){
    galeriaContainer.prepend(img); // remove o elemento e cola no primeiro lugar
  }
}

function eventosGaleria(img){
  img.addEventListener('click', trocarImagem)
}

galeria.forEach(eventosGaleria);

// galeria.forEach(() => {
// arrow funciton or "funçao flecha"  
//  =>  : Isto é uma função lambda, ou como costuma ser chamada, função flecha. É uma função anônima com uma sintaxe mais simples. disponível desde EcmaScript 6. 
// });