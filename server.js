const express = require('express')
const routes = require('./config/routes.js')
const ejs = require('ejs')

app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

app.use(routes)

require('./config/mongoose.js')