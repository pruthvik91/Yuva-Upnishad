import { useEffect,useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import About from './pages/About';
import Contact from './pages/ContactPage';
import Loader from './components/Loader/Loader';

import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   AOS.init({
      offset: 200,  // When to trigger the animation (in pixels from the top)
      duration: 600, // Duration of animation
      easing: 'ease-in-out',
      delay: 100, // Delay before animation starts
    });
    document.title = 'Yuva Upnishad Publication - Competitive Exam Books';
   const minLoadTime = new Promise(resolve => setTimeout(resolve, 1000)); // minimum 1 sec
  const pageLoaded = new Promise(resolve => {
    if (document.readyState === 'complete') {
      resolve();
    } else {
      window.addEventListener('load', resolve, { once: true });
    }
  });

  Promise.all([minLoadTime, pageLoaded]).then(() => setLoading(false));

    window.scrollTo(0, 0);
  }, []);
  
if (loading) {
    return <Loader />;
  }
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={""} />
            {/* <About /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
