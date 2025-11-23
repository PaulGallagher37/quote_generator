
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Quote from './components/Quote';
import Contact from './components/Contact';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="quote" element={<Quote />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
  ); 
}

export default App;
