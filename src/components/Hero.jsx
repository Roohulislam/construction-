import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Replace these with your actual image imports
import hero1 from "../assets/hero/airport and aviation.png";
import hero2 from "../assets/hero/Building.png";
import hero3 from "../assets/hero/chemical.png";
import hero4 from "../assets/hero/environmental.png";
import hero5 from "../assets/hero/Oil and Gas f.png";
import hero6 from "../assets/hero/Power and Energy (1).png";
import hero7 from "../assets/hero/Road housing.png";
import hero8 from "../assets/hero/smart city.png";
import hero9 from "../assets/hero/water.png";

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
    <section className="relative w-full  h-screen overflow-hidden">
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

      {/* Navigation dots */}
      <div className="absolute bottom-8  left-0 right-0 flex justify-center space-x-2 z-10">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

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