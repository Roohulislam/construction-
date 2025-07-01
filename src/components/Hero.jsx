import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Replace these with your actual image imports
import hero1 from "../assets/hero/air traffic control towers (2).png";
import hero2 from "../assets/hero/Airports Terminal buildings (2).png";
import hero3 from "../assets/hero/cargo terminals (2).png";
import hero4 from "../assets/hero/Construction of buildings (2).png";
import hero5 from "../assets/hero/Construction of steel framed buildings (2).png";
import hero6 from "../assets/hero/contact piers (2).png";
import hero7 from "../assets/hero/Drainage (2).png";
import hero8 from "../assets/hero/General Civil Engineering Works (2).png";
import hero9 from "../assets/hero/industrial plants using prefabricated components and systems (2).png";
import hero10 from "../assets/hero/Installation of Solar Power LED Street Lighting System (2).png";
import hero11 from "../assets/hero/Installation, maintenance and repair of oil and gas pipelines (2).png";
import hero12 from "../assets/hero/Irrigation & Flood Control Systems (2).png";
import hero13 from "../assets/hero/Irrigation & Flood Control Systems (3).png";
import hero14 from "../assets/hero/Irrigation & Flood Control Systems (4).png";
import hero15 from "../assets/hero/Low Voltage Installation (2).png";
import hero16 from "../assets/hero/Miscellaneous Specialized (2).png";
import hero17 from "../assets/hero/passenger loading bridges (2).png";
import hero18 from "../assets/hero/Telecommunication Installations (2).png";
import hero19 from "../assets/hero/Solar Power (2).png";
import hero20 from "../assets/hero/Solar Installation (2).png";
import hero21 from "../assets/hero/Solar Energy system (2).png";
import hero22 from "../assets/hero/Signcraft Installation (2).png";
import hero23 from "../assets/hero/Sewerage Works (2).png";
import hero24 from "../assets/hero/Security, Safety Surveillance System (2).png";
import hero25 from "../assets/hero/Satellite buildings (2).png";
import hero26 from "../assets/hero/Road and Pavements (2).png";
import hero27 from "../assets/hero/Retaining Structure (2).png";
import hero28 from "../assets/hero/Pavements (2).png";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const slides = [
    {
      id: 1,
      image: hero1,
      alt: "First slide description",
    },
    {
      id: 2,
      image: hero2,
      alt: "Second slide description",
    },
    {
      id: 3,
      image: hero3,
      alt: "Third slide description",
    },
     {
      id: 4,
      image: hero4,
      alt: "Third slide description",
    },
     {
      id: 5,
      image: hero5,
      alt: "Third slide description",
    },
     {
      id: 6,
      image: hero6,
      alt: "Third slide description",
    }, {
      id: 7,
      image: hero7,
      alt: "Third slide description",
    },
     {
      id: 8,
      image: hero8,
      alt: "Third slide description",
    },
     {
      id: 9,
      image: hero9,
      alt: "Third slide description",
    },
     {
      id: 10,
      image: hero10,
      alt: "Third slide description",
    },
     {
      id:11,
      image: hero11,
      alt: "Third slide description",
    },
     {
      id: 12,
      image: hero12,
      alt: "Third slide description",
    },
     {
      id: 13,
      image: hero13,
      alt: "Third slide description",
    },
     {
      id: 14,
      image: hero14,
      alt: "Third slide description",
    },
     {
      id: 15,
      image: hero15,
      alt: "Third slide description",
    },
     {
      id: 16,
      image: hero16,
      alt: "Third slide description",
    },
     {
      id: 17,
      image: hero17,
      alt: "Third slide description",
    },
     {
      id: 18,
      image: hero18,
      alt: "Third slide description",
    },
     {
      id: 19,
      image: hero19,
      alt: "Third slide description",
    },
     {
      id: 20,
      image: hero20,
      alt: "Third slide description",
    },
     {
      id: 21,
      image: hero21,
      alt: "Third slide description",
    },
     {
      id: 23,
      image: hero23,
      alt: "Third slide description",
    },
     {
      id: 24,
      image: hero24,
      alt: "Third slide description",
    },
     {
      id: 25,
      image: hero25,
      alt: "Third slide description",
    },
     {
      id: 26,
      image: hero26,
      alt: "Third slide description",
    },
     {
      id: 27,
      image: hero27,
      alt: "Third slide description",
    },
     {
      id:28,
      image: hero28,
      alt: "Third slide description",
    },
     {
      id: 22,
      image: hero22,
      alt: "Third slide description",
    },

  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section  style={{ backgroundColor: "#faf9f5" }} className="relative w-full  h-[90vh] overflow-hidden">
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={slides[currentSlide].id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>



      {/* Optional navigation arrows */}
<button
        onClick={() => {
          setDirection(-1);
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full z-10 hover:bg-black/50 transition"
        aria-label="Previous slide"
      >
        <svg      
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={() => {
          setDirection(1);
          setCurrentSlide((prev) => (prev + 1) % slides.length);
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full z-10 hover:bg-black/50 transition"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </section>
  );
};

export default Hero;