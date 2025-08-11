const adicionar = () => {
    const novaTarefa = document.getElementById("novaTarefa").value;

    if (novaTarefa.trim() === "") {
        alert("Por favor, digite uma tarefa válida.");
        return;
    }

    const listaTarefas = document.getElementById("listaTarefas");

    const item = document.createElement("li");
    const textoTarefa = document.createTextNode(novaTarefa);

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.className = "delete-btn";

    botaoExcluir.addEventListener("click", function() {
        listaTarefas.removeChild(item);
    }   

    item.addEventListener   ("click", function() {
        item.classList.toggle("completed");
    });

    
