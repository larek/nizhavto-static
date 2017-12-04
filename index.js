const express = require('express');
const ejs =  require('ejs');
const path = require('path');
const app = express();
const data = require('./data.js');

app.set('view engine', 'ejs');
app.use(express.static(path.join('./public')));

app.get('/', (req, res) => {
  res.render(path.join(__dirname, './view/index'), {title: 'Нижавто. Услуги автовозов и эвакуаторов'});
});

app.get('/products', (req, res) => {
  res.render(path.join(__dirname, './view/products'), {title: 'Автовозы', data: data});
})

app.get('/products/:slug', (req, res) => {
  let result = data.find(el => el.slug === req.params.slug);
  result == 'undefined' ? res.send(404) : res.render(path.join(__dirname, './view/single'), {title: result.title, data: result});;
})

app.get('/contacts', (req, res) => {
  res.render(path.join(__dirname, './view/contacts'), {title: 'Контакты'});
})

app.get('/distance', (req, res) => {
  res.render(path.join(__dirname, './view/distance'), {title: 'Расчет расстояний'});
})

app.listen(3000, () => {
  console.log("http://localhost:3000");
});