# 📝 Blog Fullstack - React + Rails API

![GitHub repo size](https://img.shields.io/github/repo-size/Marcelo-C-Silva/blog)
![GitHub language count](https://img.shields.io/github/languages/count/Marcelo-C-Silva/blog)
![GitHub top language](https://img.shields.io/github/languages/top/Marcelo-C-Silva/blog)


Blog Fullstack feito com **React** no frontend e **Rails API** no backend.  
Permite criar, listar, editar e apagar posts, consumindo uma API REST em JSON.

---

## 🗂️ Estrutura do Projeto

```
meu-blog/
│── backend/   # Rails API
│── frontend/  # React
└── README.md
```

---

## ⚙️ Tecnologias

- **Backend**: Ruby on Rails (API-only)  
- **Frontend**: React + Axios + Vite  
- **Banco de dados**: PostgreSQL  
- **Comunicação**: API REST JSON  

---

## 🚀 Funcionalidades

- Criar posts  
- Listar posts  
- Editar posts  
- Apagar posts  
- Frontend consumindo API Rails em JSON  

---

## 💻 Setup do Backend (Rails API)

1. Entre na pasta do backend:

```bash
cd blog-backend
```

2. Instale as gems:

```bash
bundle install
```

3. Configure o banco de dados (PostgreSQL):

```bash
rails db:create
rails db:migrate
```

4. Rode o servidor Rails:

```bash
rails s
```

➡️ Backend disponível em: `http://localhost:3000`

---

## 💻 Setup do Frontend (React)

1. Entre na pasta do frontend:

```bash
cd blog-frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Rode o frontend:

```bash
npm run dev
```

➡️ Frontend disponível em: `http://localhost:5173`

---

## 🔗 Comunicação Frontend ↔ Backend

- React utiliza **axios** para enviar requisições HTTP (`GET`, `POST`, `PATCH`, `DELETE`) para a API Rails.  
- Rails retorna **JSON** com os dados dos posts.  
- React atualiza a tela automaticamente com **useState** e **useEffect**.  

---

## 📌 Endpoints da API

| Método | Endpoint    | Função                     |
| ------ | ----------- | -------------------------- |
| GET    | /posts      | Lista todos os posts       |
| GET    | /posts/:id  | Retorna um post específico |
| POST   | /posts      | Cria um novo post          |
| PATCH  | /posts/:id  | Atualiza um post existente |
| DELETE | /posts/:id  | Apaga um post              |

---


## 📝 Como Contribuir

1. Faça um fork do projeto  
2. Crie uma branch para sua feature:

```bash
git checkout -b minha-feature
```

3. Faça commit das mudanças:

```bash
git commit -m "Descrição da feature"
```

4. Envie para o repositório remoto:

```bash
git push origin minha-feature
```

5. Abra um Pull Request 🚀  

---

## 📚 Aprendizado

Este projeto é ideal para estudo de:

- Estrutura de projetos **fullstack**  
- Consumo de **APIs REST com React**  
- CRUD completo com **Rails API**  
- Comunicação **frontend/backend** via JSON  

---

## 🏷️ Licença

Este projeto está sob a licença [MIT](LICENSE).  
