import './App.css';
import {  BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/Aboutus';
import ContactUs from './components/Contactus';
import Footer from './components/Footer';
import Navbar from './components/Navbar';




function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
