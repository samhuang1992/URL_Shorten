// 載入URL.js
const URL = require('../URL')
// 載入db位置
const db = require('../../config/mongoose')

// 連線成功就在資料庫建立資料
db.once('open' , () => {
   URL.create({
      originalURL: 'https://www.google.com',
      shortenURL:'Zx94b', 
   },
   {
      originalURL: 'https://www.youtube.com',
      shortenURL:'KD650', 
   },
   {
      originalURL: 'https://www.facebook.com',
      shortenURL:'k37H8', 
   })
   .then(() => {
     console.log('Down')
     db.close()
   })
   .catch(error => console.log(error))
})