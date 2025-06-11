import { motion } from "framer-motion";
import "./about.css";
import RotatingCube from "../components/RotatingCube";
import TestimonialAboutCard from "../components/about/TestimonialAboutCard";
import JobListings from "../components/about/Job-listening";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    images: [
      "https://images.prismic.io/cuub/e8120090-c8dc-4319-b6db-18b1b13f0f07_CUUB-02.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=428",
      "https://images.prismic.io/cuub/da6975b4-e216-43bf-81d0-3deead0faa08_CUUB-29.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=428",
    ],
    name: "Bohdan Behmat",
    title: "Founder",
  },
  {
    images: [
      "https://images.prismic.io/cuub/e8120090-c8dc-4319-b6db-18b1b13f0f07_CUUB-02.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=428",
      "https://images.prismic.io/cuub/da6975b4-e216-43bf-81d0-3deead0faa08_CUUB-29.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=428",
    ],
    name: "Alina Godunova",
    title: "Chief Executive Officer",
  },
  {
    images: [
      "https://images.prismic.io/cuub/e8120090-c8dc-4319-b6db-18b1b13f0f07_CUUB-02.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=428",
      "https://images.prismic.io/cuub/da6975b4-e216-43bf-81d0-3deead0faa08_CUUB-29.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=428",
    ],
    name: "Alina Godunova",
    title: "Chief Executive Officer",
  },
  {
    images: [
      "https://images.prismic.io/cuub/e8120090-c8dc-4319-b6db-18b1b13f0f07_CUUB-02.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=428",
      "https://images.prismic.io/cuub/da6975b4-e216-43bf-81d0-3deead0faa08_CUUB-29.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=428",
    ],
    name: "Alina Godunova",
    title: "Chief Executive Officer",
  },
  {
    images: [
      "https://images.prismic.io/cuub/e8120090-c8dc-4319-b6db-18b1b13f0f07_CUUB-02.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=428",
      "https://images.prismic.io/cuub/da6975b4-e216-43bf-81d0-3deead0faa08_CUUB-29.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=428",
    ],
    name: "Alina Godunova",
    title: "Chief Executive Officer",
  },
  {
    images: [
      "https://images.prismic.io/cuub/e8120090-c8dc-4319-b6db-18b1b13f0f07_CUUB-02.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=428",
      "https://images.prismic.io/cuub/da6975b4-e216-43bf-81d0-3deead0faa08_CUUB-29.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=428",
    ],
    name: "Alina Godunova",
    title: "Chief Executive Officer",
  },
];


const AboutUsPage: React.FC = () => {
  return (
    <>
    <section className="hero-section border-none rounded-none">
  <div className="hero-content">
     <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        style={{ width: '100%', height: '100vh' }}
      >
        <source src="/images/projectvideos/01 Aboutvideo.mp4" type="video/mp4" />
      </video>

    <div className="hero-text">
      <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                WHO WE ARE ?
              </motion.h1>
    </div>
  </div>
</section>


      <div className="about-section">
        <div className="about-container">
          <div className="about-sections-links">
            <span id="#about">About us</span>
            <span onClick={() => {
              const section = document.getElementById('ourTeam')
              section?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Team
            </span>
            <span onClick={() => {
              const section = document.getElementById('client-reviews')
              section?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Clients
            </span>
            <span onClick={() => {
              const section = document.getElementById('hiring-about-section')
              section?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Careers
            </span>
          </div>

          <h2 className="about-title ">About us</h2>

          <div className="about-content">
            <h2 className="about-subtitle">Who we are</h2>
            <p className="about-description">
              We are a member of the group, the largest group of marketing
              communication companies in Middle East, offering services in Media
              production, Interactive voice recording, Animations, advertising,
              Creative, and marketing research , Social Media, Web Solution.
            </p>
          </div>

          <div className="services-content">
            <h2 className="services-subtitle">What we offer</h2>
            <div className="services-grid">
              <ul className="services-list">
                <li>
                  <Link to="/services/animation/">Animation</Link>
                </li>
                 <li>
                  <Link to="/services/time-lapse-video/">Time-lapse Video</Link>
                </li>
                <li>
                  <Link to="/services/video-production/">Video Productions</Link>
                </li>
                <li>
                  <Link to="/services/image-creation/">Image Creation</Link>
                </li>
                 <li>
                  <Link to="/services/drone-services/">Drone Service</Link>
                </li>
              </ul>
              <ul className="services-list">
                 <li>
                  <Link to="/services/Interior-Desgining/">3D Interior Desgin </Link>
                  </li>
                <li>
                  <Link to="/services/audio-production/">Audio Services</Link>
                </li>
               
                <li>
                  <Link to="/services/web-development">Web Development</Link>
                </li>
                <li>
                 <Link to="/services/ui-desgining/"> UI/UX Desgining </Link>
                </li>
                 <li>
                 <Link to="/services/grapic-desgining/"> Graphic Designing</Link>
                </li>
              </ul>
            </div>
          </div>
          <h2 id="ourTeam" className="our-team">Our team</h2>
        </div>
        <div className="team-content">
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="team-image-container">
                  <img
                    src={member.images[0]}
                    alt={`${member.name} primary`}
                    className="team-image team-image-primary"
                  />
                  {member.images.length > 1 && (
                    <img
                      src={member.images[1]}
                      alt={`${member.name} secondary`}
                      className="team-image team-image-secondary"
                    />
                  )}
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-title">{member.title}</p>
              </div>
            ))}
          </div>
        </div>

        
         <TestimonialAboutCard/>
        <div className="about-container">
          <h2 id="hiring-about-section" className="our-team">We’re hiring</h2>
        </div>
        <JobListings/>
      </div>
    </>
  );
};






/*<section className="hero-section border-none rounded-none">

        <div className="hero-content">
          <motion.div
            className="hero-cube"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
             <RotatingCube isScrollControlled={false} /> 
            <div className="hero-text">
              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                WHO WE ARE ?
              </motion.h1>
            </div>
          </motion.div>
        </div>
      </section>*/

export default AboutUsPage;
