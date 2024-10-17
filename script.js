const novaNotaInput = document.getElementById("novaNota");
const adicionarNotaButton = document.getElementById("adicionarNota");
const listaNotas = document.getElementById("listaNotas");

adicionarNotaButton.addEventListener("click", () => {
    const novaNota = novaNotaInput.value.trim();

    if (novaNota !== "") {
        const novoItem = document.createElement("li");
        novoItem.textContent = novaNota;

        const botaoExcluir = document.createElement("button");
        botaoExcluir.classList.add("excluir");
        botaoExcluir.textContent = "Excluir";

        botaoExcluir.addEventListener("click", () => {
            listaNotas.removeChild(novoItem);
        });

        novoItem.appendChild(botaoExcluir);
        listaNotas.appendChild(novoItem);
        novaNotaInput.value = ""; // Limpa o campo de entrada
    }
});
