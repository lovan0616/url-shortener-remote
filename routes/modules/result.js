const express = require('express')
const router = express.Router()
const Link = require('../../models/link')
const generateScram = require('../../generateScram')
const generatedScrams = []

router.post('/', (req, res) => {
  // 設定url變數
  const url = req.body.url
  // 設定scram變數
  let scram = generateScram()

  // 防止產生重複亂碼的機制
  while (generatedScrams.includes(scram)) {
    scram = generateScram()
  }
  generatedScrams.push(scram)

  // 建立link變數
  const link = `https://thawing-escarpment-49846.herokuapp.com/${scram}`

  // 建立一筆link資料
  Link.create({ url, scram, link })
    // 導往結果頁面
    .then(res.redirect(`/result/${scram}`))
})

router.get('/:scram', (req, res) => {
  const scram = req.params.scram
  Link.findOne({ scram })
    .lean()
    .then(link => res.render('result', { link }))
    .catch(error => console.log('error'))
})

module.exports = router