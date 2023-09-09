// ArticlePage.jsx
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Articles } from '../Article-Content/Article-Content'
import { NotFoundPage } from '../NotFoundPage/NotFoundPage'
import { useSelector } from 'react-redux'
import CommentButton from '../../components/CommentButton/CommentButton'
import AddComment from '../../components/AddComment/AddComment'
import './ArticlePage.css'

const ArticlePage = () => {
  const user = useSelector((state) => state.auth.user)
  const params = useParams()
  const articleId = params.articleId

  const [articleInfo, setArticleInfo] = useState({
    title: '',
    upvotes: 0,
    content: [],
  })
  const [localComments, setLocalComments] = useState([])

  useEffect(() => {
    const article = Articles.find((article) => article.name === articleId)
    if (article) {
      setArticleInfo({
        title: article.title,
        upvotes: article.upvotes,
        content: article.content,
      })
      setLocalComments(article.comments)
    } else {
      setArticleInfo({ title: 'Article Not Found', upvotes: null, content: [] })
    }
  }, [articleId])

  const addComment = (commentText) => {
    // Create a new comment object
    const newComment = {
      user: user.username, // Assuming user has a "username" property
      comment: commentText,
    }

    // Update the local comments state with the new comment
    setLocalComments([...localComments, newComment])
  }

  return (
    <div className="article-page-box">
      <h2>{articleInfo.title}</h2>
      {articleInfo.upvotes !== null && (
        <b className="green-box">
          This article has {articleInfo.upvotes} upvotes
        </b>
      )}
      {articleInfo.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      {user ? <AddComment addComment={addComment} /> : <CommentButton />}
      <div className="comments">
        <h3>Comments:</h3>
        <ul>
          {localComments.map((comment, index) => (
            <li key={index}>
              <strong>{comment.user}:</strong> {comment.comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ArticlePage
