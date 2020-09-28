const express = require('express')
const app = express()
const PORT = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
require('./config/mongoose')

app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log('the app is listening')
})