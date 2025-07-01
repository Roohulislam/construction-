import React, { useState } from 'react';
import { motion } from 'framer-motion';

const QHSE = () => {
  const [activeTab, setActiveTab] = useState('about');

  const qhseContent = {
    about: {
      title: "About QHSE",
      content: (
        <>
          <p className="mb-6">
            HIN, QUALITY, HEALTH SAFETY & ENVIRONMENT. Our long term success depends on our ability to continually improve our service delivery while protecting our people and the environment in which we work, provide and ensure a safe working environment, conditions and equipment, coupled with training that will provide our employees with the knowledge and information necessary to safely carry out their assigned duties.
          </p>
          <p className="mb-6">
            Ensure that our services are performed in such a way as to protect the environment and, where possible, assist clients to do the same. To meet or exceed our client's expectations, the first time and every time, through the application of person quality principles at all levels of our service delivery process, while being guided by the views of our Code of Integrity and Professional Conduct.
          </p>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">We are committed to:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Protecting the health and safety of our employees, customers and third parties.</li>
              <li>Protecting our environment and that of the communities where we work and live.</li>
              <li>Improving the quality of our services and service delivery.</li>
              <li>The QHSE policy will be integrated at all levels and is the responsibility of management with the active support of all our staff.</li>
            </ul>
          </div>
          <p className="mb-6">
            Quality, health, safety and respect for the environment are inseparable from each other and integral to our business and mindset. We design these core values into our services and processes starting at the design stage and track performance throughout the business.
          </p>
          <p className="mb-6">
            QHSE is a top management priority. Senior management are responsible for QHSE and set the tone for the entire organization. We have driven it into all facets of our business.
            The team at QHSE integrated is a highly skilled group of individuals with background: in Occupational Health and Safety, Environmental Auditing, Performance Improvement, Human Interface Design, Computer Programming, Database Design, Database Development, Intranet/Internet Development, Multimedia, Marketing, Communications, Project Management, Finance, Auditing and Support.
          </p>
          <p>
            We're doing our best to achieve and maintain excellence in quality, health, safety, environmental and ethical issues.
          </p>
        </>
      )
    },
    quality: {
      title: "Quality Policy",
      content: (
        <>
          <p className="mb-4">
            Our Quality Policy reflects our commitment to delivering exceptional services that consistently meet or exceed customer expectations while complying with all applicable requirements.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Implement and maintain an effective Quality Management System</li>
            <li>Continually improve our processes and services</li>
            <li>Ensure compliance with all relevant standards and regulations</li>
            <li>Provide adequate resources and training to all employees</li>
            <li>Monitor and measure quality performance indicators</li>
            <li>Encourage a culture of quality throughout the organization</li>
          </ul>
        </>
      )
    },
    health: {
      title: "Health & Safety Policy",
      content: (
        <>
          <p className="mb-4">
            We are committed to providing a safe and healthy workplace for all employees, contractors, and visitors by eliminating hazards and minimizing risks.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Comply with all occupational health and safety legislation</li>
            <li>Identify and control all workplace hazards</li>
            <li>Provide appropriate safety training and equipment</li>
            <li>Encourage employee participation in safety programs</li>
            <li>Investigate all incidents and implement corrective actions</li>
            <li>Regularly review and improve our safety performance</li>
          </ul>
        </>
      )
    },
    environmental: {
      title: "Environmental Policy",
      content: (
        <>
          <p className="mb-4">
            We recognize our responsibility to minimize the environmental impact of our operations and to promote sustainable practices throughout our organization.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Comply with all environmental legislation and regulations</li>
            <li>Minimize waste and promote recycling initiatives</li>
            <li>Reduce energy and resource consumption</li>
            <li>Prevent pollution at all stages of our operations</li>
            <li>Consider environmental impacts in all decision-making</li>
            <li>Set and review environmental objectives and targets</li>
          </ul>
        </>
      )
    },
    certification: {
      title: "Areas Of Certification",
      content: (
        <>
          <p className="mb-4">
            We have achieved certification in the following areas, demonstrating our commitment to quality, safety, and environmental management:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>ISO 9001:2015 - Quality Management System</li>
            <li>ISO 14001:2015 - Environmental Management System</li>
            <li>ISO 45001:2018 - Occupational Health and Safety</li>
            <li>OHSAS 18001 - Occupational Health and Safety</li>
            <li>API Q1/Q2 - Petroleum Industry Standards</li>
            <li>ASME Certification - Pressure Vessels and Piping</li>
          </ul>
        </>
      )
    },
    awards: {
      title: "Awards",
      content: (
        <>
          <p className="mb-4">
            Our commitment to excellence has been recognized through numerous industry awards and accolades:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>National Safety Excellence Award (2022)</li>
            <li>Environmental Stewardship Award (2021)</li>
            <li>Quality Achievement Recognition (2020, 2021)</li>
            <li>Industry Innovation Award (2019)</li>
            <li>Best Contractor Safety Performance (2018-2022)</li>
            <li>Platinum Safety Certification (2017-2022)</li>
          </ul>
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
            QHSE
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left sidebar - 1/3 width */}
          <div className="lg:w-1/3">
            <div className="bg-white shadow-md rounded-lg overflow-hidden sticky top-8">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">QHSE</h2>
              </div>
              <nav className="p-4">
                {Object.keys(qhseContent).map((tab) => (
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
                      {qhseContent[tab].title}
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
                  {qhseContent[activeTab].title}
                </h1>
                <div className="prose max-w-none text-gray-700">
                  {qhseContent[activeTab].content}
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