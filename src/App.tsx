import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Gallery from './components/sections/Gallery';
import Pricing from './components/sections/Pricing';
import ClientMarquee from './components/sections/ClientMarquee';
import Blog from './components/sections/Blog';
import Testimonials from './components/sections/Testimonials';
import Footer from './components/sections/Footer';
import { Routes, Route } from 'react-router-dom';
import PrivateOffices from './pages/PrivateOffices';
import DedicatedDesk from './pages/DedicatedDesk';
import FlexiDesk from './pages/FlexiDesk';
import VirtualOffices from './pages/VirtualOffices';
import MeetingRooms from './pages/MeetingRooms';
import About from './pages/About';
import Location from './pages/Location';
import OurClients from './pages/OurClients';
import Contact from './pages/Contact';
import CompanyRegistration from './pages/CompanyRegistration';

function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Gallery />
      <Pricing />
      <ClientMarquee />
      <Blog />
      <Testimonials />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private-offices" element={<PrivateOffices />} />
        <Route path="/dedicated-desk" element={<DedicatedDesk />} />
        <Route path="/flexi-desk" element={<FlexiDesk />} />
        <Route path="/virtual-offices" element={<VirtualOffices />} />
        <Route path="/meeting-rooms" element={<MeetingRooms />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route path="/our-clients" element={<OurClients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/company-registration" element={<CompanyRegistration />} />
      </Routes>
    </div>
  );
}

export default App;