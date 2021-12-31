const express = require('express')
const router = express.Router()

// 引入home模組
const home = require('./modules/home')
// 將 / 導向home
router.use('/', home)

// 準備引入路由模組
module.exports = router