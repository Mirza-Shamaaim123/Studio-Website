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
      "We begin every animation project by identifying your objectives, audience, and key messages. Whether it's 2D, 3D, or whiteboard animation, this strategic foundation ensures the visual storytelling aligns with your brand voice and communicates effectively.",
  },
  {
    title: "Positioning",
    description:
      "Based on the strategic groundwork, we define the animation style and tone that best suits your brand. From sleek 3D animations to playful 2D or educational whiteboard styles, we position your message to stand out and engage the intended audience with clarity and purpose.",
  },
  {
    title: "Creative",
    description:
      "This phase transforms your ideas into compelling animations. Our creative team crafts visually rich 2D, 3D, and whiteboard animations using storytelling, motion graphics, and design expertise—bringing your vision to life with stunning results.",
  },
];

const projectImages = [
  "https://images.prismic.io/cuub/Z0R6yq8jQArT1RfO_2.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=920",
  "https://images.prismic.io/cuub/Z0R6zq8jQArT1RfP_3.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=920",
  "https://images.prismic.io/cuub/Z03cqZbqstJ979Up_410TOORAKRDV07GFLIVING&DININGFINALEDIT.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=1867",
];

const crouselContent = {
  mainHeading: "Digital Marketing Decoded",
  steps: [
    {
      number: "01",
      title: "Search Engine Optimization (SEO)",
      description:
        "Search Engine Optimization (SEO) improves website visibility on search engines, driving organic traffic through keyword optimization, quality content, and technical enhancements.",
    },
    {
      number: "02",
      title: "Pay-Per-Click Advertising (PPC)",
      description:
        "Pay-Per-Click (PPC) advertising drives targeted traffic by paying for each click on ads displayed in search engines or social media platforms.",
    },
    {
      number: "03",
      title: "Affiliate Marketing",
      description:
        "Affiliate marketing rewards partners for promoting products or services, driving sales or traffic through their referral links and marketing efforts.",
    }
  ],
};

const crouselImages = [
  "/images/Servicesimages/SCO.webp", // Building image for step 1
  "/images/Servicesimages/PPC.jpg", // Different building for step 2
  "/images/Servicesimages/Marketing.jpg", // Interior visualization for step 3
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2835&auto=format&fit=crop", // Final delivery visualization for step 4
];

const faqData = [
    {
      question: " What digital marketing services do you offer?",
      answer:
        "We offer SEO, PPC, social media marketing, content marketing, email marketing, affiliate marketing, and analytics tracking.",
    },
    {
      question: "How can digital marketing help my business?",
      answer:
        "It increases your brand visibility, attracts targeted traffic, boosts customer engagement, and generates leads or sales through measurable online strategies.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Results vary by service. SEO may take 3–6 months, while PPC and social media ads can show results much faster.",
    },
    {
      question: "What is the difference between SEO and PPC?",
      answer:
        "SEO drives organic traffic over time; PPC (Pay-Per-Click) delivers immediate results by displaying paid ads on search engines or platforms.",
    },
    {
      question: "Do you manage social media accounts?",
      answer:
        "Yes, we manage content creation, posting schedules, engagement, and advertising on platforms like Facebook, Instagram, LinkedIn, and Twitter.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We work with various industries including retail, healthcare, education, real estate, technology, and more—tailoring strategies to fit each business.",
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

function GrapicDesgining() {
  return (
    <>
     <ServicesHeroSection
        backgroundImageUrl="https://images.prismic.io/cuub/f2464877-c4f5-462a-8d2a-93a976bc7d71_CREMORNE%20V04.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=1920"
        title="Grapic Desgining"
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

export default GrapicDesgining