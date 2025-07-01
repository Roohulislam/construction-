import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('Resources');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const resources = {
    'Resources': {
      description: 'With 66 years of engineering experience and as one of the largest construction companies in Pakistan, we have huge resources of qualified team and latest engineering equipment to execute any type and scale of Power Plants, Oil & Gas, Road Infrastructure, Buildings, Airports/Aviation, Environmental and Water & Irrigation Projects.',
      details: [
        'Specialized project management team with outstanding expertise',
        'Capability to plan, design, implement, test and execute large scale projects',
        'Turnkey project execution capability',
        'Experience across multiple industries and project types',
        'Proven track record of successful project delivery'
      ],
      icon: '🏗️'
    },
    'Man Power': {
      description: 'Our highly skilled workforce is our greatest asset, enabling us to deliver complex projects with precision and efficiency.',
      details: [
        'Large pool of qualified engineers and technicians',
        'Specialized teams for different project requirements',
        'Continuous training and skill development programs',
        'Experienced project managers and supervisors',
        'Multidisciplinary teams for integrated solutions'
      ],
      icon: '👷'
    },
    'Equipments': {
      description: 'We maintain a modern fleet of construction equipment and machinery to handle projects of any scale and complexity.',
      details: [
        'State-of-the-art construction machinery',
        'Specialized equipment for different project types',
        'Regular maintenance and upgrades',
        'Modern surveying and testing equipment',
        'Comprehensive equipment support infrastructure'
      ],
      icon: '🚜'
    },
    'Design Facility': {
      description: 'Our in-house design capabilities allow us to provide integrated engineering solutions from concept to completion.',
      details: [
        'Fully equipped design offices',
        'Advanced CAD and BIM capabilities',
        'Engineering software for all disciplines',
        'Prototyping and testing facilities',
        'Collaboration with international design firms'
      ],
      icon: '📐'
    }
  };

  return (
    <section style={{ backgroundColor: "#faf9f5" }} className="py-2 px-2 sm:px-6 lg:px-8">
      {/* Heading with gray background */}
      <div className="bg-gray-100 py-12 mb-12">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center"
          >
            RESOURCES
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left sidebar - 1/3 width */}
          <div className="lg:w-1/3">
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden bg-blue-600 text-white p-4 flex items-center justify-between w-full mb-4 rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span>Our Resources</span>
              <FiChevronRight className={`transition-transform ${mobileMenuOpen ? 'rotate-90' : ''}`} />
            </button>

            {/* Sidebar Navigation */}
            <div className={`${mobileMenuOpen ? 'block' : 'hidden'} lg:block bg-white shadow-md rounded-lg overflow-hidden sticky top-8`}>
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">Resources</h2>
              </div>
              <nav className="p-4">
                {Object.keys(resources).map((resource) => (
                  <motion.div
                    key={resource}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      onClick={() => {
                        setActiveTab(resource);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors mb-2 flex items-center ${
                        activeTab === resource
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      <span className="text-xl mr-3">{resources[resource].icon}</span>
                      <span>{resource}</span>
                    </button>
                  </motion.div>
                ))}
              </nav>
            </div>
          </div>

          {/* Right content area - 2/3 width */}
          <div className="lg:w-2/3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">{resources[activeTab].icon}</span>
                  <h1 className="text-3xl font-bold text-gray-800">{activeTab}</h1>
                </div>
                
                <p className="text-lg text-gray-600 mb-6">{resources[activeTab].description}</p>
                
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Key Features:</h2>
                <ul className="space-y-3">
                  {resources[activeTab].details.map((detail, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="text-green-600 mr-2">•</span>
                      <span className="text-gray-700">{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Additional Information</h3>
                <p className="text-gray-600">
                  Our {activeTab.toLowerCase()} capabilities are continuously upgraded to meet the evolving demands of modern construction projects. 
                  Contact us to learn more about how our resources can benefit your project.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;