const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

//controller/rota
app.get('/', (req, res) => {
 //view
  res.render('index', { message: 'Amostra das Meias' });
});

app.get('/visualizar', (req,res) => {
  res.render('visualizar', {message: 'Visualizar Meias'})
})

//proxima aula
const produtos = [
  {id: 1, nome: "nome do produto", preco: "30,00", descricao: "descricao do produto", imagem: "link/nome da imagem"},
  {id: 2, nome: "nome do produto", preco: "30,00", descricao: "descricao do produto", imagem: "link/nome da imagem"},
  {id: 3, nome: "nome do produto", preco: "30,00", descricao: "descricao do produto", imagem: "link/nome da imagem"},
  {id: 4, nome: "nome do produto", preco: "30,00", descricao: "descricao do produto", imagem: "link/nome da imagem"},
  {id: 5, nome: "nome do produto", preco: "30,00", descricao: "descricao do produto", imagem: "link/nome da imagem"},
  {id: 6, nome: "nome do produto", preco: "30,00", descricao: "descricao do produto", imagem: "link/nome da imagem"},
  {id: 7, nome: "nome do produto", preco: "30,00", descricao: "descricao do produto", imagem: "link/nome da imagem"},
  {id: 8, nome: "nome do produto", preco: "30,00", descricao: "descricao do produto", imagem: "link/nome da imagem"},
  {id: 9, nome: "nome do produto", preco: "30,00", descricao: "descricao do produto", imagem: "link/nome da imagem"},
  {id: 10, nome: "nome do produto", preco: "30,00", descricao: "descricao do produto", imagem: "link/nome da imagem"}
]


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});