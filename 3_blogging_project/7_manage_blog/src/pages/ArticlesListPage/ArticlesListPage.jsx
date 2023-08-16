import { ArticlesList } from '../../components/ArticlesList'
import { Articles } from '../Article-Content/Article-Content'

const ArticlesListPage = () => {
  return (
    <>
      <h1>Article</h1>
      <ArticlesList Articles={Articles} />
    </>
  )
}
export default ArticlesListPage
