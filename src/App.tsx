import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Company from './pages/Company';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import "./styles/services.css"
import "./styles/index.css"
import Footer from './components/Footer';
import PinnedImageScrollSection from './components/ServicesAnimation';
import Projects from './pages/project';
import AudioServices from './pages/services/AudioServices';
import BrandingServices from './pages/services/Branding';
import ImageCreationServices from './pages/services/ImageCreation';
import TimeLapseVideoServices from './pages/services/TimeLapseVideo';
import AnimationServices from './pages/services/Animation';
import VideoProductionServices from './pages/services/VideoProduction';
import Main from './pages/Main';
import DroneServices from './pages/services/DroneServices';
import WebDevelopment from './pages/services/WebDevelopment';
import ScrollToTop from './components/ScrolltoTop';
import UIDesgining from './pages/services/UIDesgining';
import GrapicDesgining from './pages/services/GrapicDesgining';
import InteriorDesgining from './pages/services/InteriorDesgining';



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
        <ScrollToTop/>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/company/" element={<Company />} />
          <Route path="/services/" element={<Services />} />
          <Route path="/projects/" element={<Projects/>} />
          <Route path="/about/" element={<About />} />
           <Route path="/contact/" element={<Contact />} />
          <Route path="/services/animation/" element={<AnimationServices/>} />
          <Route path="/services/video-production/" element={<VideoProductionServices />} />
          <Route path="/services/branding/" element={<BrandingServices />} />
          <Route path="/services/image-creation/" element={<ImageCreationServices />} />
          <Route path="/services/time-lapse-video/" element={<TimeLapseVideoServices />} />
          <Route path="/services/audio-production/" element={<AudioServices />} /> 
          <Route path="/services/drone-services/" element={<DroneServices />} />  
          <Route path="/services/web-development/" element={<WebDevelopment />} />
          <Route path="/services/interior-desgining/" element={<InteriorDesgining />} />
          <Route path="/services/UI-Desgining/" element={<UIDesgining />} /> 
          <Route path="/services/Grapic-Desgining/" element={<GrapicDesgining />} /> 
          <Route path="/services-animate/" element={<PinnedImageScrollSection />} />
        </Routes>
        <Footer />
      </Router>
     </ThemeProvider>
  );
}

export default App; 