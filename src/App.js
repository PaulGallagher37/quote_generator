
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LCL_Quote from './components/LCL_Quote';
import Contact from './components/Contact';
import FCL_Quote from './components/FCL_Quote';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="fclquote" element={<FCL_Quote />} />
          <Route path="lclquote" element={<LCL_Quote />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
  ); 
}

export default App;
