import { useEffect } from 'react';
import Header from './components/Header/Header';
import Initial from './components/Initial/Initial';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header-div');
      if (header) {
        header.classList.toggle('scrolled', window.scrollY > 50);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <Header />
      <Initial />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
