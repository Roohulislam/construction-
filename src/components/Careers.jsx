import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Careers = () => {
  const [activeTab, setActiveTab] = useState('careers');

  const careersContent = {
    careers: {
      title: "Careers",
      content: (
        <>
          <p className="mb-6">
            NRL was established nearly 60 years ago to take up jobs in public and private sectors of multiple values.  
            Named after two brothers Mr. M. Rafiq (The Chairman) and Mr. Habib Ahmed (The MD), the work had only one dimension "The Hard Work". 
          </p>
          <p className="mb-6">
            The conviction is improved, and NRL has a history of 66 years and an infinite future. The reasons to select NRL for employment and/or business are multiple. 
            However, few of them are listed and narrated below for the sake of quick evaluation and understanding:
          </p>
          <ul className="list-disc pl-6 space-y-4 mb-6">
            <li>
              <strong>NRL is a company with past and promising future.</strong>
            </li>
            <li>
              NRL has been exposed to international standards of quality and work management through its continual working with professional, recognized global names in industrial, housing, infrastructure and engineering sectors. Hence the working environment is effective, friendly and integrated.
            </li>
            <li>
              NRL is the first ISO 9001:2000, 14001 and 18001 certified construction company which gives them a qualitative edge in the market.
            </li>
            <li>
              NRL is pursuing a wide spectrum of business and involving different Engineering disciplines. It includes construction of power plants, high-tech buildings, infrastructural development, chemical/petrochemical plants, airports and Aviation and environmental projects. The company has engineering facilities too through their design associates and in-house Engineering wings.
            </li>
            <li>
              NRL is using the latest softwares on engineering, planning and evaluation areas. Most of these softwares and modules have been developed through an untiring effort and data collection spread out over years.
            </li>
            <li>
              NRL has a policy of exposing the staff to multiple working models and disciplines through rotation of assignments. This gives everybody at least twelve nag on work in and triple discipline environments.
            </li>
            <li>
              NRL maintains one of the largest inventory of electro-mechanical resources which gives a unique exposure and working environment.
            </li>
          </ul>
        </>
      )
    },
    about: {
      title: "About Job In NRL",
      content: (
        <>
          <h3 className="text-xl font-semibold mb-4">Why Work With Us?</h3>
          <p className="mb-4">
            At NRL, we believe our employees are our greatest asset. We provide an environment that fosters professional growth while maintaining a healthy work-life balance.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2 text-green-600">Employee Benefits</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Competitive salaries and bonuses</li>
                <li>Comprehensive health insurance</li>
                <li>Retirement benefits</li>
                <li>Professional development programs</li>
                <li>Paid time off and holidays</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2 text-green-600">Work Culture</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Collaborative team environment</li>
                <li>Opportunities for career advancement</li>
                <li>Continuous learning culture</li>
                <li>Employee recognition programs</li>
                <li>Work-life balance initiatives</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">Our Hiring Process</h3>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>Application submission</li>
            <li>Resume screening</li>
            <li>Technical assessment</li>
            <li>Interview rounds</li>
            <li>Reference checks</li>
            <li>Job offer</li>
          </ol>
        </>
      )
    },
    apply: {
      title: "Apply Online",
      content: (
        <>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Current Openings</h3>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-lg">Project Manager</h4>
                <p className="text-gray-600 mb-2">Location: Karachi | Department: Construction</p>
                <button className="text-green-600 hover:underline">View Details & Apply</button>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-lg">Civil Engineer</h4>
                <p className="text-gray-600 mb-2">Location: Lahore | Department: Engineering</p>
                <button className="text-green-600 hover:underline">View Details & Apply</button>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-lg">Safety Officer</h4>
                <p className="text-gray-600 mb-2">Location: Islamabad | Department: QHSE</p>
                <button className="text-green-600 hover:underline">View Details & Apply</button>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">General Application</h3>
            <p className="mb-4">Don't see a position that matches your skills? Submit a general application and we'll contact you when relevant opportunities become available.</p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Submit General Application
            </button>
          </div>
        </>
      )
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
            CAREERS
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left sidebar - 1/3 width */}
          <div className="lg:w-1/3">
            <div className="bg-white shadow-md rounded-lg overflow-hidden sticky top-8">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">Careers</h2>
              </div>
              <nav className="p-4">
                {Object.keys(careersContent).map((tab) => (
                  <motion.div
                    key={tab}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      onClick={() => setActiveTab(tab)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors mb-2 ${
                        activeTab === tab
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {careersContent[tab].title}
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
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                  {careersContent[activeTab].title}
                </h1>
                <div className="prose max-w-none text-gray-700">
                  {careersContent[activeTab].content}
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