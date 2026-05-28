<?php
// Copie este arquivo para conexao.php e preencha com suas credenciais
$host = "localhost";
$usuario = "SEU_USUARIO";
$senha = "SUA_SENHA";
$banco = "SEU_BANCO";

$conexao = new mysqli($host, $usuario, $senha, $banco);

if ($conexao->connect_error) {
    die("Erro na conexão: " . $conexao->connect_error);
}

$conexao->set_charset("utf8");
