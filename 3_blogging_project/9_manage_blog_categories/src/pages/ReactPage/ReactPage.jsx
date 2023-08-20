// ReactPage.jsx
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { FetchedArticlesContext } from '../../components/FetchReactArticles/FetchReactArticles'
import ArticleList from '../../components/ArticleList/ArticleList'
import SelectedArticle from '../../components/SelectedArticle/SelectedArticle'
import './ReactPage.css' // Import the CSS file

export const ReactPage = () => {
  const { articleId } = useParams()
  const articles = useContext(FetchedArticlesContext)

  // Find the article with the matching articleId
  const selectedArticle = articles.find(
    (article) => article.articleId === articleId
  )

  return (
    <div className="react-page-container">
      <ArticleList />
      <SelectedArticle selectedArticle={selectedArticle} />
    </div>
  )
}

export default ReactPage
