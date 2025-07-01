import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectCategories = {
    current: {
      title: 'CURRENT PROJECTS',
      local: {
        title: 'LOCAL PROJECTS',
        projects: {
          'Power & Energy': {
            title: '2 x 400 MW Cool Fluid Thermal Power Plant, Amulator',
            location: 'Straddling',
            client: 'Standard Power Gas, Ltd. (SPAS, GIOESG)',
            image: '/images/power-plant-1.jpg'
          },
          'Petrochemicals': {
            title: 'Petrochemical Complex Expansion',
            location: 'Industrial Zone',
            client: 'National Petrochemical Co.',
            image: '/images/petrochemical.jpg'
          },
          'Road & Infrastructure': {
            title: 'Highway Network Development',
            location: 'National Corridor',
            client: 'Ministry of Infrastructure',
            image: '/images/highway.jpg'
          },
          'Buildings': {
            title: 'Commercial Tower Complex',
            location: 'Downtown District',
            client: 'Urban Development Group',
            image: '/images/commercial-tower.jpg'
          },
          'Water Resources Engineering': {
            title: 'Dam Construction Project',
            location: 'River Valley',
            client: 'Water Resources Authority',
            image: '/images/dam-construction.jpg'
          },
          'Air Ports & Aviation': {
            title: 'International Airport Expansion',
            location: 'Capital City',
            client: 'Civil Aviation Authority',
            image: '/images/airport.jpg'
          },
          'Environmental': {
            title: 'Waste Management Facility',
            location: 'Eco Zone',
            client: 'Environmental Protection Agency',
            image: '/images/waste-management.jpg'
          }
        }
      },
      abroad: {
        title: 'ABROAD PROJECTS',
        projects: {
          'Power & Energy': {
            title: 'TEM INTRADE Combine Cycle Power Plant',
            location: 'SMA®, Bank Straddlinger',
            client: 'Guards-Australia Natural Power (AUTPU)',
            image: '/images/power-plant-2.jpg'
          },
          'Petrochemicals': {
            title: 'Offshore Refinery Project',
            location: 'Coastal Region',
            client: 'Global Energy Solutions',
            image: '/images/refinery.jpg'
          },
          'Road & Infrastructure': {
            title: 'Transnational Highway',
            location: 'Border Region',
            client: 'International Development Bank',
            image: '/images/transnational-highway.jpg'
          },
          'Buildings': {
            title: 'Government Complex',
            location: 'Administrative District',
            client: 'Ministry of Construction',
            image: '/images/government-complex.jpg'
          },
          'Water Resources Engineering': {
            title: 'Desalination Plant',
            location: 'Coastal Area',
            client: 'Water Solutions International',
            image: '/images/desalination.jpg'
          },
          'Air Ports & Aviation': {
            title: 'Cargo Terminal Expansion',
            location: 'Major Port City',
            client: 'Global Logistics Inc.',
            image: '/images/cargo-terminal.jpg'
          },
          'Environmental': {
            title: 'Eco-Restoration Project',
            location: 'Protected Area',
            client: 'World Environmental Fund',
            image: '/images/eco-restoration.jpg'
          }
        }
      }
    },
    executed: {
      title: 'EXECUTED PROJECTS',
      local: {
        title: 'LOCAL PROJECTS',
        projects: {
          'Power & Energy': {
            title: 'Solar Farm Installation',
            location: 'Desert Region',
            client: 'Renewable Energy Corp',
            image: '/images/solar-farm.jpg'
          },
          'Petrochemicals': {
            title: 'LNG Processing Plant',
            location: 'Gas Fields',
            client: 'National Gas Company',
            image: '/images/lng-plant.jpg'
          },
          'Road & Infrastructure': {
            title: 'Urban Metro System',
            location: 'Metropolitan Area',
            client: 'City Development Authority',
            image: '/images/metro.jpg'
          },
          'Buildings': {
            title: 'Hospital Complex',
            location: 'Medical District',
            client: 'Health Ministry',
            image: '/images/hospital.jpg'
          },
          'Water Resources Engineering': {
            title: 'Irrigation Network',
            location: 'Agricultural Zone',
            client: 'Agricultural Development Board',
            image: '/images/irrigation.jpg'
          },
          'Environmental': {
            title: 'Water Treatment Plant',
            location: 'Industrial City',
            client: 'Environmental Services',
            image: '/images/water-treatment.jpg'
          },
          'Air Ports & Aviation': {
            title: 'Regional Airport',
            location: 'Provincial Capital',
            client: 'Regional Aviation',
            image: '/images/regional-airport.jpg'
          },
          'Oil & Gas': {
            title: 'Pipeline Network',
            location: 'Energy Corridor',
            client: 'National Oil Company',
            image: '/images/pipeline.jpg'
          }
        }
      },
      abroad: {
        title: 'ABROAD PROJECTS',
        projects: {
          'Power & Energy': {
            title: 'Construction of CO-12 Structures',
            location: 'Kocada Solutions',
            client: 'Relation Energy',
            image: '/images/power-structures.jpg'
          },
          'Petrochemicals': {
            title: 'Chemical Processing Facility',
            location: 'Industrial Park',
            client: 'Global Chemicals Ltd',
            image: '/images/chemical-plant.jpg'
          },
          'Road & Infrastructure': {
            title: 'Bridge Construction',
            location: 'Major River Crossing',
            client: 'Infrastructure Development Co.',
            image: '/images/bridge.jpg'
          },
          'Buildings': {
            title: 'University Campus',
            location: 'Education City',
            client: 'Ministry of Education',
            image: '/images/university.jpg'
          },
          'Water Resources Engineering': {
            title: 'Flood Control System',
            location: 'Delta Region',
            client: 'Water Management Authority',
            image: '/images/flood-control.jpg'
          },
          'Environmental': {
            title: 'Recycling Facility',
            location: 'Eco-Industrial Zone',
            client: 'Green Solutions Inc.',
            image: '/images/recycling.jpg'
          },
          'Air Ports & Aviation': {
            title: 'Air Traffic Control Tower',
            location: 'International Hub',
            client: 'Aviation Services Group',
            image: '/images/control-tower.jpg'
          },
          'Oil & Gas': {
            title: 'Offshore Platform',
            location: 'Continental Shelf',
            client: 'Ocean Energy Resources',
            image: '/images/offshore-platform.jpg'
          }
        }
      }
    }
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
  };

  return (
    <section style={{ backgroundColor: "#faf9f5" }} className="py-2 px-2 sm:px-6 lg:px-8 bg-gray-50">
      {/* Heading with gray background */}
      <div className="bg-gray-100 py-12 mb-12">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center"
          >
            POWER & ENERGY
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            onClick={() => {
              setActiveTab('current');
              setSelectedProject(null);
            }}
            className={`py-4 px-6 font-medium text-lg ${activeTab === 'current' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Current Projects
          </button>
          <button
            onClick={() => {
              setActiveTab('executed');
              setSelectedProject(null);
            }}
            className={`py-4 px-6 font-medium text-lg ${activeTab === 'executed' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Executed Projects
          </button>
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project Lists */}
          <div className="lg:col-span-1 space-y-8">
            {/* Local Projects */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4">{projectCategories[activeTab].local.title}</h3>
              <ul className="space-y-2">
                {Object.keys(projectCategories[activeTab].local.projects).map((projectKey) => (
                  <li key={projectKey} className="flex items-center">
                    <button
                      onClick={() => handleProjectClick(projectCategories[activeTab].local.projects[projectKey])}
                      className="flex items-center w-full text-left hover:text-green-600 transition-colors"
                    >
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      <span>{projectKey}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Abroad Projects */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4">{projectCategories[activeTab].abroad.title}</h3>
              <ul className="space-y-2">
                {Object.keys(projectCategories[activeTab].abroad.projects).map((projectKey) => (
                  <li key={projectKey} className="flex items-center">
                    <button
                      onClick={() => handleProjectClick(projectCategories[activeTab].abroad.projects[projectKey])}
                      className="flex items-center w-full text-left hover:text-green-600 transition-colors"
                    >
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      <span>{projectKey}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Project Details Area */}
          <div className="lg:col-span-2">
            {selectedProject ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-64 md:h-80 bg-gray-200 overflow-hidden relative">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <button 
                    onClick={closeProjectDetail}
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{selectedProject.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Location</h4>
                      <p className="text-gray-600">{selectedProject.location}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Client</h4>
                      <p className="text-gray-600">{selectedProject.client}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center h-full">
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <h3 className="text-xl font-medium text-gray-600 mb-2">Select a Project</h3>
                  <p className="text-gray-500">Click on any project from the list to view details</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;