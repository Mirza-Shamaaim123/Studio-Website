import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// If you want to keep the same CSS look:
import "./slider.css"; // (copy your given CSS into this file)

const slides = [
  {
    title: "Expert in Visualization",
    image: "https://leverage.codings.dev/wp-content/uploads/2021/04/bg-8.jpg",
    description:
      "We are providing end-to-end Videos, Audios and Imagery production services and promote the business to target the desired audience. We are expert in creating, time-lapse videos, animations, TV commercials and cover corporate events as well",
    link: "#",
  },
  {
    title: "Making Corporate & Safety Videos",
    image: "https://elitedstudio.com/wp-content/uploads/2021/05/bg-9.jpg",
    description:
      "At Elite Design Studio, we craft compelling corporate and safety videos that inform, engage, and leave a lasting impression. Whether it's training your workforce, promoting company values, or delivering critical safety protocols, we transform complex messages into visually clear, professional, and impactful content.",
    link: "#",
  },
  {
    title: "Creating Television Commercials",
    image:
      "https://elitedstudio.com/wp-content/uploads/2021/07/event-coverage.jpg",
    description:
      "Elite Design Studio brings your brand to life on screen with high-impact television commercials that captivate and convert. From concept to broadcast, our creative team handles scripting, shooting, editing, and post-production — delivering cinematic quality with marketing precision.",
    link: "#",
  },
  {
    title: "Covering Events and More",
    image:
      "https://elitedstudio.com/wp-content/uploads/2021/07/tv-commercials.jpg",
    description:
      "From corporate gatherings and product launches to live performances and behind-the-scenes moments — Elite Design Studio captures it all. Our event coverage blends cinematic visuals with real-time energy, ensuring every angle, emotion, and highlight is preserved with creative finesse.",
    link: "#",
  },
];

export default function CreativeCarousel() {
  return (
    <section
      style={{ height: "100vh" }}
      className="creative-carousal--hero section5 z-[100]  sticky top-0 mb-[100] z-10 w-full h-screen flex justify-center text-white text-4xl"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 9500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          type: "progressbar",
        }}
        loop={true}
        breakpoints={{
          1024: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          320: { slidesPerView: 1 },
        }}
        className="carousel-slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={{
              // background: "linear-gradient(to right, #303f9f, #9c27b0)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              width: "500px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "70%",
                height: "500px",
                padding: "60px",
                borderRadius: "20px",
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "hidden",
              }}
              className="inner"
            >
              {/* Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  borderRadius: "20px",
                  zIndex: 1,
                }}
              ></div>

              {/* Content */}
              <div style={{ position: "relative", zIndex: 2 }}>
                <h3
                  style={{
                    background: "linear-gradient(135deg,rgb(158, 168, 238),rgb(228, 155, 240))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                    fontWeight : '800'
                  }}
                >
                  {slide.title}
                </h3>

                <p
                  style={{
                    fontSize: "20px",
                    margin: "20px",
                    paddingTop: "60px",
                    fontWeight: "lighter",
                  }}
                >
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Progress Bar */}
        {/* <div className="slide-progress">
          <span>01</span>
          <div className="swiper-pagination swiper-pagination-progressbar">
            <span className="swiper-pagination-progressbar-fill"></span>
          </div>
          <span>05</span>
        </div> */}
        {/* Navigation Buttons */}
        <div className="swiper-button-prev">PREV</div>
        <div className="swiper-button-next">NEXT</div>
      </Swiper>
    </section>
  );
}
