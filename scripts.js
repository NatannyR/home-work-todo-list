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
    const textoSpan = document.createElement("span");
    textoSpan.textContent = texto;

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";

    botaoExcluir.onclick = function () {
      novoItem.remove();
    };

    novoItem.appendChild(textoSpan);
    novoItem.appendChild(botaoExcluir);
    lista.appendChild(novoItem);
    input.value = "";
  }
});
