document.getElementById("btnDarkMode").addEventListener("click", function () {
    document.body.classList.toggle("dark");
    const ativo = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", ativo);
    this.textContent = ativo ? "☀️" : "🌙";
});
if (localStorage.getItem("darkMode") === "true") {
    document.getElementById("btnDarkMode").textContent = "☀️";
}

const formCadastro = document.getElementById("formCadastro");

formCadastro.addEventListener("submit", function (event){
    const campoNome = document.getElementById("nome");
    const campoCategoria = document.getElementById("categoria");
    const campoTamanho = document.getElementById("tamanho");
    const campoPeso = document.getElementById("peso");
    const campoIsca = document.getElementById("isca");
    const campoDescricao = document.getElementById("descricao");
    const campoImagem = document.getElementById("imagem");

    const nome = campoNome.value.trim();
    const categoria = campoCategoria.value.trim();
    const tamanho = campoTamanho.value.trim();
    const peso = campoPeso.value.trim();
    const isca = campoIsca.value.trim();
    const descricao = campoDescricao.value.trim();

    if(nome === "" || categoria === "" || tamanho === "" || peso === "" || isca === "" || descricao === "" || campoImagem.files.length === 0){
        event.preventDefault();

        alert("Por favor, preencha todos os campos antes de cadastrar.");
    }
})