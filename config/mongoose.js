const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/URL_Shorten')

// 取得資料庫連線狀態
const db = mongoose.connection
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})
// 連線錯誤
db.on('error', () => {
  console.log('mongodb error!')
})

module.exports = db