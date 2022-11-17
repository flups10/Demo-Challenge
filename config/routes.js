const express = require('express')
const route = express.Router()
const control = require('../controller/control')

route.get('/', control.home)
route.get('/new/article', control.newArticle)
route.post('/new/article', control.createArticle)
route.get('/article/:id', control.viewArticle)
route.get('/edit/article/:id', control.editArticlePage)
route.get('/delete/:id', control.deleteArticle)


module.exports = route