# 🖼️✨ Artworks Gallery App — The MET Edition

Bem-vindo ao **Artworks Gallery**, um app em React que consome a incrível API pública do [The Metropolitan Museum of Art (The MET)](https://collectionapi.metmuseum.org/public/collection/v1) 🎨🏛️.  
Este projeto exibe **obras de arte únicas por artista**, garantindo variedade e beleza a cada clique!

---

## 🚀 Tecnologias Utilizadas

- ⚛️ [React](https://reactjs.org/)
- 🌐 [Axios](https://axios-http.com/)
- ⚡ [Vite](https://vitejs.dev/) (opcional)
- 🎨 [Tailwind CSS](https://tailwindcss.com/) (opcional)
- 🖼️ [The MET Collection API](https://collectionapi.metmuseum.org/public/collection/v1)

---

## 📦 Como Rodar o Projeto

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# 2. Acesse a pasta do projeto
cd nome-do-projeto

# 3. Instale as dependências
npm install

# 4. Inicie o projeto
npm run dev
```

---

## 🧠 Funcionalidades

✅ Busca de IDs aleatórios de obras de arte  
✅ Exibição de no máximo **1 obra por artista**  
✅ Botão para atualizar a galeria com novas imagens  
✅ Requisições separadas no arquivo `services/axios.jsx`  
✅ Componente visual separado em `components/ArtworksList.jsx`  

---

## 🗂️ Estrutura do Projeto

```
src/
├── components/
│   └── ArtworksList.jsx       # Componente da galeria
├── services/
│   └── axios.jsx              # Função de busca com Axios
├── App.jsx                    # App principal
├── App.css                    # Estilização (opcional)
└── main.jsx                   # Ponto de entrada
```

---

## 🔁 Como funciona a API?

A API do MET possui dois endpoints principais:

- `/objects` → retorna todos os IDs das obras 🆔  
- `/objects/{id}` → retorna os dados detalhados de uma obra 🖼️

---

## 📸 Demonstração

![Preview do App](./preview.png)

📷 Exemplo de exibição de obras únicas por artista.

---

## ✍️ Autor

Desenvolvido com 💙 por [Seu Nome](https://github.com/seu-usuario)

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License**.

---

## 📎 Link da API

🔗 [https://collectionapi.metmuseum.org/public/collection/v1](https://collectionapi.metmuseum.org/public/collection/v1)
