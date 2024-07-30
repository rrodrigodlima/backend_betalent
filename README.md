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
### User
- POST /signup: Cadastro de usuário
- POST /login: Login do usuário
```
  {
  "email": "usuario@exemplo.com",
  "senha": "sua-senha"
  }
```

### Clientes
- GET /clients: Listar todos os clientes
- GET /clients/:id: Detalhar um cliente e suas vendas
- POST /clients: Adicionar um cliente
- PUT /clients/:id: Editar um cliente
- DELETE /clients/:id: Excluir um cliente
```
{
  "nome": "Nome do Cliente",
  "cpf": "123.456.789-00",
  "endereco": {
    "rua": "Rua Exemplo",
    "numero": "123",
    "bairro": "Bairro",
    "cidade": "Cidade",
    "estado": "Estado",
    "cep": "00000-000"
  },
  "telefones": [
    {
      "cliente": "1",
      "numero": "123456789"
    }
  ]
}  
```

### Produtos
- GET /products: Listar todos os produtos
- GET /products/:id: Detalhar um produto
- POST /products: Adicionar um produto
- PUT /products/:id: Editar um produto
- DELETE /products/:id: Exclusão lógica de um produto
```
{
  "nome": "Nome do Produto",
  "price": 100.00,
  "description": "Descrição do Produto"
}  
```

### Vendas
- POST /sales: Registrar uma venda
```
{
  "cliente_id": 1,
  "produto_id": 1,
  "quantidade": 2,
  "preco_unitario": 50.00,
  "preco_total": 100.00,
  "data": "2024-07-29T00:00:00Z"
}

```

### Autenticação
- Para acessar as rotas protegidas, você precisa incluir o token JWT no cabeçalho da requisição:

### Licença
- Este projeto está licenciado sob a Licença MIT.
