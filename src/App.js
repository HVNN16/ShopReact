import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import ManuSection from './Components/Manu/ManuSection';
import Footer from './Components/Footer';
import ContactSection from './Components/Contact/ContactSection';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/menu" element={<ManuSection />} />
        <Route path="/table" element={<ContactSection />} />
        {/* Phụ  chưa xong giỏ hàng*/}
        <Route path="/cart" element={<ContactSection/>} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
