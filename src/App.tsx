import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Services from './components/Services';
import Philosophy from './components/Philosophy';
import Community from './components/Community';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Philosophy />
        <Community />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
