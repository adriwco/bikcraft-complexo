const form = document.querySelector('form');

function formEnviar(resposta){
  // type, url, redirected, status, ok
  if(resposta.ok){
    formulario.innerHTML = "<p class='font-2-1' style='grid-column: 1/-1; padding: 1rem;' border-radius: 4px; background: #f7f7f7;><span style='color: #317a00;'>Mensagem enviada!</span> Em breve entraremos em contato. Geralmente respondemos em 24 horas.</p>";
  }else{
    formulario.innerHTML = "<p class='font-2-1' style='grid-column: 1/-1; padding: 1rem;' border-radius: 4px; background: #f7f7f7;><span style='color: #e00000;'>Erro no envio!</span> Você pode enviar diretamente para o nosso email: contato@ficticio.com.br </br> Geralmente respondemos em 24 horas.</p>";
  }
}
function enviarFormulario(e){
  e.preventDefault();
  const btn = document.querySelector('form button');
  // btn.disabled = true;
  btn.innerHTML = "Enviando...";
  const data = new FormData(form); // classe FormData: pegar o valores do form
  fetch('./enviar.php', { // recebe a url (fazendo conexão,enviando ou puxando dado) e um objeto com as config da conexao
    method: 'POST',
    body: data,
  }).then(formEnviar);
}
form.addEventListener('submit', enviarFormulario);