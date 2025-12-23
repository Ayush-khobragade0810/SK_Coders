import { useState } from 'react';

import Light from "./components/Light";
import MoveData from './components/MoveData';

import './App.css';

function App() {
  const [Task, setTask] = useState(null);
  const btnClick = () => {
    setTask(() => Light);
  };

  const btnClick1 = () => {
    setTask(() => MoveData);
  }

  return (
    <>
      <h1>Which Task You Have to Visit</h1>
      <br />
      <button onClick={btnClick}>Light On Off</button>
      <button onClick={btnClick1}>MOve Data From Boxes</button>
      {/* <Light /> */}
      {/* <MoveData /> */}
      {Task && <Task />}
    </>
  );
};

export default App