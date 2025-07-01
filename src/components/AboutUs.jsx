import { useState } from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', title: 'About Us' },
    { id: 'introduction', title: 'Introduction' },
    { id: 'mdMessage', title: "MD's Message" },
    { id: 'mission', title: 'Our Mission' },
    { id: 'clients', title: 'Our Clients' }
  ];

  const content = {
    about: (
      <>
        <p className="mb-6">
          Habib Rafiq Group over the past five decades has been the direct result of sheer dedication and commitment to fulfilling customer requirements both in Pakistan and abroad. HRL has been involved in some of the most prestigious construction & engineering projects of Pakistan and its quality management process has already earned it an ISO 9000 certification. The name Habib Rafiq is synonymous with quality and professionalism.

HRL enjoys the reputation of being a trend setter in the ever expanding arena of housing and infrastructure in the last 15 years and has earned a respect and reputation of being most recognized name in the market. The biggest name in real estate development are proud to have HRL associated with them, HRL has added value through a useful engineering contribution towards the concept of development of housing and infrastructure vis-a-viz other disciplines. We have done many projects as Housing Scheme developer company Pakistan with complete work including construction of houses, road infrastructure construction, electrical work, mechanical work, water tanks, gas pipelines and also provided town planning services to real estate development projects in Pakistan.

HRL having thrown its weight abroad has been successful in maintaining the balance and secure jobs of high engineering and financial value. Today we stand tall and firm over the strong foundation of reputation and trust with a high value and numbers of human and electromechanical resources which gives us a distinctive edge over the competitors in the market.

Area of Expertise:

Power & Energy
Chemical & Petrochemicals
Roads, Housing & Infrastructure
Buildings
Water Resources Engineering
Airports & Aviation
Environmental
Oil & Gas

Major Industries:

Government
Power Plants
Electricity Power Stations
Oil Refinery
Hospitals
Housing Societies
Acrylic Fiber Plant
Urea Fertilizer Plant
Convention Centers, Corporate Buildings, Plaza, Multi-storey Buildings
Water Treatment Plants, Water Reservoir Dams
Tannery Pollution Control
        </p>
        <p>
          HRL enjoys the reputation of being a trend setter in the ever expanding arena of housing and infrastructure in the last 15 years and has earned a respect and reputation of being most recognized name in the market. The biggest name in real estate development are proud to have HRL associated with them, HRL has added value through a useful engineering contribution towards the concept of development of housing and infrastructure vis-a-vis other disciplines. We have done many projects as Housing Scheme developer company Pakistan with complete work including construction of houses, road infrastructure construction, electrical work, mechanical work, water tanks, gas pipelines and also provided town planning services to real estate development projects in Pakistan.
        </p>
      </>
    ),
    introduction: (
      <p>
        Introduction content goes here. This section would contain detailed information about the company's background, history, and foundational principles that have guided its operations over the years.
      </p>
    ),
    mdMessage: (
      <p>
        MD's Message content goes here. This would typically include a personal message from the Managing Director, sharing vision, values, and future directions for the company.
      </p>
    ),
    mission: (
      <p>
        Our Mission content goes here. This section would outline the company's core mission statement, objectives, and the values that drive its operations and decision-making processes.
      </p>
    ),
    clients: (
      <p>
        Our Clients content goes here. This section would showcase the company's prestigious clientele, partnerships, and notable projects completed for various organizations.
      </p>
    )
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
            ABOUT US
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left sidebar - 1/3 width */}
          <div className="lg:w-1/3">
            <div className="bg-white shadow-md rounded-lg p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">About Us</h2>
              <ul className="space-y-4">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {tab.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right content area - 2/3 width */}
          <div className="lg:w-2/3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white shadow-md rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {tabs.find(tab => tab.id === activeTab)?.title}
              </h3>
              <div className="prose max-w-none text-gray-700">
                {content[activeTab]}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;