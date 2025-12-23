import { Routes, Route, HashRouter } from 'react-router-dom'

// Import components
import NavBar from '../src/components/navBar.jsx';
import About from '../src/components/About.jsx';
import ContactUs from '../src/components/contactUs.jsx';
import Home from '../src/components/Home.jsx';
import Projects from '../src/components/Projects.jsx';

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
