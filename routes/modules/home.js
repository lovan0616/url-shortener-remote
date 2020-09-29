const express = require('express')
const router = express.Router()
const Link = require('../../models/link')

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/:scram', (req, res) => {
  const scram = req.params.scram
  Link.findOne({ scram })
    .lean()
    .then(link => res.redirect(link.url))
    .catch(error => console.log('error'))
})

module.exports = router