document.getElementById("btnDarkMode").addEventListener("click", function () {
    document.body.classList.toggle("dark");
    const ativo = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", ativo);
    this.textContent = ativo ? "☀️" : "🌙";
});
if (localStorage.getItem("darkMode") === "true") {
    document.getElementById("btnDarkMode").textContent = "☀️";
}

const parametrosDaUrl = new URLSearchParams(window.location.search);

const CampoID = document.getElementById("idAtualizar");
const CampoNome = document.getElementById("nomeAtualizar");
const CampoCategoria = document.getElementById("categoriaAtualizar");
const CampoTamanho = document.getElementById("tamanhoAtualizar");
const CampoPeso = document.getElementById("pesoAtualizar");
const CampoIsca = document.getElementById("iscaAtualizar");
const CampoDescricao = document.getElementById("descricaoAtualizar");
const CampoImagemAtual = document.getElementById("imagemAtualInput");

CampoID.value = parametrosDaUrl.get("id");
CampoNome.value = parametrosDaUrl.get("nome");
CampoCategoria.value = parametrosDaUrl.get("categoria");
CampoTamanho.value = parametrosDaUrl.get("tamanho");
CampoPeso.value = parametrosDaUrl.get("peso");
CampoIsca.value = parametrosDaUrl.get("isca");
CampoDescricao.value = parametrosDaUrl.get("descricao");
CampoImagemAtual.value = parametrosDaUrl.get("imagem");

