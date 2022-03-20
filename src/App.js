import React, { useState } from 'react';
import './App.css';
import Data from './Components/Data';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import MsgContext from './Context/MsgContext';

function App() {

  const [msg, setMsg] = useState();

  let handleInputValue = (e) => {
      setMsg(e.target.value)
  }

  return (
    <>

      <MsgContext.Provider value={[msg, handleInputValue]}>
        <Data ></Data>
        <Page1 ></Page1>
        <Page2 ></Page2>
        <Page3 ></Page3>
      </MsgContext.Provider>
      
    </>
  );
}

export default App;
