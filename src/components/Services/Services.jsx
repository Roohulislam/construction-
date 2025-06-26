import { useState } from "react";
import { motion } from "framer-motion";

// Replace these with your actual image imports
import service1 from "../../assets/hero/Power and Energy (1).png";
import service2 from "../../assets/hero/chemical.png";
import service3 from "../../assets/hero/Oil and Gas f.png";
import service4 from "../../assets/hero/airport and aviation.png";
import service5 from "../../assets/hero/water.png";
import service6 from "../../assets/hero/Building.png";
import service7 from "../../assets/hero/Road housing.png";
import service8 from "../../assets/hero/environmental.png";


const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: "POWER AND ENERGY",
      image: service1,
    },
    {
      id: 2,
      title: "CHEMICALS AND PETROCHEMICALS",
      image: service2,
    },
    {
      id: 3,
      title: "OIL AND GAS",
      image: service3,
    },
    {
      id: 4,
      title: "AIRPORT AND AVIATION",
      image: service4,
    },
       {
      id: 5,
      title: "WATER RESOURCES ENGINEERING",
      image: service5,
    },
       {
      id: 6,
      title: "BUILDING",
      image: service6,
    },
       {
      id: 7,
      title: "ROADS HOUSING AND INFRASTRUCTURE",
      image: service7,
    },
       {
      id: 8,
      title: "ENVIRONMENTAL",
      image: service8,
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Award Winning Company Section */}
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 uppercase mb-6"
        >
          AWARD WINNING COMPANY
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-12"
        >
          Since 1962, Habib Rafiq (Pvt.) Limited has come a long way to symbolize commitment, 
          distinction and professional Excellence by meeting the stringent, demanding and 
          extra ordinary work requirements of the client.
        </motion.p>
        
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl font-semibold text-gray-900 uppercase border-t-2 border-b-2 border-gray-200 py-4 inline-block"
        >
          AREAS OF SERVICES
        </motion.h3>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * service.id }}
            whileHover={{ scale: 1.03 }}
            className="relative overflow-hidden rounded-lg cursor-pointer group"
            onMouseEnter={() => setHoveredService(service.id)}
            onMouseLeave={() => setHoveredService(null)}
          >
            {/* Image with fixed height */}
            <div className="h-64 w-full overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            {/* Service Title Below Image */}
            <div className="mt-4 text-center">
              <motion.h3
                className={`text-xl font-bold ${
                  hoveredService === service.id ? "text-green-600" : "text-gray-900"
                } transition-colors duration-300`}
              >
                {service.title}
              </motion.h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;