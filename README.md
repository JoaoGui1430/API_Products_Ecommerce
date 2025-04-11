
# 🛒 API de Produtos para E-commerce

Este é um projeto de backend para um sistema de e-commerce, responsável por gerenciar produtos. Desenvolvido com Node.js, Express e MongoDB, esta API fornece endpoints RESTful para criar, ler, atualizar e deletar produtos.

## 📦 Funcionalidades

- Cadastro de novos produtos
- Listagem de todos os produtos
- Consulta de produto por ID
- Atualização de informações do produto
- Exclusão de produtos

## 🛠 Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB / Mongoose
- JavaScript (ES6+)
- [Joi, dotenv, etc. se aplicável]

## 🚀 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/JoaoGui1430/API_Products_Ecommerce.git
```

2. Acesse o diretório do projeto:

```bash
cd API_Products_Ecommerce
```

3. Instale as dependências:

```bash
npm install
```

4. Configure o arquivo `.env` com as variáveis necessárias (ex: conexão com o MongoDB)

5. Inicie o servidor:

```bash
npm run dev
```

## 📁 Estrutura do Projeto

```
API_Products_Ecommerce/
│
├── controllers/
├── models/
├── routes/
├── .env
├── server.js
└── package.json
```

## 📮 Endpoints Exemplo

- `GET /products` → Lista todos os produtos
- `GET /products/:id` → Retorna um produto específico
- `POST /products` → Cria um novo produto
- `PUT /products/:id` → Atualiza um produto
- `DELETE /products/:id` → Remove um produto

## 🤝 Contribuições

Contribuições são bem-vindas! Fique à vontade para abrir issues ou enviar pull requests.

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, estudar e adaptar para seus próprios fins.
---

Feito com ❤️ por [João Guilherme](https://github.com/JoaoGui1430)
