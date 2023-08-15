import { useParams } from 'react-router-dom'

const ArticlePage = () => {
  const params = useParams()
  const articleId = params.articleId

  return <h1>This is my Article Page for the articleId: {articleId}!</h1>
}

export default ArticlePage
