import { motion } from "framer-motion";
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiArrowRight,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* OUR COMPANY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-lg font-bold uppercase mb-4">OUR COMPANY</h3>
            <ul className="space-y-2">
              {['About Us', 'Services', 'MD Message', 'News & Events', 'Our Clients', 'Resources', 'Careers', 'Contact Us'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <FiArrowRight className="mr-2 text-green-400" size={14} />
                  <a href="#" className="hover:text-green-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <FiInstagram size={20} />
              </a>
            </div>
          </motion.div>

          {/* OUR SERVICES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-lg font-bold uppercase mb-4">OUR SERVICES</h3>
            <ul className="space-y-2">
              {['Power & Energy', 'Petrochemicals', 'Oil & Gas', 'Environmental', 'Air Ports & Aviation', 'Water Resources Engineering', 'Buildings', 'Road & Infrastructure'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <FiArrowRight className="mr-2 text-green-400" size={14} />
                  <a href="#" className="hover:text-green-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* GET IN TOUCH */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-lg font-bold uppercase mb-4">GET IN TOUCH</h3>
            <p className="mb-4">We're here to listen:</p>
            <div className="space-y-3">
              <div className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-green-400" size={16} />
                <address className="not-italic">
                  13, Block-H, Gulberg-II,<br />
                  Lahore, Pakistan
                </address>
              </div>
              <div className="flex items-center">
                <FiPhone className="mr-3 text-green-400" size={16} />
                <a href="tel:+924235711411" className="hover:text-green-400 transition-colors">
                  +92 000000000
                </a>
              </div>
              <div className="flex items-center">
                <FiMail className="mr-3 text-green-400" size={16} />
                <a href="mailto:hrl@habibrafiq.com" className="hover:text-green-400 transition-colors">
                  info@faizurrehman.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* OUR LOCATION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-lg font-bold uppercase mb-4">OUR LOCATION</h3>
            <div className="bg-gray-800 rounded-lg overflow-hidden h-48 relative">
              {/* Placeholder for Google Map - replace with actual iframe */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-700">
                <p className="text-center text-gray-400">Google Map Embed</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 text-xs text-gray-300">
                <div className="flex justify-between">
                  <span>View larger map</span>
                  <span>©2022 Google</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-6 border-t border-gray-800 text-center text-sm"
        >
          <p>© 2022 S/M Faiz-ur-rehman (Pvt.) Ltd. All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;