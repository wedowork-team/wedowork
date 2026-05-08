import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col relative" id="landing-page">
      {/* Background Radial Dots */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0" 
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '24px 24px' }} 
      />
      
      <Navbar />
      <main className="flex-1 relative z-10">
        <div className="max-w-6xl mx-auto">
          <Hero />
          <Services />
          <Portfolio />
        </div>
      </main>
      <Footer />
    </div>
  );
}
