const express = require('express')
const app = express()
const PORT = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
require('./config/mongoose')
const Link = require('./models/link')
const generatedScrams = []

app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/result', (req, res) => {
  // 設定url變數
  const url = req.body.url
  // 設定scram變數
  function generateScram() {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    const upperCase = lowerCase.toUpperCase()
    const number = '0123456789'
    let scram = ''
    const collection = (lowerCase.concat(upperCase, number)).split('')
    
    for (let i = 0; i < 5; i++) {
      let index = Math.floor(Math.random() * collection.length)
      scram = scram.concat(collection[index].split())
    }
    return scram
  }
  const scram = generateScram()
  
  // 防止產生重複亂碼的機制
  while(generatedScrams.includes(scram)) {
    scram = generateScram()
  }
  generatedScrams.push(scram)
  

  // 建立link變數
  const link = `http://localhost:3000/${scram}`

  // 建立一筆link資料
  Link.create({url, scram, link})
  // 導往結果頁面
    .then(res.redirect(`/result/${scram}`))


  
})

app.get('/result/:scram', (req, res) => {
  const scram = req.params.scram
  Link.findOne({ scram })
    .lean()
    .then(link => res.render('result', {link}))
    .catch(error => console.log('error'))
})

app.get('/:scram', (req, res) => {
  const scram = req.params.scram
  Link.findOne({scram})
  .lean()
  .then(link => res.redirect(link.url))
  .catch(error => console.log('error'))
})

app.listen(PORT, () => {
  console.log('the app is listening')
})

//待解決：無法findOne()抓取資料
//待解決：如何產生同時包含數字和英文的亂碼