import styles from './App.module.css';
import React from 'react';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import About from './About/About';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
