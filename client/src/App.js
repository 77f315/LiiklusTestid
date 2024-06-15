import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test from './components/Test';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test/>}></Route>
      </Routes>
    </Router>
);
}

export default App