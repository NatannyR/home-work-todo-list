    const adicionar = document.getElementById("adicionarbtn");
    adicionar.addEventListener("click", () => {
        const input = document.getElementById("novatarefa");
        const texto = input.value;
        const lista = document.getElementById("listatarefas");

    if (texto.trim() === "") {
        alert("insira alguma coisa");
        return;

    } else {
        const novoItem = document.createElement("li");
        novoItem.textContent = texto;
        lista.appendChild(novoItem);
        input.value = "";
    }
    });


