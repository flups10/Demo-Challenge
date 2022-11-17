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
    Article.findByIdAndUpdate({_id:req.params.id})
        .then( result =>{
            result.title = req.body.title
            result.articleText = req.body.articleText
            console.log(req.body.id)
            result.save()
                .then( () => {
                    res.redirect(`/article/${req.params.id}`)
                })
                .catch((err => {console.log(err)}))
        })
        .catch(err => console.log(err))
}

const deleteArticle = (req, res) => {
    Article.findByIdAndDelete({_id:req.params.id})
        .then( () => res.redirect('/'))
        .catch((err) => {res.redirect('/'), console.log(err)})
}

module.exports = {
    home,
    newArticle,
    createArticle,
    viewArticle,
    editArticlePage,
    editArticle,
    deleteArticle
}