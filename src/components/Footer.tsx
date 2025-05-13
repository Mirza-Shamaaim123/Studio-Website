// Footer.jsx
import React from 'react';
import { Instagram, Linkedin, Youtube, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  // CSS styles as JavaScript objects
  const styles = {
    footer: {
      backgroundColor: '#000',
      color: '#fff',
      padding: '48px 24px',
    },
    zIndex: 1000,
    position: 'relative',
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '32px',
      marginBottom: '48px',
      '@media (min-width: 768px)': {
        gridTemplateColumns: 'repeat(4, 1fr)',
      }
    },
    footerColumn: {
      display: 'flex',
      flexDirection: 'column',
    },
    footerHeading: {
      fontSize: '20px',
      marginBottom: '24px',
      fontWeight: '500',
    },
    footerList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
    },
    socialIcons: {
      display: 'flex',
      gap: '16px',
    },
    divider: {
      border: 'none',
      borderTop: '1px solid #333',
      margin: '32px 0',
    },
    contactHeading: {
      color: '#888',
      marginBottom: '16px',
      fontSize: '16px',
      fontWeight: 'normal',
    },
    contactLink: {
      color: '#fff',
      textDecoration: 'none',
      display: 'block',
      marginBottom: '16px',
    },
    ctaLink: {
      color: '#ff3b30',
      textDecoration: 'none',
    },
    copyright: {
      marginTop: '32px',
      color: '#888',
    }
  };

  // Media query for responsive grid
  const useResponsiveGrid = () => {
    const [isDesktop, setIsDesktop] = React.useState(window.innerWidth >= 768);
    
    React.useEffect(() => {
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 768);
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return isDesktop ? { gridTemplateColumns: 'repeat(4, 1fr)' } : {};
  };

  // Get responsive grid styles
  const responsiveGridStyle = useResponsiveGrid();

  return (
    <footer  style={{...styles.footer, zIndex: 10000, position: 'sticky'}}>
      {/* Main Navigation */}
      <div style={{...styles.footerGrid, ...responsiveGridStyle}}>
        {/* Studio Column */}
        <div style={styles.footerColumn as React.CSSProperties}>
          <h2 style={styles.footerHeading}>Studio</h2>
          <ul style={styles.footerList as React.CSSProperties}>
            {/* <li><a href="#" style={styles.link}>Projects</a></li> */}
            <li><a href="/" style={styles.link}>Home</a></li>
            <li><a href="/about" style={styles.link}>About us</a></li>
            {/* <li><a href="#" style={styles.link}>Blog</a></li> */}
            <li><a href="/contact" style={styles.link}>Contact Us</a></li>
            {/* <li><a href="#" style={styles.link}>Careers</a></li> */}
          </ul>
        </div>

        {/* Services Column */}
        <div style={styles.footerColumn as React.CSSProperties}>
          <h2 style={styles.footerHeading}>Services</h2>
          <ul style={styles.footerList as React.CSSProperties}>
            <li><a href="/services/animation/" style={styles.link}>Animations</a></li>
            <li><a href="/services/video-production/" style={styles.link}>Video Production</a></li>
            <li><a href="/services/image-creation/" style={styles.link}>Image Creations</a></li>
           

            {/* <li><a href="#" style={styles.link}>Architectural virtual reality</a></li> */}
          </ul>
        </div>

        <div style={styles.footerColumn as React.CSSProperties}>
          <h2 style={styles.footerHeading}>Services</h2>
          <ul style={styles.footerList as React.CSSProperties}>
          
            <li><a href="/services/audio-production/" style={styles.link}>Audio Production</a></li>
            <li><a href="/services/time-lapse-video/" style={styles.link}>Time-laps Video</a></li>
            <li><a href="/services/branding/" style={styles.link}>Branding</a></li>

            {/* <li><a href="#" style={styles.link}>Architectural virtual reality</a></li> */}
          </ul>
        </div>

        {/* Support Column */}
        {/* <div style={styles.footerColumn as React.CSSProperties}>
          <h2 style={styles.footerHeading}>Support</h2>
          <ul style={styles.footerList as React.CSSProperties}>
            <li><a href="#" style={styles.link}>Frequently asked questions</a></li>
            <li><a href="#" style={styles.link}>Contact us</a></li>
            
          </ul>
        </div> */}

        {/* Follow us Column */}
        <div style={styles.footerColumn  as React.CSSProperties}>
          <h2 style={styles.footerHeading}>Follow us</h2>
          <div style={styles.socialIcons}>
            <a target='_blank' href="https://www.instagram.com/elitedezignstudio/" style={styles.link}><Instagram size={24} /></a>
            <a target='_blank' href="https://www.linkedin.com/company/elite-design-studio-ksa" style={styles.link}><Linkedin size={24} /></a>
            <a target='_blank' href="https://www.facebook.com/elitedesignstud/" style={styles.link}><Facebook size={24} /></a>
            <a target='_blank' href="https://twitter.com/EliteDesignStud" style={styles.link}><Twitter size={24} /></a>
            {/* <a href="https://sa.linkedin.com/company/elite-reach" style={styles.link}><Linkedin size={24} /></a> */}
          </div>
        </div>
      </div>

      <hr style={styles.divider} />

      {/* Contact Information */}
      <div style={{...styles.footerGrid, ...responsiveGridStyle}}>
        {/* Projects & general inquiries */}
        <div style={styles.footerColumn as React.CSSProperties}>
          <h3 style={styles.contactHeading}>Projects & general inquiries</h3>
          <a href="mailto:hello@elitedstudio.com" style={styles.contactLink}>hello@elitedstudio.com</a>
          <a href="tel:+966 550809669" style={styles.contactLink}>+966 550809669</a>
        </div>

        {/* Job applications */}
        {/* <div style={styles.footerColumn as React.CSSProperties}>
          <h3 style={styles.contactHeading}>Job applications</h3>
          <a href="mailto:hr@cuubstudio.com" style={styles.contactLink}>hr@elitedesigntudio.com</a>
        </div> */}

        {/* Marketing & PR */}
        {/* <div style={styles.footerColumn as React.CSSProperties}>
          <h3 style={styles.contactHeading}>Marketing & PR</h3>
          <a href="mailto:marketing@cuubstudio.com" style={styles.contactLink}>marketing@elitedesignstudio.com</a>
        </div> */}

        {/* Start a project */}
        {/* <div style={styles.footerColumn as React.CSSProperties}>
          <h3 style={styles.contactHeading}>Start a project</h3>
          <a href="#" style={styles.ctaLink}>Fill out our brief</a>
        </div> */}
      </div>

      <hr style={styles.divider} />

      {/* Copyright */}
      <div style={styles.copyright}>
        <p>© 2025 Elite Design Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;