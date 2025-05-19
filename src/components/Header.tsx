

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { X, ChevronDown, ArrowRight } from "lucide-react"

export default function Header() {
  const location = useLocation()

  const nonTransparentRoutes = ["/contact", "/projects", "/brief"]

  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isTransparent, setIsTransparent] = useState(() => {
    return !nonTransparentRoutes.includes(location.pathname)
  })
  useEffect(() => {
  if (isOpen) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }

  return () => {
    document.body.classList.remove("no-scroll"); // cleanup in case component unmounts
  };
}, [isOpen]);


  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const isOnFixedPage = nonTransparentRoutes.includes(location.pathname)

      setIsScrolled(scrollY > 0)
      setIsTransparent(!isOnFixedPage && scrollY <= 500)
    }

    // Run once on mount and whenever the path changes
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [location.pathname])

  return (
    <>
      <header className={`navbar ${isTransparent ? "navbar-white" : "navbar-white"}`}>
        <div className="navbar-container">
          {/* Mobile menu button */}
          <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <div className="navbar-toggle-line"></div>
            <div className="navbar-toggle-line"></div>
            <div className="navbar-toggle-line"></div>
          </button>

          {/* Desktop navigation */}
          <nav className="navbar-nav">
            <Link to="/about" className="navbar-link">
              About
            </Link>
            <Link to="/projects" className="navbar-link">
              Projects
            </Link>

            {/* Services dropdown - now using hover */}
            <div className="services-dropdown">
              <div className="navbar-link services-dropdown-toggle">
                Services <ChevronDown className="dropdown-icon" size={16} />
              </div>

              <div className="services-dropdown-menu">
                <Link to="/services/animation" className="dropdown-item">
                  Animation
                  <ArrowRight className="dropdown-item-icon" size={16} />
                </Link>
                <Link to="/services/video-production" className="dropdown-item">
                  Video Productions
                  <ArrowRight className="dropdown-item-icon" size={16} />
                </Link>
                <Link to="/services/image-creation" className="dropdown-item">
                  Image Creation
                  <ArrowRight className="dropdown-item-icon" size={16} />
                </Link>
                <Link to="/services/audio-production/" className="dropdown-item">
                  Audio Services
                  <ArrowRight className="dropdown-item-icon" size={16} />
                </Link>
                <Link to="/services/time-lapse-video" className="dropdown-item">
                  Time Lapse Video
                  <ArrowRight className="dropdown-item-icon" size={16} />
                </Link>
                <Link to="/services/drone-services" className="dropdown-item">
                  Drone Services
                  <ArrowRight className="dropdown-item-icon" size={16} />
                </Link>
                <Link to="/services/arial-services" className="dropdown-item">
                  Arial Services
                  <ArrowRight className="dropdown-item-icon" size={16} />
                </Link>
                <Link to="/services/web-development/" className="dropdown-item">
                  Web Development
                  <ArrowRight className="dropdown-item-icon" size={16} />
                </Link>
                <Link to="/services/digital-marketing" className="dropdown-item">
                  Digital Marketing
                  <ArrowRight className="dropdown-item-icon" size={16} />
                </Link>
                <Link to="/services/grapic-desgining" className="dropdown-item">
                  Grapic Designing
                  <ArrowRight className="dropdown-item-icon" size={16} />
                </Link>
              </div>
            </div>

            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          </nav>

          {/* Logo */}
          <div className="navbar-logo">
            <Link to="/">
              <img src="/logo.png" alt="website logo" className="navbar-logo-img" />
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isOpen ? "mobile-menu-open" : ""}`}>
        <div className="mobile-menu-container">
          <div className="mobile-menu-header">
            <button onClick={toggleMenu} className="mobile-menu-close" aria-label="Close menu">
              <X className="mobile-menu-close-icon" />
            </button>
            <Link to="/" className="mobile-menu-logo-link">
              <img src="/logo.png" alt="website logo" className="navbar-logo-img" />
            </Link>
          </div>

          <nav className="mobile-menu-nav">
            <Link to="/about" className="mobile-menu-link" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/projects" className="mobile-menu-link" onClick={toggleMenu}>
              Projects
            </Link>
            <Link to="/contact" className="mobile-menu-link" onClick={toggleMenu}>
              Contact
            </Link>
            {/* Services section in mobile menu */}
            <div className="mobile-menu-services">
              <h3 className="mobile-menu-services-title">Services</h3>
              <div className="mobile-menu-services-grid">
                <Link to="/services/animation" className="mobile-menu-service-link" onClick={toggleMenu}>
                  Animation
                  <ArrowRight className="service-link-icon" size={14} />
                </Link>
                <Link to="/services/video-production" className="mobile-menu-service-link" onClick={toggleMenu}>
                  Video Productions
                  <ArrowRight className="service-link-icon" size={14} />
                </Link>
                <Link to="/services/image-creation" className="mobile-menu-service-link" onClick={toggleMenu}>
                  Image Creation
                  <ArrowRight className="service-link-icon" size={14} />
                </Link>
                <Link to="/services/audio-production/" className="mobile-menu-service-link" onClick={toggleMenu}>
                  Audio Services
                  <ArrowRight className="service-link-icon" size={14} />
                </Link>
                <Link to="/services/time-lapse-video" className="mobile-menu-service-link" onClick={toggleMenu}>
                  Time Lapse Video
                  <ArrowRight className="service-link-icon" size={14} />
                </Link>
                <Link to="/services/drone-services/" className="mobile-menu-service-link" onClick={toggleMenu}>
                  Drone Services
                  <ArrowRight className="service-link-icon" size={14} />
                </Link>
                <Link to="/services/web-development/" className="mobile-menu-service-link" onClick={toggleMenu}>
                  Web Development
                  <ArrowRight className="service-link-icon" size={14} />
                </Link>
                <Link to="/services/digital-marketing/" className="mobile-menu-service-link" onClick={toggleMenu}>
                  Digital Marketing
                  <ArrowRight className="service-link-icon" size={14} />
                </Link>
                <Link to="/services/grapic-desgining/" className="mobile-menu-service-link" onClick={toggleMenu}>
                  Graphic Designing
                  <ArrowRight className="service-link-icon" size={14} />
                </Link>
                <Link to="/services/arial-services/" className="mobile-menu-service-link" onClick={toggleMenu}>
                  Aerial Services
                  <ArrowRight className="service-link-icon" size={14} />
                </Link>
                {/* <Link to="/services/branding" className="mobile-menu-service-link" onClick={toggleMenu}>
                  Branding
                  <ArrowRight className="service-link-icon" size={14} />
                </Link> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
