import './App.css'  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Nav from './components/Nav'
import Team from './pages/Team'
import PageNotFound from './pages/PageNotFound'

function App() { 

  return (
    <Router> 
      <Nav />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}> 
            <Route path="team" element={<Team />} /> 

          </Route>
          {/* Nested route for Team under About */}
          {/* This allows the Team component to be rendered when the URL is /about/team */}
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App
