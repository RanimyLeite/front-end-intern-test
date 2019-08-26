// Adicionamos nosso código dentro de uma função anônima para evitar
// variáveis globais.
(function() {
  // Elemento principal do formulário
  const contactForm = document.getElementById('contact');

  // Campos do formulário
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // "addEventListener" instrui o navegador a executar uma função sempre
  // que um evento específico acontece. Nesse caso, a função abaixo será
  // executada toda vez que o botão de envio for pressionado.
  contactForm.addEventListener('submit', function() {
    // A propriedade "value" contém o valor atual de um input ou textarea
    const nameValue = nameInput.value;

    // A propriedade "length" contém o tamanho (em caracteres) de uma
    // uma string. Toda string contém essa propriedade.
    const nameLength = nameValue.length;

    //Documentação da validação

    // Testando se o campo está nulo ou tem um nome menor que 4 ou maior que 30;
    if(nameValue == "" || nameLength < 4 ||  nameLength > 30) {
        window.alert("Por favor preencha o campo Nome!")
          contactForm.nameInput.focus();
          return false;
      // Testa se o campo é nulo e se existe '@' e '.com' já que o html não faz pois está como type text;
    } else if( emailInput.value == "" || emailInput.value.indexOf('@' && '.com') == -1){
        window.alert("Por favor preencha o campo Email com um email válido!")
          emailInput.focus();
          return false;
      // Testa se o campo é nulo;
    }else if (messageInput.value == "" ){
      window.alert("Por favor preencha o campo Menssagem!")
        messageInput.focus();
        return false;
    } else {

      // "window" é um objeto global que representa a janela (ou aba) do
      // navegador que está executando o código do seu site. O método
      // "alert" simplesmente mostra um aviso para o usuário contendo a
      // mensagem provida.
      window.alert(`Obrigado ${nameValue} por preencher nosso formulário!`);

    }
    // Altere e complete essa função para validar os campos do formulário
    // de acordo com as especificações do teste. Boa sorte!
  });
})();
