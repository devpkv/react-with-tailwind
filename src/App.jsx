import './App.css'  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Nav from './components/Nav'
import Team from './pages/Team'
import PageNotFound from './pages/PageNotFound'
import UseLocationExample from './components/useLocation/UseLocationExample'
import Dashboard from './pages/Dashboard'

function App() { 

  return (
    <Router> 
      <Nav />
      <UseLocationExample />
      {/* This component demonstrates how to use the location object in React Router */}
      {/* It displays the current pathname, search parameters, and hash */}
      {/* It can be useful for debugging or understanding the current URL state */}
      {/* The UseLocationExample component is placed here to show its functionality */}
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
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App
