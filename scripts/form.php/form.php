<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $mensagem = $_POST['msg'];
    
    // Configurações para enviar e-mail
    $destinatario = "carlosmoronisud@gmail.com"; // Substitua pelo seu endereço de e-mail
    $assunto = "Formulário de Contato - Larcon Planejados";
    $mensagem_formatada = "Nome: $nome\n";
    $mensagem_formatada .= "Email: $email\n";
    $mensagem_formatada .= "Telefone: $tel\n";
    $mensagem_formatada .= "Mensagem: $mensagem\n";
    
    // Envia o e-mail
    if (mail($destinatario, $assunto, $mensagem_formatada)) {
        echo "O e-mail foi enviado com sucesso.";
    } else {
        echo "Ocorreu um erro ao enviar o e-mail.";
    }
} else {
    echo "Este arquivo não pode ser acessado diretamente.";
}
?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $mensagem = $_POST['msg'];
    
    // Configurações para enviar e-mail
    $destinatario = "seu_email@example.com"; // Substitua pelo seu endereço de e-mail
    $assunto = "Formulário de Contato - Larcon Planejados";
    $mensagem_formatada = "Nome: $nome\n";
    $mensagem_formatada .= "Email: $email\n";
    $mensagem_formatada .= "Telefone: $tel\n";
    $mensagem_formatada .= "Mensagem: $mensagem\n";
    
    // Envia o e-mail
    if (mail($destinatario, $assunto, $mensagem_formatada)) {
        echo "O e-mail foi enviado com sucesso.";
    } else {
        echo "Ocorreu um erro ao enviar o e-mail.";
    }
} else {
    echo "Este arquivo não pode ser acessado diretamente.";
}
?>
