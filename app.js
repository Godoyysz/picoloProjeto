const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

//proxima aula 26.10
const produtos = [
  {id: 1, nome: "nome do produto", preco: "30,00", descricao: "descricao do produto", imagem: "meia1.webp"},
  {id: 2, nome: "nome do produto", preco: "30,00", descricao: "descricao do produto", imagem: "meia2.jpg"},
  {id: 3, nome: "nome do produto", preco: "30,00", descricao: "descricao do produto", imagem: "meia3.jpg"},
  {id: 4, nome: "nome do produto", preco: "30,00", descricao: "descricao do produto", imagem: "meia4.jpg"},
  {id: 5, nome: "nome do produto", preco: "30,00", descricao: "descricao do produto", imagem: "meia5.jpg"},
  {id: 6, nome: "nome do produto", preco: "30,00", descricao: "descricao do produto", imagem: "meia6.jpg"},
  {id: 7, nome: "nome do produto", preco: "30,00", descricao: "descricao do produto", imagem: "meia7.jpg"},
  {id: 8, nome: "nome do produto", preco: "30,00", descricao: "descricao do produto", imagem: "meia8.jpg"},
  {id: 9, nome: "nome do produto", preco: "30,00", descricao: "descricao do produto", imagem: "meia9.jpg"},
  {id: 10, nome: "nome do produto", preco: "30,00", descricao: "descricao do produto", imagem: "meia10.jpg"}
]

function buscarProdutoPorId(id){
  const produto = produtos.find(produto => produto.id == id);
  return produto || null
}

//controller/rota
app.get('/', (req, res) => {
  //view
   res.render('index', { produtos });
 });


app.get('/visualizar', (req,res) => {
  res.render('visualizar', {message: 'Visualizar Meias'})
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});