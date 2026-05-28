<?php
include 'conexao.php';

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $id = $_POST['id'];
    $nome = $_POST['nome'];
    $categoria = $_POST['categoria'];
    $tamanho = $_POST['tamanho'];
    $peso = $_POST['peso'];
    $isca = $_POST['isca'];
    $descricao = mb_substr($_POST['descricao'], 0, 300);
    $imagem = $_POST['imagemAtual'];

    if(isset($_FILES['imagem']) && $_FILES['imagem']['error'] === 0){
        $nomeArquivo = uniqid() . "_" . basename($_FILES['imagem']['name']);
        move_uploaded_file($_FILES['imagem']['tmp_name'], "../uploads/" . $nomeArquivo);
        $imagem = $nomeArquivo;
    }

    $sql = "UPDATE peixes SET nome=?, categoria=?, tamanho=?, peso=?, isca=?, descricao=?, imagem=? WHERE id=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssssi", $nome, $categoria, $tamanho, $peso, $isca, $descricao, $imagem, $id);

    if($stmt->execute()){
        header ("Location: ../index.html");
    }else {
        echo "Erro: " . $stmt->error;
    }
    $stmt->close();
}

$conn->close();
?>