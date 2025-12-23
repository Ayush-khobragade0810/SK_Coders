import { Routes, Route, HashRouter } from 'react-router-dom'

// Import components
import NavBar from '../src/components/NavBar.jsx';
import About from './components/About.jsx';
import ContactUs from './components/contactUs.jsx';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';

import './App.css'

function App() {

  return (
    <>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/home' Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/projects' Component={Projects} />
          <Route path='/contactUs' Component={ContactUs} />
        </Routes>
      </HashRouter>


    </>
  )
}

export default App
