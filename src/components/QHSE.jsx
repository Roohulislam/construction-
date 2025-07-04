import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { qhseTabs, qhseContent } from '../Data/qhse';

const QHSE = () => {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    const content = qhseContent[activeTab];
    
    return (
      <div className="space-y-6">
        {content.content.map((item, index) => {
          if (typeof item === 'string') {
            return <p key={index} className="text-gray-700 leading-relaxed">{item}</p>;
          }
          if (item.commitment) {
            return (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-3">Our Core Commitments:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {item.commitment.map((point, i) => (
                    <li key={i} className="text-gray-700">{point}</li>
                  ))}
                </ul>
              </div>
            );
          }
          if (item.items) {
            return (
              <ul key={index} className="list-disc pl-6 space-y-2">
                {item.items.map((point, i) => (
                  <li key={i} className="text-gray-700">{point}</li>
                ))}
              </ul>
            );
          }
          return null;
        })}
      </div>
    );
  };

  return (
    <section className="bg-gray-50 py-2 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="bg-gray-50 py-2 mb-2 rounded-lg shadow-md">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-2xl font-bold text-gray-950"
          >
            QUALITY, HEALTH, SAFETY & ENVIRONMENT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-2 text-sm text-gray-900 max-w-3xl mx-auto"
          >
            PEC-Licensed Engineering Excellence in Islamabad, Pakistan
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left sidebar - Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white shadow-sm rounded-lg overflow-hidden sticky top-8">
              <div className="p-6 bg-gray-800">
                <h2 className="text-2xl font-bold text-white">QHSE Policies</h2>
                <p className="text-blue-200 text-sm mt-1">PEC License: C3/4227</p>
              </div>
              <nav className="p-4 space-y-2">
                {qhseTabs.map((tab) => (
                  <motion.div
                    key={tab.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                        activeTab === tab.id
                          ? 'bg-blue-950 text-white shadow-md'
                          : 'bg-gray-100 text-blue-950 hover:bg-gray-200'
                      }`}
                    >
                      {tab.title}
                    </button>
                  </motion.div>
                ))}
              </nav>
            </div>
          </div>

          {/* Main content area */}
          <div className="lg:w-3/4">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white shadow-sm rounded-lg overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                    {qhseContent[activeTab].title}
                  </h1>
                  {activeTab === 'certification' && (
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Valid until June 2025
                    </span>
                  )}
                </div>
                <div className="prose max-w-none">
                  {renderContent()}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QHSE;