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
      "Every video project starts with a strong strategy. We collaborate with you to understand your objectives, audience, and messaging — ensuring the video aligns with your brand and business goals.",
  },
  {
    title: "Positioning",
    description:
      "From concept to scripting and storyboarding, we develop a unique visual narrative that communicates your message clearly and memorably — whether it's a corporate film or a TV commercial.",
  },
  {
    title: "Creative",
    description:
      "Our production team handles filming, direction, drone shoots, voiceovers, and post-production. With editing, color grading, motion graphics, and sound design, we bring your story to life with cinematic quality.",
  },
];

const projectImages = [
  "https://images.prismic.io/cuub/Z0R6yq8jQArT1RfO_2.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=920",
  "https://images.prismic.io/cuub/Z0R6zq8jQArT1RfP_3.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=920",
  "https://images.prismic.io/cuub/Z03cqZbqstJ979Up_410TOORAKRDV07GFLIVING&DININGFINALEDIT.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=1867",
];

const crouselContent = {
  mainHeading: "Visual Storytelling for Modern Brands",
  steps: [
    {
      number: "01",
      title: "Fill the brief",
      description:
        "Send us a completed short brief along with details about your project. It will help us formulate an offer for you.",
    },
    {
      number: "02",
      title: "Review the proposal",
      description:
        "We'll send you a detailed proposal with timeline and cost estimates for your project.",
    },
    {
      number: "03",
      title: "Provide feedback",
      description:
        "Review our initial concepts and provide feedback to ensure we're aligned with your vision.",
    },
    {
      number: "04",
      title: "Receive final delivery",
      description:
        "Get your high-quality 3D visualizations ready for your marketing and presentation needs.",
    },
  ],
};

const crouselImages = [
  "https://images.prismic.io/cuub/a0abcba2-5a92-4b45-b3ad-6ef79e5a73fa_DOCKLANDS-DR-V03-PHOTOMONTAGE-FINAL.jpg?ixlib=gatsbyFP&auto=compress,format&fit=max&q=75&w=960", // Building image for step 1
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", // Different building for step 2
  "https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=2424&auto=format&fit=crop", // Interior visualization for step 3
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2835&auto=format&fit=crop", // Final delivery visualization for step 4
];


const faqData = [
  {
    question: "What types of video production do you offer?",
    answer:
      "We produce corporate films, promotional videos, documentaries, event coverage, safety training videos, aerial drone shoots, TV commercials, and more.",
  },
  {
    question: "Do you handle the script and concept development?",
    answer:
      "Yes. We provide complete pre-production services including concept creation, scripting, storyboarding, and shot planning to ensure your video is well-structured and impactful.",
  },
  {
    question: "Can you cover events and provide live footage editing?",
    answer:
      "Absolutely. We offer multi-camera event coverage and can deliver highlight reels or edited footage shortly after the event when needed.",
  },
  {
    question: "Do you provide drone/aerial video services?",
    answer:
      "Yes, we offer aerial filming using licensed drone pilots — ideal for construction, real estate, industrial, and outdoor event footage.",
  },
  {
    question: "What’s the typical timeline for a video project?",
    answer:
      "Depending on the scope, video production can take 1–4 weeks including planning, shooting, and post-production. Tight deadlines can be accommodated with advance notice.",
  },
  {
    question: "Will I get the raw footage along with the final video?",
    answer:
      "We deliver the final edited video in high resolution. Raw footage can be provided upon request and based on the agreed terms.",
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
const VideoProductionServices = () => {
  return (
   <>
      <ServicesHeroSection
        backgroundImageUrl="https://images.prismic.io/cuub/f2464877-c4f5-462a-8d2a-93a976bc7d71_CREMORNE%20V04.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=1920"
        title="Video Production Services"
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

export default VideoProductionServices