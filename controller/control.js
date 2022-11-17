const mongoose = require('mongoose')
const Article = require('../modules/Article')

const home = (req, res) => {
    Article.find().sort('-1')
        .then( result => {res.render('index', {result})})
        .catch(err => console.log(err))
}

const newArticle = (req, res) => {
    res.render('new_article')
}

const createArticle = (req, res) => {
    const article = new Article(req.body)
    article.save()
    res.redirect('/')
}

const viewArticle = (req, res) => {
    Article.findById(req.params.id, (err, result) => {
        if (result){
            res.render('view_article', {result})
        } else {
            res.redirect('/')
        }
    })
}

const editArticlePage = (req, res) => {
    Article.findById(req.params.id, (err, result) => {
        if (result){
            res.render('edit_article', {result})
        } else {
            res.redirect('/')
        }
    })
}

const editArticle = (req, res) => {
    console.log(req.params.id, req.body)
    Article.findByIdAndUpdate({_id:req.params.id})
        .then( result =>{
            console.log(result)
            res.redirect('/')
        })
}



module.exports = {
    home,
    newArticle,
    createArticle,
    viewArticle,
    editArticlePage,
    editArticle
}