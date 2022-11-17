const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const articleSchema = new Schema ({
    title: {
        type: String,
        required: true,
        min: [25 , 'title must be longer than 25 Characters'],
        max: 200,
        unique: true
    }, 
    articleText: {
        type: String,
        required: true,
        min: [100, "Article must be longer than 100 characters"],

    }    
}, {timeStamps: true})

const Article = mongoose.model("Article", articleSchema)

module.exports = Article