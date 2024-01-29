class Tarefa {
    constructor(nome) {
        this.nome = nome;
    }
}

function adicionaTarefaDOM(tarefa) {
    const lista = document.getElementById('listaTarefas');
    const li = document.createElement('li');
    li.textContent = tarefa.nome;
    li.dataset.id = tarefa.nome; // To track each task by its name

    const buttonRemove = document.createElement('button');
    buttonRemove.textContent = 'Remover';
    buttonRemove.addEventListener('click', function() {
        removeTarefa(tarefa.nome);
    });

    li.appendChild(buttonRemove);
    lista.appendChild(li);
}

function adicionaTarefaNoStorage(tarefa) {
    let tarefas = [];

    if (localStorage.getItem('tarefas')) {
        tarefas = JSON.parse(localStorage.getItem('tarefas'));
    }

    tarefas.push(tarefa);

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function removeTarefa(nomeTarefa) {
    let tarefas = [];

    if (localStorage.getItem('tarefas')) {
        tarefas = JSON.parse(localStorage.getItem('tarefas'));
    }

    const filteredTarefas = tarefas.filter(function(tarefa) {
        return tarefa.nome !== nomeTarefa;
    });

    localStorage.setItem('tarefas', JSON.stringify(filteredTarefas));

    const li = document.querySelector(`li[data-id="${nomeTarefa}"]`);
    li.parentElement.removeChild(li);
}

document.getElementById('formTarefa').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const inputTarefa = document.getElementById('inputTarefa');
    const nomeTarefa = inputTarefa.value.trim();

    if (nomeTarefa !== '') {
        const novaTarefa = new Tarefa(nomeTarefa);

        adicionaTarefaDOM(novaTarefa);
        adicionaTarefaNoStorage(novaTarefa);

        inputTarefa.value = ''; 
    }
});

window.addEventListener('load', function() {
    let tarefas = [];

    if (localStorage.getItem('tarefas')) {
        tarefas = JSON.parse(localStorage.getItem('tarefas'));

        tarefas.forEach(function(tarefa) {
            const novaTarefa = new Tarefa(tarefa.nome);
            adicionaTarefaDOM(novaTarefa);
        });
    }
});