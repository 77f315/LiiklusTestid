import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test from './components/Test';

function App() {
  const [testdata, setTestdata] = useState();
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data =>{
        setTestdata(data)
      }
    )
  }, [])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test/>}></Route>
      </Routes>
    </Router>
);
}

export default App