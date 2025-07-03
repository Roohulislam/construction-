import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Import all 24 images
import service1 from "../../assets/hero/Construction of buildings (2).png";
import service2 from "../../assets/hero/Road and Pavements (2).png";
import service3 from "../../assets/hero/Irrigation & Flood Control Systems (2).png";
import service4 from "../../assets/hero/Construction of steel framed buildings (2).png";
import service5 from "../../assets/hero/Installation, maintenance and repair of oil and gas pipelines (2).png";
import service6 from "../../assets/hero/General Civil Engineering Works (2).png";
import service7 from "../../assets/hero/Security, Safety Surveillance System (2).png";
import service8 from "../../assets/hero/Low Voltage Installation (2).png";
import service9 from "../../assets/hero/Telecommunication Installations (2).png";
import service10 from "../../assets/hero/Miscellaneous Specialized (2).png";
import service11 from "../../assets/hero/Solar Energy system (2).png";
import service12 from "../../assets/hero/Solar Installation (2).png";
import service13 from "../../assets/hero/Installation of Solar Power LED Street Lighting System (2).png";
import service14 from "../../assets/hero/Solar Power (2).png";
// import service15 from "../../assets/hero/Sewerage Works.png";
// import service16 from "../../assets/hero/Sound System.png";
// import service17 from "../../assets/hero/Building Automation.png";
// import service18 from "../../assets/hero/Specialized Lighting System.png";
// import service19 from "../../assets/hero/External Telecom.png";
// import service20 from "../../assets/hero/Solar Solutions.png";
// import service21 from "../../assets/hero/Electrical Works.png";
// import service22 from "../../assets/hero/Renewable Energy.png";
// import service23 from "../../assets/hero/Solar Projects.png";
// import service24 from "../../assets/hero/Solar Technology.png";

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  // Services data with all 24 items
  const services = [
    { id: 1, code: "BC01", title: "Construction of Buildings", image: service1,
      description: "Prefabricated components and steel framed buildings" },
    { id: 2, code: "CE01", title: "Road and Pavements", image: service2,
      description: "Drainage & Retaining Structures" },
    { id: 3, code: "CE04(ii)", title: "Irrigation & Flood Control", image: service3,
      description: "Comprehensive water management systems" },
    { id: 4, code: "BC02", title: "Building Restoration", image: service4,
      description: "Conservation and restoration services" },
    { id: 5, code: "CE08", title: "Oil and Gas Pipelines", image: service5,
      description: "Installation and maintenance" },
    { id: 6, code: "CE10", title: "Civil Engineering Works", image: service6,
      description: "General civil engineering solutions" },
    { id: 7, code: "EE02", title: "Security Systems", image: service7,
      description: "Safety surveillance systems" },
    { id: 8, code: "EE04", title: "Electrical Installations", image: service8,
      description: "Low voltage solutions" },
    { id: 9, code: "EE07", title: "Telecommunications", image: service9,
      description: "Installation services" },
    { id: 10, code: "EE10", title: "Specialized Services", image: service10,
      description: "Miscellaneous specialized solutions" },
    { id: 11, code: "EE11(iii)", title: "Solar Energy", image: service11,
      description: "Solar energy systems" },
    { id: 12, code: "EE11(vi)", title: "Solar Installation", image: service12,
      description: "Professional installation services" },
    { id: 13, code: "EE11(vv)", title: "Solar Lighting", image: service13,
      description: "LED street lighting systems" },
    { id: 14, code: "EE11(xxv)", title: "Solar Power", image: service14,
      description: "Complete solar solutions" },
    // { id: 15, code: "CE09", title: "Water Resources", image: service15,
    //   description: "Sewerage and water supply" },
    // { id: 16, code: "EE01", title: "Sound Systems", image: service16,
    //   description: "Professional audio installations" },
    // { id: 17, code: "EE03", title: "Building Automation", image: service17,
    //   description: "Automation and energy systems" },
    // { id: 18, code: "EE06", title: "Lighting Systems", image: service18,
    //   description: "Specialized lighting solutions" },
    // { id: 19, code: "EE08", title: "External Telecom", image: service19,
    //   description: "External communication works" },
    // { id: 20, code: "EE11(ii)", title: "Solar Solutions", image: service20,
    //   description: "Advanced solar technologies" },
    // { id: 21, code: "EE11(vi)", title: "Electrical Works", image: service21,
    //   description: "General electrical services" },
    // { id: 22, code: "EE11(viii)", title: "Renewable Energy", image: service22,
    //   description: "Wind and solar solutions" },
    // { id: 23, code: "EE11(xvii)", title: "Solar Projects", image: service23,
    //   description: "Complete solar works" },
    // { id: 24, code: "EE11(i)", title: "Solar Technology", image: service24,
    //   description: "Innovative solar applications" }
  ];

  // Settings
  const itemsPerPage = 6;
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
    <section style={{ backgroundColor: "#faf9f5" }} className="py-12 px-4 mb-2 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 uppercase mb-6 "
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
              <div key={slideIndex} className="w-full flex-shrink-0 px-4">
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
                        {/* Code badge overlay */}
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
                          <div style={{ backgroundColor: "#1e4a7a" }} className=" text-white text-sm px-3 py-1 rounded-full inline-block mb-2">
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