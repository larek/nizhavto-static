const express = require('express');
const ejs =  require('ejs');
const path = require('path');
const app = express();
const data = require('./data.js');

app.set('view engine', 'ejs');
app.use(express.static(path.join('./public')));

app.get('/', (req, res) => {
  res.render(path.join(__dirname, './view/index'));
});

app.get('/products', (req, res) => {
  res.render(path.join(__dirname, './view/products'), {data: data});
})

app.get('/contacts', (req, res) => {
  res.render(path.join(__dirname, './view/contacts'));
})

app.get('/distance', (req, res) => {
  res.render(path.join(__dirname, './view/distance'));
})

app.listen(3000, () => {
  console.log("http://localhost:3000");
});