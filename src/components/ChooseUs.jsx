import { motion } from "framer-motion";
import { useState } from "react";

// Replace these with your actual image imports
import chooseUsBanner from "../assets/services/why choose.png";
import qualityBadge from "../assets/services/qs.png";
import deliveryIcon from "../assets/services/timly.png";
import experienceIcon from "../assets/services/experience.png";
import globalIcon from "../assets/services/global.png";

const ChooseUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const features = [
    {
      title: "Quality Assurance",
      description: "Certified quality standards for all projects",
      icon: qualityBadge,
    },
    {
      title: "Timely Delivery",
      description: "Projects completed on schedule",
      icon: deliveryIcon,
    },
    {
      title: "60+ Years Experience",
      description: "Trusted since 1962",
      icon: experienceIcon,
    },
    {
      title: "Global Projects",
      description: "National and international presence",
      icon: globalIcon,
    },
  ];

  return (
    <section style={{ backgroundColor: "#faf9f5" }} className="py-2 px-2 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 uppercase mb-6"
          >
            WHY CHOOSE US
          </motion.h2>
          <div className="w-20 h-1 bg-blue-950 mx-auto mb-8"></div>
        </div>

        {/* Split-screen layout for larger screens */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Banner section - takes half width on large screens */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2 mb-8 lg:mb-0"
          >
            <div className="relative h-full rounded-xl overflow-hidden shadow-lg group">
              <img
                src={chooseUsBanner}
                alt="Why Choose Us Banner"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-500"
              >
                <motion.p
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                  className="text-white text-xl font-semibold px-4 text-center"
                >
                  Decades of Excellence in Engineering
                </motion.p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content section - takes half width on large screens */}
          <div className="lg:w-1/2 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <p className="text-lg text-gray-700 mb-6">
                S/M Faiz-ur-rehman & Co (Pvt.) Limited has come a long way to symbolize
                commitment, distinction and professional Excellence by meeting the
                stringent, demanding and extra ordinary work requirements of the
                client.
              </p>

              {isExpanded && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.4 }}
                  className="text-lg text-gray-700 mb-6"
                >
                  S/M has undertaken prestigious projects of high engineering,
                  national and international importance involving civil, electrical
                  and mechanical works for the last 60 years.
                </motion.p>
              )}

              <button
                onClick={toggleReadMore}
                className="flex items-center text-blue-950 font-semibold hover:text-yellow-600 transition-colors mb-8 lg:mb-12"
              >
                {isExpanded ? "READ LESS" : "READ MORE"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ml-2 transition-transform ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </motion.div>

            {/* Features grid - positioned below content on all screens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ y: -5 }}
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }} style={{ backgroundColor: "#f4cb4b" }}
                    className="w-12 h-12 sm:w-16 sm:h-16  rounded-full flex items-center justify-center mb-3 sm:mb-4"
                  >
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="h-6 w-6 sm:h-8 sm:w-8 object-contain"
                    />
                  </motion.div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;