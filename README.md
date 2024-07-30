# Teste Técnico Back-End BeTalent

## Descrição

Este projeto é uma API RESTful desenvolvida com AdonisJS 6 (Node.js) que permite o gerenciamento de usuários, clientes, produtos e vendas. A API utiliza JWT para autenticação e MySQL como banco de dados.

## Tecnologias Utilizadas

- **AdonisJS 6**: Framework para desenvolvimento de aplicações Node.js.
- **TypeScript**: Linguagem de programação usada para a construção do projeto.
- **JWT**: JSON Web Tokens para autenticação.
- **MySQL**: Banco de dados relacional.
- **Vine**: Biblioteca de validação.

## Instalação
1. Clone o repositório
2. Instale as dependências: `npm install`
3. Configure o arquivo `.env` com suas credenciais do MySQL
4. Rode as migrações: `node ace migration:run`
5. Inicie o servidor: `npm run dev`

## Rotas
### Autenticação
- POST /signup: Cadastro de usuário
- POST /login: Login do usuário

### Clientes
- GET /clients: Listar todos os clientes
- GET /clients/:id: Detalhar um cliente e suas vendas
- POST /clients: Adicionar um cliente
- PUT /clients/:id: Editar um cliente
- DELETE /clients/:id: Excluir um cliente

### Produtos
- GET /products: Listar todos os produtos
- GET /products/:id: Detalhar um produto
- POST /products: Adicionar um produto
- PUT /products/:id: Editar um produto
- DELETE /products/:id: Exclusão lógica de um produto

### Vendas
- POST /sales: Registrar uma venda
