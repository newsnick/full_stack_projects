// implement Rest Api for fetching articles from external database
// created FetchArticles.jsx component with useState and useEffect hooks
// make changes to get article page data rendering basis on article id. //not using article name
// render fetched data (FetchArticles) into ArticlePage.jsx with props
// render FetchArticles in the ArticlesListPage component.
// App.js
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

import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar articles={Articles} />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticlesListPage />} />
            <Route path="/articles/:articleId" element={<ArticlePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
