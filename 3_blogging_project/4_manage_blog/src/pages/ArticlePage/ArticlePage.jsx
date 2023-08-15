import { useParams } from 'react-router-dom'
import { Articles } from '../Article-Content/Article-Content.jsx'

const ArticlePage = () => {
  const params = useParams()
  const articleId = params.articleId
  const article = Articles.find((article) => article.name === articleId)

  return (
    <>
      <h2>{article.title}!</h2>
      {article.content.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </>
  )
}

export default ArticlePage
