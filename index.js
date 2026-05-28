// dark mode
if (localStorage.getItem("darkMode") === "true") document.body.classList.add("dark");

document.getElementById("btnDarkMode").addEventListener("click", function () {
    document.body.classList.toggle("dark");
    const ativo = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", ativo);
    this.textContent = ativo ? "☀️" : "🌙";
});

if (localStorage.getItem("darkMode") === "true") {
    document.getElementById("btnDarkMode").textContent = "☀️";
}

let dadosOriginais = [];

carregarDados();

async function carregarDados() {
    const resposta = await fetch("back/listar.php");

    dadosOriginais = await resposta.json();

    montarCards(dadosOriginais);
}



function montarCards(listaDeDados){
    const container = document.getElementById("containerCards");
    container.innerHTML = "";

    if(listaDeDados.length === 0){
        container.innerHTML = "<p>Nenhum registro encontrado</p>";
        return;
    }

    listaDeDados.forEach((item) => {
        const card = document.createElement("div");
        card.className = "card";

        const imagem = document.createElement("img");
        imagem.src = item.imagem ? `uploads/${item.imagem}` : "imagens/images.jpeg";
        imagem.alt = item.nome;
        imagem.className = "card-img";

        const cardInfo = document.createElement("div");
        cardInfo.className = "card-info";

        const titulo = document.createElement("h3");
        titulo.textContent = item.nome;
        titulo.className = "card-nome";

        const categoria = document.createElement("span");
        categoria.textContent = item.categoria;
        categoria.className = "card-categoria";

        const descricao = document.createElement("p");
        descricao.textContent = item.descricao;
        descricao.className = "card-descricao";

        const detalhes = document.createElement("div");
        detalhes.className = "card-detalhes";

        const spanTamanho = document.createElement("span");
        spanTamanho.textContent = `📏 ${item.tamanho}`;

        const spanPeso = document.createElement("span");
        spanPeso.textContent = `⚖️ ${item.peso}`;

        const spanIsca = document.createElement("span");
        spanIsca.textContent = `🎣 Isca: ${item.isca}`;

        detalhes.appendChild(spanTamanho);
        detalhes.appendChild(spanPeso);
        detalhes.appendChild(spanIsca);

        const linkVerMais = document.createElement("div");
        linkVerMais.className = "link-ver-mais";
        linkVerMais.innerHTML = `<span>🔍</span><span>Ver mais detalhes</span>`;
        linkVerMais.onclick = function () {
            abrirModal(item);
        };

        const divBotoes = document.createElement("div");
        divBotoes.className = "btn-acoes";

        const btnAtualizar = document.createElement("button");
        btnAtualizar.textContent = "Atualizar";
        btnAtualizar.className = "btn-atualizar";
        btnAtualizar.onclick = function (){
            const url = `front/atualizar.html?id=${item.id}&nome=${encodeURIComponent(item.nome)}&categoria=${encodeURIComponent(item.categoria)}&tamanho=${encodeURIComponent(item.tamanho)}&peso=${encodeURIComponent(item.peso)}&isca=${encodeURIComponent(item.isca)}&descricao=${encodeURIComponent(item.descricao)}&imagem=${encodeURIComponent(item.imagem)}`;
            window.location.href = url;
        };

        const btnDeletar = document.createElement("button");
        btnDeletar.textContent = "Deletar";
        btnDeletar.className = "btn-deletar";
        btnDeletar.onclick = async function () {
            if(confirm(`Tem certeza que deseja deletar ${item.nome}?`)){
                await fetch(`back/deletar.php?id=${item.id}`);
                carregarDados();
            }
        };

        divBotoes.appendChild(btnAtualizar);
        divBotoes.appendChild(btnDeletar);

        cardInfo.appendChild(titulo);
        cardInfo.appendChild(categoria);
        cardInfo.appendChild(descricao);
        cardInfo.appendChild(detalhes);
        cardInfo.appendChild(linkVerMais);
        cardInfo.appendChild(divBotoes);

        card.appendChild(imagem);
        card.appendChild(cardInfo);

        container.appendChild(card);
    });
}

