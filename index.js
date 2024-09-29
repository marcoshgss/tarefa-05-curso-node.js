const express = require('express')
const exphbs = require("express-handlebars")

const app = express() // inicializando o Express

app.engine("handlebars", exphbs.engine()) // Utizando o método engine() para realizar configurações extras

app.set("view engine", "handlebars")
app.use(express.static("public"))

const products = [
  {
    id: "1",
    title: "Feijão",
    price: 6.70,
  },
  {
    id: "2",
    title: "Arroz",
    price: 7.68,
  },
  {
    id: "3",
    title: "Carne",
    price: 31.80,
  },
]

// rotas
app.get("/", (req, res) => {
  res.render("home", {products})
})

app.get("/product/:id", (req, res) => { // rota dinâmica 
  const product = products[parseInt(req.params.id) - 1] // achando o produto no array "products". Irá acessar o produto pelo índice que veio na URL

  res.render("product", {product})
})

app.listen(3000)