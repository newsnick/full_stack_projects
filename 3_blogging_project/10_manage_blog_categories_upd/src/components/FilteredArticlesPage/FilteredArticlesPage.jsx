import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { FetchedArticlesContext } from '../../components/FetchReactArticles/FetchReactArticles'
import DisplayArticle from '../../components/DisplayArticle/DisplayArticle'

const FilteredArticlesPage = () => {
  const { keyword } = useParams()
  const articles = useContext(FetchedArticlesContext)

  // Filter articles based on the provided keyword
  const filteredArticles = articles.filter((article) =>
    article.articleId.toLowerCase().includes(keyword)
  )

  return (
    <div>
      <h1>Filtered Articles</h1>
      {filteredArticles.map((article) => (
        <DisplayArticle key={article.articleId} article={article} />
      ))}
    </div>
  )
}

export default FilteredArticlesPage
