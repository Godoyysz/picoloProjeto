const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

//proxima aula 26.10
const produtos = [
  {id: 1, nome: "meia de mãozinha", preco: "20,00", descricao: "Meia de mãozinha dada por R$20,00", imagem: "meia1.jpg"},

  {id: 2, nome: "meia stranger things", preco: "15,00", descricao: "Meia do HellFire Stranger Things por R$15,00", imagem: "meia2.jpg"},
  
  {id: 3, nome: "meia de cerveja", preco: "14,50", descricao: "Meia de cerveja por R$14,50", imagem: "meia3.jpg"},

  {id: 4, nome: "meia hamburguer", preco: "23,90", descricao: "Meia de hamburguers por R$23,90", imagem: "meia4.jpg"},

  {id: 5, nome: "meia halloween", preco: "21,80", descricao: "Meia do pateta R$21,80", imagem: "meia5.jpg"},

  {id: 6, nome: "meia de camera", preco: "17,99", descricao: "Meia de camera fotografica por R$17,99", imagem: "meia6.jpg"},

  {id: 7, nome: "meia de miau", preco: "30,00", descricao: "Meia de gatinhos por R$30,00", imagem: "meia7.jpg"},

  {id: 8, nome: "meia de batata", preco: "10,00", descricao: "Meia de batatas fritas por R$10,00", imagem: "meia8.jpg"},

  {id: 9, nome: "meia da noite estrelada", preco: "18,30", descricao: "Meia de noite estrelada pintura de Van Gogh por R$18,30", imagem: "meia9.jpg"},

  {id: 10, nome: "meia da monalisa", preco: "19,90", descricao: "Meia da Monalisa por R$19,90", imagem: "meia10.jpg"}
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


app.get('/produtos/:id', (req,res) => {
  const produto = buscarProdutoPorId(req.params.id)
  res.render('produtos', { produto })
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});