function cadastrar() {
  var emailInput = document.getElementById('email');
  var passwordInput = document.getElementById('password');

  var email = emailInput.value;
  var password = passwordInput.value;

  // Verificar se o e-mail inserido é válido
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, insira um e-mail válido.');
    // Limpar os campos após a verificação
    emailInput.value = '';
    passwordInput.value = '';
    return;
  }

  // Enviar dados para o script PHP usando AJAX
  var xhr = new XMLHttpRequest();
  var url = 'processamento.php'; // Substitua pelo caminho correto do seu script PHP
  var params = 'email=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password);

  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  xhr.onreadystatechange = function () {
    try {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          // Exibir a resposta do servidor
          alert(xhr.responseText);

          // Limpar os campos após o cadastro
          emailInput.value = '';
          passwordInput.value = '';

          // Se precisar realizar alguma ação adicional após o cadastro, faça aqui
        } else {
          throw new Error('Erro na requisição. Status: ' + xhr.status);
        }
      }
    } catch (error) {
      alert('Erro ao enviar dados para o servidor: ' + error.message);
    }
  };

  xhr.send(params);
}

function abrirMenu() {
  document.getElementById('menuLateral').style.width = '250px';
}

function fecharMenu() {
  document.getElementById('menuLateral').style.width = '0';
}
