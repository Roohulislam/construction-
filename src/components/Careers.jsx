import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { careersTabs, careersContent } from '../data/careers';

const Careers = () => {
  const [activeTab, setActiveTab] = useState('careers');

  const renderContent = () => {
    const content = careersContent[activeTab];
    
    return (
      <div className="space-y-6">
        {content.content.map((item, index) => {
          // Render paragraphs
          if (item.type === 'paragraph') {
            return (
              <p key={index} className="text-gray-700 leading-relaxed">
                {item.text}
              </p>
            );
          }
          
          // Render highlighted lists
          if (item.type === 'highlight') {
            return (
              <div key={index} className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {item.items.map((point, i) => (
                    <li key={i} className="text-gray-700">{point}</li>
                  ))}
                </ul>
              </div>
            );
          }
          
          // Render benefit/culture sections
          if (item.type === 'section') {
            return (
              <div key={index} className={`p-4 rounded-lg ${index % 2 === 0 ? 'bg-green-50' : 'bg-blue-50'}`}>
                <h3 className="text-lg font-semibold mb-3">
                  {item.title}
                </h3>
                <ul className="list-disc pl-6 space-y-1">
                  {item.items.map((point, i) => (
                    <li key={i} className="text-gray-700">{point}</li>
                  ))}
                </ul>
              </div>
            );
          }
          
          // Render hiring process
          if (item.type === 'process') {
            return (
              <div key={index} className="mt-6">
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  {item.steps.map((step, i) => (
                    <li key={i} className="text-gray-700">{step}</li>
                  ))}
                </ol>
              </div>
            );
          }
          
          // Render job positions
          if (item.type === 'positions') {
            return (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Available Positions</h3>
                {item.jobs.map((job, i) => (
                  <div key={i} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-lg">{job.title}</h4>
                    <p className="text-gray-600 mb-1">{job.location} | Department: {job.department}</p>
                    <p className="text-sm text-gray-700 mb-2">Specialization: {job.specialization}</p>
                    <button className="text-green-600 hover:underline font-medium">
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            );
          }
          
          // Render general application
          if (item.type === 'general') {
            return (
              <div key={index} className="bg-gray-50 p-6 rounded-lg mt-6">
                <h3 className="text-xl font-semibold mb-3">General Application</h3>
                <p className="mb-4">{item.text}</p>
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Submit Application
                </button>
              </div>
            );
          }
          
          return null;
        })}
      </div>
    );
  };

  return (
    <section style={{ backgroundColor: "#faf9f5" }} className="py-2 px-2 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="bg-gray-100 py-2 mb-2">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            CAREER OPPORTUNITIES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-2 text-sm text-gray-600 max-w-3xl mx-auto"
          >
            Join our PEC-licensed construction and engineering team
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left sidebar - Navigation */}
          <div className="lg:w-1/3">
            <div className="bg-white shadow-md rounded-lg overflow-hidden sticky top-8">
              <div className="p-6 border-b border-gray-200 bg-gray-800">
                <h2 className="text-2xl font-bold text-white">Careers at Faiz-ur-Rehman & Co</h2>
                <p className="text-blue-200 text-sm mt-1">PEC License: C3/4227</p>
              </div>
              <nav className="p-4 space-y-2">
                {careersTabs.map((tab) => (
                  <motion.div
                    key={tab.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-950 text-white'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
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
          <div className="lg:w-2/3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  {careersContent[activeTab].title}
                </h1>
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

export default Careers;