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

    //Verifica se todos os campos estão preenchidos;
    if (nameValue == "" && emailInput.value == "" && messageInput.value == ""){
      window.alert("Por favor preencha todos os campos do formulário!")
        contactForm.nameInput.focus();
        return false;

      //Verifica se o campo Nome está vazio;
    }else if(nameValue == "") {
        window.alert("Por favor preencha o campo Nome!")
          contactForm.nameInput.focus();
          return false;

      //Verifica se o Valor do campo tem menos de 3 caracteres;
    }else if(nameLength < 3){
      window.alert("Por favor preencha o campo com um nome válido com mais de 3 caracteres!!")
        contactForm.nameInput.focus();
        return false;

      //Verifica se o Valor do campo tem mais que 30 caracteres;
    }else if(nameLength > 30){
      window.alert("Por favor preencha o campo com um nome válido com menos de 30 caracteres!!")
        contactForm.nameInput.focus();
        return false;

      // Verifica se o campo está vazio e se existe '@' já que o html não faz pois está como type text;
    }else if( emailInput.value == "" || emailInput.value.indexOf('@') == -1){
        window.alert("Por favor preencha o campo Email com um email válido!")
          contactForm.emailInput.focus();
          return false;

      //Verifica se o campo está vazio;
    }else if (messageInput.value == "" ){
      window.alert("Por favor preencha o campo Menssagem!")
        contactForm.messageInput.focus();
        return false;
      
      //Caso todos os campos estejam preenchidos corretamente o formulário será enviado!;
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
