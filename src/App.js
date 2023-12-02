
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import FeaturedSection from './Components/Featured/FeaturedSection';
import ManuSection from './Components/Manu/ManuSection';
import Footer from './Components/Footer';
import ContactSection from './Components/Contact/ContactSection';
import { Featured } from './Components/Context Api/Products';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/menu" element={<ManuSection />} />
        <Route path="/table" element={<ContactSection />} />
        {/* Phụ */}
        <Route path="/cart" element={<ContactSection/>} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
