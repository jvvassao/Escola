const DOMStrings = {
    btn: '#btn-aluno',
    adicionaAluno: '#adiciona-aluno',
    tabelaAluno: '#tabela-aluno',
    error: '#notice'
}

document.querySelector(DOMStrings.btn).addEventListener('click', function(e) {
    e.preventDefault();
    let form = document.querySelector(DOMStrings.adicionaAluno);

    if (form.inputNome.value === '' || form.inputData.value === '' || form.inputCpf.value === '') {
        return document.querySelector(DOMStrings.error).innerHTML = 'É necessário preencher todos os campos para cadastrar'
    }


    let aluno = criaAluno(form);

    var alunoTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var nascimentoTd = document.createElement("td");
    var cpfTd = document.createElement("td");

    nomeTd.textContent = aluno.nome;
    nascimentoTd.textContent = aluno.dataNascimento;
    cpfTd.textContent = aluno.cpf;


    alunoTr.appendChild(nomeTd);
    alunoTr.appendChild(nascimentoTd);
    alunoTr.appendChild(cpfTd);

    var tabelaAluno = document.querySelector(DOMStrings.tabelaAluno);
    tabelaAluno.appendChild(alunoTr);

    document.querySelector(DOMStrings.error).innerHTML = '';

    form.reset();
    form.inputNome.focus();
})

function criaAluno(form) {
    let aluno = {
        nome: form.inputNome.value,
        dataNascimento: dataBrasil(form.inputData.value),
        cpf: form.inputCpf.value
    }

    return aluno;
}

function dataBrasil(data) {
    return data.split('-').reverse().join('/');
}