// modal
function abrirModal(peixe) {
    document.getElementById("modalImagem").src = peixe.imagem ? `uploads/${peixe.imagem}` : "imagens/images.jpeg";
    document.getElementById("modalImagem").alt = peixe.nome;
    document.getElementById("modalNome").textContent = peixe.nome;
    document.getElementById("modalCategoria").textContent = peixe.categoria;
    document.getElementById("modalDescricao").textContent = peixe.descricao;
    document.getElementById("modalTamanho").textContent = `📏 ${peixe.tamanho}`;
    document.getElementById("modalPeso").textContent = `⚖️ ${peixe.peso}`;
    document.getElementById("modalIsca").textContent = `🎣 Isca: ${peixe.isca}`;
    document.getElementById("modalOverlay").classList.add("ativo");
}

document.getElementById("modalFechar").addEventListener("click", function () {
    document.getElementById("modalOverlay").classList.remove("ativo");
});

document.getElementById("modalOverlay").addEventListener("click", function (e) {
    if (e.target === this) {
        this.classList.remove("ativo");
    }
});

// peixe aleatório
document.getElementById("btnSortear").addEventListener("click", function () {
    if (dadosOriginais.length === 0) {
        alert("Nenhum peixe cadastrado para sortear.");
        return;
    }

    const indice = Math.floor(Math.random() * dadosOriginais.length);
    const peixe = dadosOriginais[indice];

    const resultado = document.getElementById("resultadoAleatorio");
    resultado.innerHTML = `
        <img src="uploads/${peixe.imagem}" alt="${peixe.nome}" class="sorteio-img">
        <p class="sorteio-nome">${peixe.nome}</p>
        <p class="sorteio-categoria">${peixe.categoria}</p>
        <p class="sorteio-detalhe">📏 ${peixe.tamanho}</p>
        <p class="sorteio-detalhe">🎣 Isca: ${peixe.isca}</p>
    `;
});

// curiosidade do dia
const curiosidades = [
    "🐟 O pirarucu pode passar de 2 metros de comprimento e é um dos maiores peixes de água doce do mundo.",
    "🎣 O dourado é considerado o 'rei dos rios' e pode nadar a até 60 km/h em velocidade máxima.",
    "🌊 O tubarão-baleia é o maior peixe do oceano, podendo medir mais de 12 metros.",
    "🐠 Os peixes-palhaço são todos machos ao nascer. O dominante do grupo se torna fêmea quando necessário.",
    "🐡 O baiacu infla o corpo com água ou ar como mecanismo de defesa contra predadores.",
    "🦈 O tubarão não tem ossos — seu esqueleto é feito inteiramente de cartilagem.",
    "🐟 A piranha tem dentes tão afiados que os índios os usavam como ferramentas de corte.",
    "🌿 O tambaqui se alimenta principalmente de frutos e sementes que caem no rio.",
    "🐬 O boto-cor-de-rosa é o maior golfinho de água doce do mundo e vive na Amazônia.",
    "🎣 A traíra pode sobreviver fora da água por várias horas graças à sua resistência fisiológica.",
];

const hoje = new Date();
const diaDoAno = Math.floor((hoje - new Date(hoje.getFullYear(), 0, 0)) / 86400000);
const indiceCuriosidade = diaDoAno % curiosidades.length;

document.getElementById("textoCuriosidade").textContent = curiosidades[indiceCuriosidade];

///filtro
const campoFiltro = document.getElementById("campoFiltro");

campoFiltro.addEventListener("input", function (event){
    const termoBuscado = event.target.value.toLowerCase();

    const dadosFiltrados = dadosOriginais.filter((item) => {
        return item.nome.toLowerCase().includes(termoBuscado);
    });

    montarCards(dadosFiltrados);
});

const campoBuscarAside = document.getElementById("campoBuscarAside");
campoBuscarAside.addEventListener("input", function(event) {
    const termoBuscado = event.target.value.toLowerCase();
    const dadosFiltrados = dadosOriginais.filter((item) => {
        return item.nome.toLowerCase().includes(termoBuscado);
    });
    montarCards(dadosFiltrados);
});