const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

//controller/rota
app.get('/', (req, res) => {
 //view
  res.render('index', { message: 'Site de Venda de Livros' });
});

app.get('/produto', (req,res) => {
  res.render('produto', {message: 'Amostra dos Livros'})
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});