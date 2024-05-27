function showForm(formName) {
    document.getElementById('createForm').style.display = 'none';
    document.getElementById('updateForm').style.display = 'none';
    document.getElementById('userTypeButtons').style.display = 'none';
    document.querySelector('.menu').style.display = 'none';
    
    if (formName === 'create') {
        document.getElementById('userTypeButtons').style.display = 'block';
        document.querySelector('.back-button').style.display = 'none'; // Esconde o botão 'Voltar' durante a escolha do tipo
    } else {
        document.getElementById(formName + 'Form').style.display = 'block';
        document.querySelector('.back-button').style.display = 'inline-block'; // Mostra o botão 'Voltar' quando está em 'update' ou depois de selecionar o tipo
    }
}

function setUserType(type) {
    // Esconder os botões de escolha de tipo de usuário
    document.getElementById('userTypeButtons').style.display = 'none';

    // Esconder todos os formulários primeiro
    document.getElementById('createForm').style.display = 'none';
    document.getElementById('createFormProfessor').style.display = 'none';
    document.getElementById('createFormSecretaria').style.display = 'none';

    // Mostrar o formulário correto e o botão de voltar
    var form;
    switch (type) {
        case 'aluno':
            form = document.getElementById('createForm');
            break;
        case 'professor':
            form = document.getElementById('createFormProfessor');
            break;
        case 'secretaria':
            form = document.getElementById('createFormSecretaria');
            break;
    }

    if (form) {
        form.style.display = 'block';  // Mostra o formulário de Aluno, Professor ou Secretaria
        document.querySelector('.back-button').style.display = 'inline-block'; // Garante que o botão 'Voltar' está visível
    }
}


function resetForm() {
    document.querySelector('.menu').style.display = 'block';
    document.getElementById('createForm').style.display = 'none';
    document.getElementById('createFormProfessor').style.display = 'none';
    document.getElementById('createFormSecretaria').style.display = 'none';
    document.getElementById('updateForm').style.display = 'none';
    document.querySelector('.back-button').style.display = 'none';
    window.location.href = 'http://localhost/estagio/xxx/index.html';
}

