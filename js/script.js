//Ativar links do menu
const links = document.querySelectorAll('.header-menu a');
const url = window.location.href;
function ativarLink(link){
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

/* galeria.forEach(() => {
 arrow funciton or "funçao flecha"  
  =>  : Isto é uma função lambda, ou como costuma ser chamada, função flecha. É uma função anônima com uma sintaxe mais simples. disponível desde EcmaScript 6. 
 }); */

  // Cor do contador de caracteres
  const contadorMsg = document.querySelector('.caracteres');
  function mudarCorContador(numero){
    if(numero >= 100 && numero <= 149){
      contadorMsg.style.color = "#999900";
    }else if(numero >= 150 && numero <= 269){
      contadorMsg.style.color = "#CC6600";
    }else if(numero === 270){
      contadorMsg.style.color = "#FF0000";
    }else{
      contadorMsg.style.color = "#000";
    }
  }

  if(url.includes('pages/contato.html')){
    $(document).ready(function(){
      // bloquear o crtl+c crtl+v
      $('input').bind('cut copy paste',function(e) {
          e.preventDefault();
      });
      // Validaçao formualario
      $("#telefone").mask("+0000000000009")
      $("#telefone").blur(function (event) { 
        if ($(this).val().includes('+351')) {
          $("#telefone").mask("+000 000 000 0009")
        } else{
          const numeroTef = $(this).val().length;
          if ( numeroTef <= 18 && numeroTef != 14) {
            $("#telefone").mask("+00 (00) 0000-00009")
          } else {
            $("#telefone").mask("+00 (00) 00000-0009")
          }
        }
      })
      // Contador de caracteres
      $(document).on("input", "#mensagem", function () {
        const limite = 0;
        const caracteresDigitados = $(this).val().length;
        const caracteresRestantes = limite + caracteresDigitados;
        $(".caracteres").text(caracteresRestantes);
        mudarCorContador(caracteresRestantes);
      });
    });
  }

  // documento  cep  numero    -    12345-678   1234-567
  if(url.includes('pages/orcamento.html')){
    $(document).ready(function(){
      // bloquear o crtl+c crtl+v
      $('input').bind('cut copy paste',function(e) {
          e.preventDefault();
      });
      // Validaçao formualario
      $("#documento").mask("00000-009")
      $("#documento").blur(function (event) { 
          const numeroTef = $(this).val().length;
          if ( numeroTef <= 8) {
            $("#documento").mask("00000-009")  /// corrigir aqui !!!!
          } else {
            $("#documento").mask("0000-0009")
          }
      })

    })
  }

  //Animañao plugins - Origamid
  if(window.SimpleAnime){
    new SimpleAnime();
  }