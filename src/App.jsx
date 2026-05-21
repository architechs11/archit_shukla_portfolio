import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="relative">
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <div > {/* Add padding for mobile screens */}
        <Home />
        <About />
        <Skills />
        <Projects />
        <ContactMe />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
