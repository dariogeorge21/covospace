import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import ClientMarquee from './components/ClientMarquee';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
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