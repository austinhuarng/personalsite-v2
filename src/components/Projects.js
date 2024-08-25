import React from 'react';
import Navbar from './Navbar';
import GradientBackground from './GradientBackground';

const ProjectCard = ({ title, description, technologies, link }) => {
    return (
        <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group cursor-pointer h-64 md:h-40 transform hover:scale-105 hover:shadow-xl">
            <div className="bg-white p-6 h-full transition-all duration-300 group-hover:opacity-30 rounded-2xl">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{technologies.join(', ')}</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl">
                <div className="text-white p-6">
                    <p className="mb-4">{description}</p>
                    <a href={link} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Learn More</a>
                </div>
            </div>
            <div className="absolute inset-0 transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"></div>
        </div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "Project 1",
            description: ".........",
            technologies: ["React", "Node.js", "MongoDB"],
            link: "#"
        },
        {
            title: "Project 2",
            description: "............",
            technologies: ["React", "Node.js", "MongoDB"],
            link: "#"
        },
        {
            title: "Project 3",
            description: "...........",
            technologies: ["React", "Node.js", "MongoDB"],
            link: "#"
        },
        // Add more projects as needed
    ];

    return (
        <GradientBackground>
          <Navbar />
          <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">My Projects</h1>
              <div className="grid grid-cols-1 gap-6">
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </div>
          </div>
        </GradientBackground>
    );
};

export default Projects;