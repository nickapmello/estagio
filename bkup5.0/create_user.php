<?php
include 'db.php';
include 'functions.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $telefone = $_POST['telefone'];
    $senha = $_POST['senha'];
    $endereco = $_POST['endereco'];
    $status = $_POST['status'];
    $tipo = isset($_POST['tipo']) && $_POST['tipo'] == 'professor' ? 'professor' : 'aluno';

    $matricula = gerarMatricula($conn);

    $sqlInsert = "INSERT INTO $tipo (nome, telefone, senha, endereco, matricula, status) VALUES (?, ?, ?, ?, ?, ?)";
    $stmtInsert = $conn->prepare($sqlInsert);
    $stmtInsert->bind_param("ssssss", $nome, $telefone, $senha, $endereco, $matricula, $status);
    $stmtInsert->execute();

    if ($stmtInsert->affected_rows > 0) {
        echo "<script>alert('Registro criado com sucesso!'); window.location.href = 'http://localhost/estagio/index.html';</script>";
    } else {
        echo "Erro ao criar registro: " . $stmtInsert->error;
    }

    $stmtInsert->close();
    $conn->close();
}
?>
