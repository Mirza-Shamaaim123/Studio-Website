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
      "A web development strategy ensures user-friendly, responsive design, aligns with business goals, emphasizes performance, SEO, and security, and uses modern technologies to deliver efficient, scalable, and engaging digital experiences.",
  },
  {
    title: "Positioning",
    description:"Web development positioning highlights a brand’s expertise in creating fast, secure, and visually appealing websites. It differentiates through innovation, user experience, and tailored solutions that meet specific business needs.",
  },
  {
    title: "Creative",
    description:
      "Web development creativity blends design and function to craft engaging, interactive websites. It involves innovative layouts, unique visuals, and intuitive user experiences that reflect a brand’s identity and captivate users.",
  },
];

const projectImages = [
  "https://images.prismic.io/cuub/Z0R6yq8jQArT1RfO_2.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=920",
  "https://images.prismic.io/cuub/Z0R6zq8jQArT1RfP_3.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=920",
  "https://images.prismic.io/cuub/Z03cqZbqstJ979Up_410TOORAKRDV07GFLIVING&DININGFINALEDIT.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=1867",
];

const crouselContent = {
  mainHeading: "Pixels to Profits",
  steps: [
    {
      number: "01",
      title: "Frontend Animations Website",
      description:
        "Front-end animation enhances user experience by adding smooth transitions, visual feedback, and interactivity using CSS, JavaScript, and animation libraries.",
    },
    {
      number: "02",
      title: "Woocomerce",
      description:
        "WooCommerce is a powerful WordPress plugin that enables users to create customizable, feature-rich online stores for selling products and services.",
    },
    {
      number: "03",
      title: "AI Integration",
      description:
        "AI integration enhances systems by automating tasks, analyzing data, improving decision-making, and delivering personalized user experiences across various digital platforms.",
    }
  ],
};

const crouselImages = [
  "/images/Servicesimages/front end.webp", // Building image for step 1
  "/images/Servicesimages/woocommerce.jpg", // Different building for step 2
  "/images/Servicesimages/Ai integration.jpg", // Interior visualization for step 3
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2835&auto=format&fit=crop", // Final delivery visualization for step 4
];

const faqData = [
    {
      question: "What types of websites do you develop?",
      answer:
        "We create various websites including business sites, e-commerce stores, portfolios, blogs, and custom web applications.",
    },
    {
      question: "Which technologies do you use for web development?",
      answer:
        "We use HTML, CSS, JavaScript, React, Angular, Node.js, PHP, WordPress, WooCommerce, and more based on project needs",
    },
    {
      question: "How long does it take to develop a website?",
      answer:
        "Typically, website development takes 4 to 8 weeks depending on complexity and client requirements.",
    },
    {
      question: "Can you design mobile-friendly and responsive websites?",
      answer:
        "Absolutely. All our websites are responsive, ensuring optimal performance on desktops, tablets, and smartphones.",
    },
    {
      question: " Will I be able to update my website myself?",
      answer:
        "Yes, we often integrate user-friendly CMS like WordPress, allowing clients to update content easily without coding.",
    },
    {
      question: "What is the cost of developing a website?",
      answer:
        "Costs vary based on features, design complexity, and functionality. We provide custom quotes after understanding your needs.",
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
];


function WebDevelopment() {
  return (
    <>
       <ServicesHeroSection
        backgroundImageUrl="https://images.prismic.io/cuub/f2464877-c4f5-462a-8d2a-93a976bc7d71_CREMORNE%20V04.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=1920"
        title="Web Development"
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

export default WebDevelopment