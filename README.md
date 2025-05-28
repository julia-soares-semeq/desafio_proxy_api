# Desafio API

Proxy API que consome dados de um endpoint da platadorma Portal Stream. Utiliza autenticação via token JWT e faz três chamadas autenticadas aos recursos disponíveis.

## Requisitos para rodar o projeto

## 🔧 Setup de ambiente

### 1.Clone o repositório

```bash
git clone "https://github.com/julia-soares-semeq/desafio_api/"
cd desafio_api
```

### 2. Instale dependências

Backend
🐍 [Python](https://www.python.org/downloads/)

Durante a instalação

- Marque a opção **"Add Python to PATH"**

- Escolha a versão 3.10 ou superior

Frontend
🌳[Node.js](https://nodejs.org/en/download)

### 3. Instale o servidor

Dentro do terminal, cmd ou powershell rode:

```bash
pip install uvicorn
```

Para instalar com dependencias minimas:

```bash
pip install 'uvicorn[standard]'
```

## 🚀 Como rodar na minha maquina

### Backend

Dentro de app, rode:

```bash
cd app
uvicorn app.main:app --reload
```

## Frontend

Em outro terminal, rode:

```bash
cd \desafio\frontend
npm run dev
```

## Como me localizar no projeto?

