// ArticlePage.jsx
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { Articles } from '../Article-Content/Article-Content'
//import { NotFoundPage } from '../NotFoundPage/NotFoundPage'
import { useSelector, useDispatch } from 'react-redux'
import { upvoteArticle } from '../../redux/auth'
import CommentButton from '../../components/CommentButton/CommentButton'
import AddComment from '../../components/AddComment/AddComment'
import './ArticlePage.css'

const ArticlePage = () => {
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()
  const params = useParams()
  const articleId = params.articleId

  const [articleInfo, setArticleInfo] = useState({
    title: '',
    upvotes: 0,
    content: [],
    comments: [],
  })

  useEffect(() => {
    const article = Articles.find((article) => article.name === articleId)
    if (article) {
      setArticleInfo(article)
    } else {
      setArticleInfo({
        title: 'Article Not Found',
        upvotes: null,
        content: [],
        comments: [],
      })
    }
  }, [articleId])

  const addComment = (commentText) => {
    // Create a new comment object
    const newComment = {
      user: user.username,
      comment: commentText,
    }

    // Update the comments for the specific article
    const updatedArticle = { ...articleInfo }
    updatedArticle.comments.push(newComment)

    // update state with the new comment
    setArticleInfo(updatedArticle)
  }

  const handleUpvote = () => {
    if (!user || user.hasUpvoted) {
      alert('You have already upvoted this article.')
    } else {
      // Dispatch the upvoteArticle action with the articleId
      dispatch(upvoteArticle(articleId))

      setArticleInfo((prevArticleInfo) => ({
        ...prevArticleInfo,
        upvotes: prevArticleInfo.upvotes + 1,
      }))

      dispatch({ type: 'SET_HAS_UPVOTED', articleId })
    }
  }

  return (
    <div className="article-page-box">
      <h2>{articleInfo.title}</h2>
      {articleInfo.upvotes !== null && (
        <div className="upvotes">
          {' '}
          <b className="green-box">
            This article has {articleInfo.upvotes} upvotes
          </b>
          {user && (
            <button
              className="likeButton"
              onClick={handleUpvote}
              disabled={user.hasUpvoted}
            >
              <FontAwesomeIcon icon={faThumbsUp} /> Like
            </button>
          )}
        </div>
      )}
      {articleInfo.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      {user ? <AddComment addComment={addComment} /> : <CommentButton />}
      <div className="comments">
        <h3>Comments:</h3>
        <ul>
          {articleInfo.comments.map((comment, index) => (
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
