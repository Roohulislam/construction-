import { useState } from 'react';
import { motion } from 'framer-motion';
import { aboutTabs, aboutContent } from '../Data/aboutdata';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    const content = aboutContent[activeTab];
    
    if (activeTab === 'about') {
      return (
        <>
          {content.paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
          
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">
                {content.expertise.title}
              </h4>
              <ul className="space-y-2">
                {content.expertise.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">
                {content.industries.title}
              </h4>
              <ul className="space-y-2">
                {content.industries.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      );
    }

    if (activeTab === 'mdMessage') {
      return (
        <div className="space-y-6">
          {content.content.map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
          {content.signature && (
            <p className="mt-8 font-semibold text-gray-800">{content.signature}</p>
          )}
        </div>
      );
    }

    if (activeTab === 'clients') {
      return (
        <div className="space-y-6">
          {content.content.map((item, index) => {
            if (typeof item === 'string') {
              return <p key={index} className="text-gray-700 leading-relaxed">{item}</p>;
            }
            return (
              <div  key={index} className="space-y-6">
                {item.government && (
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Government Sector</h4>
                    <ul className="space-y-2 pl-5">
                      {item.government.map((client, i) => (
                        <li key={i} className="text-gray-700 list-disc">{client}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.private && (
                  <div >
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Private Sector</h4>
                    <ul className="space-y-2 pl-5">
                      {item.private.map((client, i) => (
                        <li key={i} className="text-gray-700 list-disc">{client}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.institutions && (
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Institutions</h4>
                    <ul className="space-y-2 pl-5">
                      {item.institutions.map((client, i) => (
                        <li key={i} className="text-gray-700 list-disc">{client}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      );
    }

    if (Array.isArray(content.content)) {
      return (
        <div className="space-y-6">
          {content.content.map((item, index) => {
            if (typeof item === 'string') {
              return <p key={index} className="text-gray-700 leading-relaxed">{item}</p>;
            }
            if (item.items) {
              return (
                <ul key={index} className="space-y-3 pl-5">
                  {item.items.map((point, i) => (
                    <li key={i} className="text-gray-700 list-disc">{point}</li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </div>
      );
    }

    return <p className="text-gray-700 leading-relaxed">{content.content}</p>;
  };

  return (
    <section  className="bg-gray-50 py-2 px-2 sm:px-6 lg:px-8">
      {/* Hero Heading */}
      <div className="bg-gray-100 py-2 mb-2 rounded-lg">
        <div  className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-2xl font-bold text-gray-900"
          >
            About FAIZ-UR-REHMAN & COMPANY
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-2 text-sm text-gray-600 max-w-3xl mx-auto"
          >
            Building Pakistan's future with engineering excellence and innovative solutions
          </motion.p>
        </div>
      </div>

      <div  className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left sidebar - Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white shadow-sm rounded-lg p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Our Company</h2>
              <nav className="space-y-2">
                {aboutTabs.map((tab) => (
                  <button 
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-blue-950 text-white shadow-md'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {tab.title}
                  </button>
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
              className="bg-white shadow-sm rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b">
                {aboutContent[activeTab].title}
              </h3>
              <div className="prose max-w-none">
                {renderContent()}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;