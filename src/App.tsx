import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Research } from './components/sections/Research';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-dark-400 text-content-primary selection:bg-accent-violet/30 selection:text-white flex flex-col transition-colors duration-300">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Research />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
