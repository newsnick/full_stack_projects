import { Articles } from '../Article-Content/Article-Content.jsx'

const ArticlesListPage = () => {
  return (
    <>
      <h1>Article</h1>
      {Articles.map((article) => (
        <div>
          <h3>{article.name}</h3>
          <p>{article.content[0].substring(0, 150)}...</p>
        </div>
      ))}
    </>
  )
}
export default ArticlesListPage
