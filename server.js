/*PEGAR/produtos
Este endpoint deve retornar todos os produtos cadastrados no banco de dados.*/
/*A resposta deve ser um array de objetos JSON representando os produtos.*/
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/produtosDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const produtoSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  preco: Number,
});

const Produto = mongoose.model('Produto', produtoSchema);

app.post('/PUBLICAR/produtos', async (req, res) => {
  try {
    const novoProduto = new Produto({
      nome: req.body.nome,
      descricao: req.body.descricao,
      preco: req.body.preco,
    });

    await novoProduto.save();
  res.status(201).json({ message: 'Produto adicionado com sucesso!', produto: novoProduto });
  } catch (error) {
   
    res.status(500).json({ message: 'Erro ao adicionar o produto', error });
  }
});

app.get('/PEGAR/produtos', async (req, res) => {
  try {
   
    const produtos = await Produto.find();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter os produtos', error });
  }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

//Testando o Endpoint
[
    {
      "_id": "1",
      "nome": "Produto Exemplo",
      "descricao": "Descrição do produto",
      "preco": 99.99,
      "__v": 0
    },
    ...
  ]

  /*PEGAR/produtos/:id
  Este endpoint deve retornar os detalhes de um produto específico, com base no idpassado na URL.
  Se o produto não for encontrado, deverá retornar uma mensagem de erro.*/

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/produtosDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const catalogo_produtos = new catalogo_produtos({
  nome: String,
  descricao: String,
  preco: Number,
});

const catalogo_produtos = produto.model('Produto', catalogo_produtos);

app.post('/PUBLICAR/produtos', async (req, res) => {
  try {
    
    const novoProduto = new Produto({
      nome: req.body.nome,
      descricao: req.body.descricao,
      preco: req.body.preco,
    });

   
    await novoProduto.save();

  
    res.status(201).json({ message: 'Produto adicionado com sucesso!', produto: novoProduto });
  } catch (error) {
   
    res.status(500).json({ message: 'Erro ao adicionar o produto', error });
  }
});

app.get('/PEGAR/produtos', async (req, res) => {
  try {
 
    const produtos = await Produto.find();

   
    res.status(200).json(produtos);
  } catch (error) {
 
    res.status(500).json({ message: 'Erro ao obter os produtos', error });
  }
});

app.get('/PEGAR/produtos/:id', async (req, res) => {
  try {
  
    const produtoId = req.params.id;

    const produto = await Produto.findById(produtoId);

    if (!produto) {
     
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    res.status(200).json(produto);
  } catch (error) {
 
    res.status(500).json({ message: 'Erro ao obter o produto', error });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

//Testando o Endpoint
{
    "_id": "64a6e6f8a6fbc3d84c4e6e7d",
    "nome": "Produto Exemplo",
    "descricao": "Descrição do produto",
    "preco": 99.99,
    "__v": 0
  }
  /*COLOCAR/produtos/:id
Este endpoint deve atualizar as informações de um produto específico, com base no idpassado na URL.
O corpo da requisição deverá conter os campos que serão atualizados: nome, descricao, e preco.
Exemplo de corpo da requisição:*/

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/produtosDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const catalogo_produtos = new catalogo_produtos({
  nome: String,
  descricao: String,
  preco: Number,
});


const Produto = mongoose.model('Produto', catalogo_produtos);

app.post('/PUBLICAR/produtos', async (req, res) => {
  try {
    const novoProduto = new Produto({
      nome: req.body.nome,
      descricao: req.body.descricao,
      preco: req.body.preco,
    });
    await novoProduto.save();

    res.status(201).json({ message: 'Produto adicionado com sucesso!', produto: novoProduto });
  } catch (error) {
    
    res.status(500).json({ message: 'Erro ao adicionar o produto', error });
  }
});

app.get('/PEGAR/produtos', async (req, res) => {
  try {
   
    const produtos = await Produto.find();

    res.status(200).json(produtos);
  } catch (error) {
   
    res.status(500).json({ message: 'Erro ao obter os produtos', error });
  }
});

app.get('/PEGAR/produtos/:id', async (req, res) => {
  try {
    
    const produtoId = req.params.id;
    const produto = await Produto.findById(produtoId);

    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    res.status(200).json(produto);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter o produto', error });
  }
});

app.put('/COLOCAR/produtos/:id', async (req, res) => {
  try {
    const produtoId = req.params.id;
    const produtoAtualizado = await Produto.findByIdAndUpdate(produtoId, req.body, { new: true });

    if (!produtoAtualizado) {
      return res.status(404).json({ message: 'Produto não encontrado' });

//Testando o Endpoint
{
    "nome": "Produto Atualizado",
    "descricao": "Descrição atualizada do produto",
    "preco": 149.99
  }
