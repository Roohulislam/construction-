import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Logo imports
import logo1 from "../assets/group/1.png";
import logo2 from "../assets/group/2.png";
import logo3 from "../assets/group/3.png";
import logo4 from "../assets/group/4.jpg";
import logo5 from "../assets/group/5.png";
import logo6 from "../assets/group/6.png";
import logo7 from "../assets/group/7.png";
import logo8 from "../assets/group/8.png";
import logo9 from "../assets/group/9.png";
import logo10 from "../assets/group/10.png";
import logo11 from "../assets/group/11.png";
import logo12 from "../assets/group/12.png";
import logo13 from "../assets/group/13.png";
import logo14 from "../assets/group/GFSlogo.png";

const GroupAssociate = () => {
  const [groupWidth, setGroupWidth] = useState(0);
  const [associateWidth, setAssociateWidth] = useState(0);
  const groupCarousel = useRef();
  const associateCarousel = useRef();

  const groupLogos = [
    { image: logo1 },
    { image: logo2 },
    { image: logo3 },
    { image: logo4 },
    { image: logo5 },
    { image: logo6 },
    { image: logo7 },
  ];

  const associateLogos = [
    { image: logo8 },
    { image: logo9 },
    { image: logo14 },
    { image: logo10 },
    { image: logo11 },
    { image: logo12 },
    { image: logo13 }
  ];

  // Duplicate logos for seamless looping
  const duplicatedGroupLogos = [...groupLogos, ...groupLogos];
  const duplicatedAssociateLogos = [...associateLogos, ...associateLogos];

  useEffect(() => {
    setGroupWidth(groupCarousel.current.scrollWidth - groupCarousel.current.offsetWidth);
    setAssociateWidth(associateCarousel.current.scrollWidth - associateCarousel.current.offsetWidth);
  }, []);

  // Auto-scrolling animation for desktop
  const AutoScrollCarousel = ({ logos, carouselRef, width, title }) => (
    <div className="flex items-center gap-8">
      <motion.h2 
        className="text-3xl font-bold text-gray-900 whitespace-nowrap"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      
      <motion.div
        ref={carouselRef}
        className="overflow-hidden cursor-grab flex-1"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-8"
          animate={{
            x: [0, -width / 2],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="min-w-[120px] flex items-center p-4"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <motion.img
                src={logo.image}
                alt="Company logo"
                className="max-h-16 object-contain"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );

  // Auto-scrolling horizontal carousel for mobile
  const MobileAutoScrollCarousel = ({ logos, title }) => {
    const duplicatedLogos = [...logos, ...logos];
    const itemWidth = 120; // width of each logo item
    const gap = 16; // gap between items
    const mobileWidth = (logos.length * (itemWidth + gap)) - gap;
    
    return (
      <div className="flex flex-col gap-4">
        <motion.h2 
          className="text-2xl font-bold text-gray-900"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{
              x: [0, -mobileWidth],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <motion.div
                key={index}
                className="min-w-[120px] flex items-center justify-center p-4 bg-gray-50 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <img
                  src={logo.image}
                  alt="Company logo"
                  className="h-12 object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* THE GROUP Section */}
        <div>
          {/* Desktop Layout */}
          <div className="hidden md:block">
            <AutoScrollCarousel 
              logos={duplicatedGroupLogos} 
              carouselRef={groupCarousel} 
              width={groupWidth} 
              title="THE GROUP"
            />
          </div>
          
          {/* Mobile Layout */}
          <div className="md:hidden">
            <MobileAutoScrollCarousel 
              logos={groupLogos}
              title="THE GROUP"
            />
          </div>
        </div>

        {/* THE ASSOCIATE Section */}
        <div>
          {/* Desktop Layout */}
          <div className="hidden md:block">
            <AutoScrollCarousel 
              logos={duplicatedAssociateLogos} 
              carouselRef={associateCarousel} 
              width={associateWidth} 
              title="THE ASSOCIATE"
            />
          </div>
          
          {/* Mobile Layout */}
          <div className="md:hidden">
            <MobileAutoScrollCarousel 
              logos={associateLogos}
              title="THE ASSOCIATE"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupAssociate;