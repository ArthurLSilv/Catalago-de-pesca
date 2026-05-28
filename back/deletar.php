<?php
include 'conexao.php';


if(isset($_GET['id'])){
    $id = $_GET['id'];
    $sql = "DELETE FROM peixes WHERE id=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $stmt->close();
}

$conn->close();
?>