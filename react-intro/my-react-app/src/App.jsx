import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Landing from "./components/Landing";
const App = () => {
  const [name, setName] = useState('SK');
  const btnClick = () => {
    setName('Ayush')
  }

  const textChange = (event) => {
    const { target: { value } } = event;
    setName(value);
  }

  return (
    <div className="">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Landing} ></Route>
          <Route path="/home" Component={Home} ></Route>
          <Route path="/about" Component={About} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;