const express = require('express')
const router = express.Router()

// 引入home模組
const home = require('./modules/home')
router.use('/', home)
// 引入result模組
const result = require('./modules/result')
router.use('/result', result)


module.exports = router