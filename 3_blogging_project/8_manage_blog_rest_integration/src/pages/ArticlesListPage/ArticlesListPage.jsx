//ArticlesListPage.jsx
import React, { useState, useEffect } from 'react'
import { ArticlePage } from '../ArticlePage/ArticlePage'
import FetchArticles from '../../components/FetchArticles/FetchArticles'

const ArticlesListPage = () => {
  return (
    <>
      <h1>Article</h1>
      <FetchArticles />
    </>
  )
}
export default ArticlesListPage
