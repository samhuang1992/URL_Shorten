const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const routes = require('./routes')
const app = express()

const PORT = '3000'
// 載入mongoose.js
require('./config/mongoose')

// 使用hbs 
app.engine('hbs',exphbs({default:'main', extname: '.hbs'}))
app.set('view engine', 'hbs')
// 使用body-parser
app.use(bodyParser.urlencoded({extended: true}))
// 使用method-override
app.use(methodOverride('_method'))
// request導入路由器
app.use(routes)

app.listen(PORT, () => {
  console.log(`APP.js is running on http://localhost:${PORT}`)
})