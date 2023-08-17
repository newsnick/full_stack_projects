// article.controller.js
const Article = require('../model/article.model')

// create article operation
const saveArticle = async (req, res) => {
  const articleData = req.body

  try {
    const article = await Article.create(articleData)
    res.send('Article saved successfully.')
  } catch (error) {
    console.log('Error while saving the article:', error)
    res.status(500).send('Error while saving the article')
  }
}

//fetch all articles operation
const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find()
    res.send(articles)
  } catch (error) {
    console.log('Error while fetching articles.')
  }
}

//fetch Article by ID
const getArticleById = async (req, res) => {
  const { id } = req.params
  try {
    const article = await Article.findById(id)

    if (!article) {
      return res.status(404).send('Contact not found.')
    }
    res.send(article)
  } catch (error) {
    console.log('Error while fetch article by ID:', error)
    res.status(500).send('Error while fetching article by ID.')
  }
}

//delete Article operation
const deleteArticle = async (req, res) => {
  const { id } = req.params
  try {
    const article = await Article.findByIdAndDelete(id)
    if (!article) {
      return res.status(404).send('Article not found.')
    }
    res.send('Article deleted successfully.')
  } catch (error) {
    console.log('Error while deleting article:', error)
    res.status(500).send('Error while deleting article.')
  }
}

// Add upvote operation
const addUpvote = async (req, res) => {
  const { id } = req.params

  try {
    const article = await Article.findById(id)
    if (!article) {
      return res.status(404).send('Article not found.')
    }
    article.upvotes += 1
    await article.save()
    res.send('Upvote added successfully.')
  } catch (error) {
    console.log('Error while adding upvote:'.error)
    res.status(500).send('Error while adding upvote.')
  }
}

// Add comment operation
// const addComment = async (req, res) => {
//   const { id } = req.params
//   const { user, comment } = req.params

//   try {
//     const article = await Article.findById(id)
//     if (!article) {
//       return res.status(404).send('Article not found.')
//     }

//     article.comments.push({ user, comment })
//     await article.save()

//     res.send('Comment added successfully.')
//   } catch (error) {
//     console.log('Error while adding comment:', error)
//     res.status(500).send('Error while adding comment.')
//   }
// }

const addComment = async (req, res) => {
  const { id } = req.params
  const { user, comment } = req.body

  if (!user || !comment) {
    return res
      .status(400)
      .json({ error: 'Both user and comment fields are required.' })
  }

  try {
    const article = await Article.findByIdAndUpdate(
      id,
      {
        $push: {
          comments: { user, comment },
        },
      },
      { new: true }
    )

    if (!article) {
      return res.status(404).json({ error: 'Article not found.' })
    }

    res.json(article)
  } catch (error) {
    console.error('Error while adding comment:', error)
    res.status(500).json({ error: 'Error while adding comment.' })
  }
}

module.exports = {
  saveArticle,
  getAllArticles,
  getArticleById,
  deleteArticle,
  addUpvote,
  addComment,
}
