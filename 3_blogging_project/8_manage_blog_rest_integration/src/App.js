// implement Rest Api for fetching articles from external database:
// FetchArticle.jsx Fetches a list of articles from a local API endpoint and displays various pages using React Router.
// ArticleList.jsx renders a list of articles with truncated content, linking to the full article page.
// ArticlePage.jsx displays the details of a specific article, including title, upvotes, and full content. If the article is not found, it shows a "Not Found" page.

// App.js
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.jsx'
import ArticlePage from './pages/ArticlePage/ArticlePage.jsx'
import ArticlesListPage from './pages/ArticlesListPage/ArticlesListPage.jsx'
import AboutPage from './pages/AboutPage/AboutPage.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import { Articles } from './pages/Article-Content/Article-Content.jsx'
import FetchArticles from './components//FetchArticles/FetchArticles.jsx'

import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'
function App() {
  const [articles, setArticles] = useState([])

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar articles={Articles} />
        <div id="page-body">
          <FetchArticles setArticles={setArticles} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/articles"
              element={<ArticlesListPage articles={articles} />}
            />
            <Route
              path="/articles/:articleId"
              element={<ArticlePage articles={articles} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
