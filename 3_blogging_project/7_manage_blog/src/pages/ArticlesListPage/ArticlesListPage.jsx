import { ArticlesList } from '../../components/ArticlesList.jsx'
import { Articles } from '../Article-Content/Article-Content.jsx'

const ArticlesListPage = () => {
  return (
    <>
      <h1>Article</h1>
      <ArticlesList Articles={Articles} />
    </>
  )
}
export default ArticlesListPage
