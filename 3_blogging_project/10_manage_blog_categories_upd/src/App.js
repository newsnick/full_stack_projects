/* Added category REACT JS:
1. DisplayArticle.jsx
   Component to display a selected article's details.
   Props: articleId (string): The ID of the selected article.
   Usage: ```jsx <DisplayArticle articleId="sample-article-id" />
2. FetchArticles.jsx
   Component to fetch and provide filtered articles using context.
   Usage: Wrap your app or relevant section with the FetchReactArticles component.
3. ReactPage.jsx
   Component to display the React articles page.
   Usage: Add the ReactPage component to your route or app structure.
4. ArticleList.jsx
   Component to display a list of React articles in a sidebar.
   Usage: Include the ArticleList component in the ReactPage component.
5. SelectedArticle.jsx
   Component to display the content of a selected article.
   Props: selectedArticle (object): The selected article object.
   Usage: Include the SelectedArticle component in the ReactPage component.
6. NavBar2.jsx to render category ReactPage.jsx
 */
// App.js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.jsx'
import ArticlePage from './pages/ArticlePage/ArticlePage.jsx'
import ReactPage from './pages/ReactPage/ReactPage.jsx'
import ArticlesListPage from './pages/ArticlesListPage/ArticlesListPage.jsx'
import AboutPage from './pages/AboutPage/AboutPage.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import NavBar2 from './components/NavBar2/NavBar2.jsx'
import { Articles } from './pages/Article-Content/Article-Content.jsx'
import FetchReactArticles from './components/FetchReactArticles/FetchReactArticles.jsx' // Import the context provider
import FetchJSArticles from './components/FetchJSArticles/FetchJSArticles.jsx'
import JSPage from './pages/JSPage/JSPage.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar articles={Articles} />
        <NavBar2 articles={Articles} />

        <div id="page-body">
          {/* Wrap the context provider around the Routes */}
          <FetchReactArticles>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/articles" element={<ArticlesListPage />} />
              <Route path="/articles/:articleId" element={<ArticlePage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route
                path="/react-articles/:articleId"
                element={<ReactPage />}
              />
            </Routes>
          </FetchReactArticles>
          <FetchJSArticles>
            {' '}
            <Routes>
              <Route
                path="/javascript-articles/:articleId"
                element={<JSPage />}
              />
            </Routes>
          </FetchJSArticles>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
