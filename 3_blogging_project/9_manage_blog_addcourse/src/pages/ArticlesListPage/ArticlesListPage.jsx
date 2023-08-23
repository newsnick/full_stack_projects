// //ArticlesListPage.jsx
import React, { useState } from 'react'
import ArticleList from '../../pages/ArticleList/ArticleList'
import FetchArticles from '../../components/FetchArticles/FetchArticles'

const ArticlesListPage = () => {
  const [articles, setArticles] = useState([]) // Create state for articles

  return (
    <>
      <h1>Article</h1>
      <FetchArticles setArticles={setArticles} />{' '}
      <ArticleList articles={articles} />{' '}
    </>
  )
}

export default ArticlesListPage
