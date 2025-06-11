import React from 'react'
import ServicesHeroSection from "./_components/ServicesHeroSection";
import ServiceThreeCards from "./_components/ServiceThreeCards";
import ServicesProject from "./_components/ServicesProjects";
import ServicesScrollSection from "./_components/ServicesCrouselSection";
import ServicesFAQ from "./_components/ServicesFaqs";
import PartnersSection from "./_components/ServicesPartner";
import ServicesBoxSection from "./_components/ServicesBoxSection";
const cardData = [
  {
    title: "Strategy",
    description:
      "A 3D interior design strategy combines creative vision with advanced visualization tools to plan, refine, and present spaces effectively, ensuring cohesive aesthetics, functionality, and client satisfaction from concept to execution.",
  },
  {
    title: "Positioning",
    description:
      "3D interior design positioning highlights your brand’s ability to visualize concepts with precision, offering clients immersive experiences that build trust, accelerate decisions, and set you apart in a competitive market.",
  },
  {
    title: "Creative",
    description:
      "3D interior design creativity blends imagination with technology, crafting visually stunning and functional spaces. It enables experimentation with styles, colors, and layouts, bringing bold design ideas to life effortlessly.",
  },
];

const projectImages = [
  "https://images.prismic.io/cuub/Z0R6yq8jQArT1RfO_2.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=920",
  "https://images.prismic.io/cuub/Z0R6zq8jQArT1RfP_3.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=920",
  "https://images.prismic.io/cuub/Z03cqZbqstJ979Up_410TOORAKRDV07GFLIVING&DININGFINALEDIT.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=1867",
];

const crouselContent = {
  mainHeading: "Transforming Spaces with 3D Visualization",
  steps: [
    {
      number: "01",
      title: "3D Walkthroughs & Animations",
      description:
        "Experience your space before it’s built with immersive 3D walkthroughs and animations that showcase design, layout, and ambiance realistically.",
    },
    {
      number: "02",
      title: "Design Revisions & Customization",
      description:
        "Quickly adapt your vision with flexible design revisions and customization, ensuring every detail aligns perfectly with your style and needs.",
    },
    {
      number: "03",
      title: "Space Planning & Layout Design",
      description:
        "Optimize every inch with smart space planning and layout design, balancing functionality and style for a harmonious, well-organized interior.",
    }
  ],
};

const crouselImages = [
  "/images/Servicesimages/01 interior.avif", // Building image for step 1
  "/images/Servicesimages/02 interior.avif", // Different building for step 2
  "/images/Servicesimages/03 interior.avif", // Interior visualization for step 3
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2835&auto=format&fit=crop", // Final delivery visualization for step 4
];

const faqData = [
  {
    question: "What is 2D interior design?",
    answer:
      "2D interior design involves creating floor plans and layout drawings that represent the spatial arrangement and design of an interior space from a top-down view.",
  },
  {
    question: "Why is 2D interior design important for my project?",
    answer:
      "2D plans help visualize space layout, furniture placement, and design flow, providing a clear foundation before moving to 3D rendering or actual implementation.",
  },
  {
    question: "How long does a 2D interior design project take?",
    answer:
      "Depending on the project size and complexity, it typically takes 1 to 3 weeks. We provide a timeline after the initial discussion.",
  },
  {
    question: "Can you revise my existing floor plan?",
    answer:
      "Absolutely! We can update your current 2D layout to optimize space usage, improve functionality, or align with new design goals.",
  },
  {
    question: "Do you offer furniture layout planning in 2D?",
    answer:
      "Yes, we include detailed furniture placement in 2D layouts to ensure efficient use of space and support your interior style preferences.",
  },
  {
    question: "What tools do you use for 2D interior design?",
    answer:
      "We use tools like AutoCAD, SketchUp (2D mode), and Adobe Illustrator to create precise and visually clear 2D layouts.",
  },
];

  const handleSendMessage = () => {
    console.log("Send message clicked")
    // Implement your send message functionality here
  }

  const handleScheduleCall = () => {
    console.log("Schedule call clicked")
    // Implement your schedule call functionality here
  }
  const partnersData = [
    { name: "KFK", logo: "/images/brands/brand-1.avif", alt: "KFK Logo" },
    { name: "DKO", logo: "/images/brands/brand-2.avif", alt: "DKO Logo" },
    { name: "Milieu", logo: "/images/brands/brand-3.avif", alt: "Milieu Logo" },
    { name: "Assemble", logo: "/images/brands/brand-4.avif", alt: "Assemble Logo" },
    { name: "PVA", logo: "/images/brands/brand-5.avif", alt: "PVA Logo" },
    { name: "FIELDWORK", logo: "/images/brands/brand-6.avif", alt: "FIELDWORK Logo" },
    { name: "MAIN PROJECTS", logo: "/images/brands/brand-7.avif", alt: "MAIN PROJECTS Logo" },
    { name: "MHNDU", logo: "/images/brands/brand-8.avif", alt: "MHNDU Logo" },
    { name: "PS", logo: "/images/brands/brand-9.avif", alt: "PS Logo" },
    { name: "Eldridge Anderson", logo: "/images/brands/brand-10.avif", alt: "Eldridge Anderson Logo" },
]
function InteriorDesgining() {
  return (
    <>
     <ServicesHeroSection
        backgroundImageUrl="https://images.prismic.io/cuub/f2464877-c4f5-462a-8d2a-93a976bc7d71_CREMORNE%20V04.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=1920"
        title="3D Interior Desgin"
      />
      <ServiceThreeCards cards={cardData} />
      <ServicesProject projectImages={projectImages} />
      <ServicesScrollSection content={crouselContent} images={crouselImages} />
       <PartnersSection partners={partnersData} />
      <ServicesFAQ faqItems={faqData} onSendMessage={handleSendMessage} onScheduleCall={handleScheduleCall} />
      <ServicesBoxSection/>

    
    </>
  )
}

export default InteriorDesgining