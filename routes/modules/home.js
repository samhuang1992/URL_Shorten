const express = require('express')
const router = express.Router()

// 載入URL.js
const URL = require('../../models/URL')
// 載入短網址產生器
const generateURL = require('../../generateURL')

router.get('/', (req, res) => {
  res.render('index')
})


router.post('/show', (req, res) => {
  // 沒輸入網址則不動作
  const url = req.body.url
  if (!url) return res.redirect('/')
  // 產生五碼亂數字元
  const shortenURL = generateURL(5)
  // 輸入網址是否已存在 回傳第一個符合條件的結果
  URL.findOne({ originalURL: url })
    .then(data =>
      data ? data : URL.create({ shortenURL, originalURL: url })
    )
    .then(data =>
      res.render('show', {
        origin: req.headers.origin,
        shortenURL: data.shortenURL,
        url:url
      })
    )
    .catch(error => console.error(error))
})


// //將短網址導向原本網址
router.get('/:shortURL', (req, res) => {
  const { shortURL } = req.params
  URL.findOne({ shortURL })
    .lean()
    .then(data => {
      res.redirect(data.originalURL)
    })
    .catch(error => {
      res.render('index', { error })
    })
})
 
// 匯出路由模組
module.exports = router