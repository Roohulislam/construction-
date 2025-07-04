import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectTabs, projectCategories } from '../Data/projects';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('buildings');
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-2 px-2 sm:px-6 lg:px-8 bg-gray-50">
      {/* Header Section */}
      <div className="bg-gray-100 py-2 mb-2">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-2xl font-bold text-gray-900"
          >
            OUR PROJECTS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-2 text-sm text-gray-600 max-w-3xl mx-auto"
          >
            Quality construction projects across Khyber Pakhtunkhwa
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          {projectTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setSelectedProject(null);
              }}
              className={`py-4 px-6 font-medium text-lg ${
                activeTab === tab.id 
                  ? 'text-blue-950 border-b-2 border-green-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {projectCategories[activeTab].title}
          </h2>
          <p className="text-gray-600">
            {projectCategories[activeTab].description}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectCategories[activeTab].projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800 mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {project.location}
                </p>
                <p className="text-red-300 font-medium">
                  {project.cost}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <div className="h-64 md:h-96 bg-gray-200 overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  onClick={closeProjectDetail}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedProject.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-1">
                      Client
                    </h3>
                    <p className="text-gray-600">{selectedProject.client}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-1">
                      Location
                    </h3>
                    <p className="text-gray-600">{selectedProject.location}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-1">
                      Project Cost
                    </h3>
                    <p className="text-gray-600">{selectedProject.cost}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">
                    Project Details
                  </h3>
                  <p className="text-gray-600">{selectedProject.details}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;