import styles from './App.module.css';
import React from 'react';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import About from './About/About';


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero/>
      <About/>
    </div>
  );
}

export default App;
