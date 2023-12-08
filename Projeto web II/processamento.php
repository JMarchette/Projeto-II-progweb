<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
// Recupere os dados do formulário
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    if (empty($email) || empty($password)) {
        echo 'Por favor, preencha todos os campos.';
        exit();
    }


    $email = htmlspecialchars($email);
    $password = htmlspecialchars($password);

    echo 'Cadastro realizado para o email: ' . $email;
} else {
    // Se não for uma solicitação POST, redirecione ou forneça uma mensagem de erro
    echo 'Acesso não autorizado.';
}
?>
