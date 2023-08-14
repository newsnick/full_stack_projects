import './App.css'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ArticlePage from './pages/ArticlePage/ArticlePage'
import ArticlesListPage from './pages/ArticlesListPage/ArticlesListPage'

function App() {
  return (
    <div className="App">
      <h3>Blogging App</h3>
      <div>
        Welcome to my Blog!
        <HomePage />
        <AboutPage />
        <ArticlePage />
        <ArticlesListPage />
      </div>
    </div>
  )
}

export default App
