import React from 'react';
import Header from './Header/header';
import Footer from './Footer/footer.js';
import Home from './Home/Home';
import About from './About/About.js';
import Blog from './Blog/Blog';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Contact from './Contact/Contact';
import './App.css'
function App() {
  return (
    <>
      
      <Header/>
      <Home/>
      <About/>
      <Experience/>
      <Education/>
      <Blog/>
      <Contact/>
      <Footer/>

    </>
  );
}

export default App;
