import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Home from './pages/Home';
import Company from './pages/Company';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
// import "./styles/App.css"

import "./styles/index.css"
import Main from './pages/Main';
import Footer from './components/Footer';
import PinnedImageScrollSection from './components/ServicesAnimation';
import Projects from './pages/project';

const theme = {
  colors: {
    primary: '#9C27B0',
    background: '#2f323a',
    white: '#ffffff',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
       <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Main />} />
          <Route path="/company" element={<Company />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/services-animate" element={<PinnedImageScrollSection />} />
        </Routes>
        <Footer />
      </Router>
     </ThemeProvider>
  );
}

export default App; 