const express = require('express')
const app = express()
const PORT = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
require('./config/mongoose')
const routes = require('./routes')

app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

app.listen(PORT, () => {
  console.log('the app is listening')
})

//待解決：無法findOne()抓取資料
//待解決：如何產生同時包含數字和英文的亂碼