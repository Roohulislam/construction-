import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { services, itemsPerPage } from "../../Data/services"; 

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  // Calculate total slides
  const totalSlides = Math.ceil(services.length / itemsPerPage);

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleServiceClick = (service) => {
    navigate("/projects", { state: { service } });
  };

  return (
    <section style={{ backgroundColor: "#faf9f5" }} className="py-4 px-1 mb-2 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-2xl font-bold text-gray-900 uppercase mb-2"
        >
          OUR SERVICES
        </motion.h2>
      </div>

      {/* Modern Slider */}
      <div className="relative">
        {/* Slider Container */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${currentSlide * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0 px-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.slice(slideIndex * itemsPerPage, slideIndex * itemsPerPage + itemsPerPage).map((service) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ y: -5 }}
                      className="bg-yellow-50 rounded-xl shadow-lg overflow-hidden cursor-pointer border border-gray-100 relative"
                      onMouseEnter={() => setHoveredCard(service.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                      onClick={() => handleServiceClick(service)}
                    >
                      {/* Image with hover zoom */}
                      <div className="h-64 overflow-hidden relative">
                        <motion.img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          animate={{
                            scale: hoveredCard === service.id ? 1.05 : 1
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>

                      {/* Content with animated code display */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        
                        {/* Animated green code badge */}
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: hoveredCard === service.id ? "auto" : 0,
                            opacity: hoveredCard === service.id ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div style={{ backgroundColor: "#1e4a7a" }} className="text-white text-sm px-3 py-1 rounded-full inline-block mb-2">
                            {service.code}
                          </div>
                        </motion.div>
                        
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Modern Pagination */}
        <div className="flex justify-center mt-10">
          <div className="flex items-center space-x-3">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full hover:bg-gray-300"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-colors ${
                    currentSlide === index 
                      ? 'bg-blue-950 text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full hover:bg-gray-300"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;