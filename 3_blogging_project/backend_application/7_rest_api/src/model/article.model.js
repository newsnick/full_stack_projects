//article.model.js
const mongoose = require('../config/db-connection')

// Article schema definition
const articleSchema = new mongoose.Schema({
  articleId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: [
    {
      type: String,
      required: true,
    },
  ],
  upvotes: {
    type: Number,
    required: false,
  },

  comments: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
    },
  ],

  created_date: {
    type: Date,
    required: true,
  },
})

// Article model creation
const Article = mongoose.model('articles', articleSchema)

module.exports = Article
