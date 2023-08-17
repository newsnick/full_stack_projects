const express = require('express')
const router = express.Router()
const articleController = require('../controller/article.controller')

router.post('/', articleController.saveArticle)
router.get('/', articleController.getAllArticles)
router.get('/:id', articleController.getArticleById)
router.delete('/:id', articleController.deleteArticle)
router.put('/:id/upvote', articleController.addUpvote)
router.post('/:id/comments', articleController.addComment)

module.exports = router
