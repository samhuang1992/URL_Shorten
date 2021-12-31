const express = require('express')
const router = express.Router()

// 載入URL.js
const URL = require('../../models/URL')

router.get('/', (req, res) => {
  res.render('index')
})

 
// 匯出路由模組
module.exports = router