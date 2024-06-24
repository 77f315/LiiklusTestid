import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test from './components/Test';
import Results from './components/Results';
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test/>}></Route>
        <Route path="/results" element={<Results/>} />
      </Routes>
    </Router>
);
}

export default App