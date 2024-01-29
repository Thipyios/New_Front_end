Exercício | FRONT-END
------------


- Crie um gerenciador permanente de tarefas no navegador

- Crie um formulário com o campo tarefa e um botão de adicionar tarefa

- Crie um elemento <ul> com o atributo id=“listaTarefas"

- Crie uma classe Tarefa que recebe como parâmetro do construtor, o nome da tarefa

- Crie uma função adicionaTarefaDOM que recebe um objeto Tarefa e adiciona em listaTarefas do HTML.

- Crie uma função adicionaTarefaNoStorage que recebe um objeto Tarefa, recupera as tarefas do localStorage (se houver) e adiciona a nova tarefa. Considere armazenar as tarefas no localStorage como um array [] de objetos JSO.

- Associe um evento ao botão de adicionar que ao ser clicado ele deve pegar o valor do campo tarefa, criar um objeto Tarefa, chamar a função adicionaTarefaDOM e adicionaTarefaNoStorage e por fim limpar o campo tarefa do formulário.