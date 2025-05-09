import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

// import About from './pages/About';
import Contact from './pages/ContactPage';

import './App.css';

function App() {
  useEffect(() => {
    document.title = 'Yuva Upnishad Publication - Competitive Exam Books';
    window.scrollTo(0, 0);
  }, []);

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
