/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Header from './Header/header';
import Footer from './Footer/footer.js';
import Home from './Home/Home';
import About from './About/About.js';
import Blog from './Blog/BlogCard';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Contact from './Contact/Contact';
import Back from './Back/Back';
import './App.css'
require('dotenv').config()
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
      <Back/>
    </>
  );
}

export default App;
