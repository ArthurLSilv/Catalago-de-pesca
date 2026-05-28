# 🎣 Catálogo do Pescador

Sistema web de catálogo de peixes para pescadores. Permite cadastrar, visualizar, atualizar e deletar registros de peixes com informações como categoria, tamanho, peso, isca ideal e imagem.

---

## 🖥️ Tecnologias utilizadas

- **Frontend:** HTML, CSS, JavaScript (Vanilla)
- **Backend:** PHP
- **Banco de dados:** MySQL
- **Servidor:** Apache (XAMPP / LAMP)

---

## ⚙️ Como rodar o projeto

### Pré-requisitos

- PHP 7.4 ou superior
- MySQL 5.7 ou superior
- Apache (XAMPP, LAMP ou similar)

### Passo a passo

**1. Clone o repositório**
```bash
git clone https://github.com/ArthurLSilv/Catalago-de-pesca.git
```

**2. Mova a pasta para o diretório do servidor**

- XAMPP (Windows): `C:/xampp/htdocs/catalogo`
- LAMP (Linux): `/var/www/html/catalogo`

**3. Configure o banco de dados**

No phpMyAdmin (ou MySQL), crie um banco chamado `catalago_pesca` e execute o SQL abaixo para criar a tabela:

```sql
CREATE TABLE peixes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(100) NOT NULL,
    tamanho VARCHAR(100) NOT NULL,
    peso VARCHAR(100) NOT NULL,
    isca VARCHAR(100) NOT NULL,
    descricao VARCHAR(300) NOT NULL,
    imagem VARCHAR(255)
);
```

**4. Configure a conexão**

Copie o arquivo de exemplo e preencha com suas credenciais:
```bash
cp back/conexao.example.php back/conexao.php
```

Abra `back/conexao.php` e edite:
```php
$host    = "localhost";
$usuario = "seu_usuario";   // ex: root
$senha   = "sua_senha";
$banco   = "catalago_pesca";
```

**5. Permissão da pasta de uploads**

```bash
chmod 777 uploads/
```

**6. Acesse no navegador**

```
http://localhost/catalogo/index.html
```

---

## 📁 Estrutura do projeto

```
catalogo/
├── index.html          # Página principal (listagem de peixes)
├── index.js            # JavaScript da página principal
├── back/
│   ├── conexao.php         # Configuração do banco (não versionado)
│   ├── conexao.example.php # Modelo de configuração
│   ├── listar.php          # Retorna todos os peixes (JSON)
│   ├── cadastro.php        # Cadastra novo peixe
│   ├── atualizar.php       # Atualiza peixe existente
│   └── deletar.php         # Deleta peixe
├── front/
│   ├── style.css           # Estilos globais (inclui dark mode)
│   ├── cadastrar.html      # Formulário de cadastro
│   ├── cadastrar.js        # Validação do formulário
│   ├── atualizar.html      # Formulário de atualização
│   └── atualizar.js        # Preenche campos com dados da URL
├── imagens/
│   └── logoT.png           # Logo do sistema
└── uploads/                # Imagens enviadas pelos usuários
```

---

## ✨ Funcionalidades

- Listagem de peixes em cards com imagem
- Cadastro de novo peixe com upload de imagem
- Atualização de dados e imagem
- Exclusão com confirmação
- Modal "Ver mais detalhes" para cada peixe
- Filtro por nome em tempo real
- Busca lateral no aside
- Peixe aleatório (sorteio)
- Curiosidade do dia (rotativa)
- **Dark mode** com persistência via localStorage
- Layout responsivo para mobile e tablet

---

## 👨‍💻 Autor

Desenvolvido por **Arthur Leonardo da Silva**  
Estudante de Engenharia — Faculdade Camporeal
