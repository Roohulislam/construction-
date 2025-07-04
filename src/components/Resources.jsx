import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';
import { resourcesTabs, resourcesContent } from '../Data/resources';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('resources');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentTabData = resourcesContent[activeTab];
  const currentTabIcon = resourcesTabs.find(tab => tab.id === activeTab)?.icon;

  return (
    <section className="bg-gray-50 py-2 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="bg-gray-50 py-2 mb-2 rounded-lg shadow-md">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-2xl font-bold text-gray-900"
          >
            COMPANY RESOURCES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-2 text-sm text-gray-600 max-w-3xl mx-auto"
          >
            Licensed Construction Firm (C3/4227) | Valid until June 2025 | Islamabad Headquarters
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/3">
            <button 
              className="lg:hidden bg-blue-950 text-white p-4 flex items-center justify-between w-full mb-4 rounded-lg shadow-sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span>Explore Resources</span>
              <FiChevronRight className={`transition-transform ${mobileMenuOpen ? 'rotate-90' : ''}`} />
            </button>

            <div className={`${mobileMenuOpen ? 'block' : 'hidden'} lg:block bg-white shadow-md rounded-lg overflow-hidden sticky top-8`}>
              <div className="p-6 bg-gray-800">
                <h2 className="text-2xl font-bold text-white">Our Capabilities</h2>
              </div>
              <nav className="p-4 space-y-2">
                {resourcesTabs.map((tab) => (
                  <motion.div
                    key={tab.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      onClick={() => {
                        setActiveTab(tab.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center ${
                        activeTab === tab.id
                          ? 'bg-blue-950 text-white shadow-md'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      <span className="text-xl mr-3">{tab.icon}</span>
                      <span className="font-medium">{tab.title}</span>
                    </button>
                  </motion.div>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-2/3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Content Header */}
              <div className="p-6 bg-gray-100 border-b border-gray-200 flex items-center">
                <span className="text-3xl mr-4">{currentTabIcon}</span>
                <h1 className="text-2xl font-bold text-gray-800">{currentTabData.title}</h1>
              </div>

              {/* Main Content */}
              <div className="p-6 md:p-8">
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {currentTabData.description}
                </p>
                
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                  Key Features
                </h2>
                <ul className="space-y-3 mb-8">
                  {currentTabData.details.map((detail, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="text-green-600 mr-2 mt-1">•</span>
                      <span className="text-gray-700">{detail}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Specializations Grid */}
                {activeTab === 'specializations' && (
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      PEC Registered Specialization Codes
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        'CE04(ii) - Irrigation & Flood Control',
                        'BC02 - Building Restoration',
                        'CE08 - Oil/Gas Pipelines',
                        'CE10 - General Civil Works',
                        'EE02 - Security Systems',
                        'EE04 - Low Voltage',
                        'EE07 - Telecom',
                        'EE11 - Solar Energy Systems',
                        'BC01 - Prefab Structures',
                        'CE01 - Roads & Drainage',
                        'CE09 - Sewerage/Water',
                        'EE03 - Building Automation'
                      ].map((item, index) => (
                        <div key={index} className="bg-gray-50 p-3 rounded border border-gray-200">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Certificate Images Section */}
                {activeTab === 'certifications' && (
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Our Certificates
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {currentTabData.certificates.map((cert, index) => (
                        <motion.div 
                          key={index}
                          whileHover={{ scale: 1.03 }}
                          className="bg-gray-50 p-2 rounded border border-gray-200"
                        >
                          <img 
                            src={cert.src} 
                            alt={cert.alt}
                            className="w-full h-auto rounded shadow-sm"
                          />
                          <p className="text-center text-sm text-gray-600 mt-2">{cert.alt}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Section */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Additional Information</h3>
                <p className="text-gray-600">
                  {currentTabData.additionalInfo} Contact us at {activeTab === 'certifications' ? 
                  'PEC for verification' : 'na@*****@ya*******.com'} for more details.
                </p>
                {activeTab === 'certifications' && (
                  <p className="mt-2 text-sm text-gray-500">
                    Postal Address: HOUSE NO.223 STREET NO.19 SECTOR G-10/2, Islamabad, Pakistan
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;