import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import ClientMarquee from './components/ClientMarquee';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
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

export default App;