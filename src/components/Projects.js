import React from 'react';
import Navbar from './Navbar';
import GradientBackground from './GradientBackground';
import TrojanCheckInOut from '../images/Trojan_checkin.jpeg';
import Accessio from '../images/accessio.jpeg';
import PwC from '../images/pwc_logo.png';
import Boeing from '../images/boeing_logo.png';

const ProjectCard = ({ title, description, technologies, link, image }) => {
    const content = (
        <div 
            className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group cursor-pointer h-64 md:h-40 transform hover:scale-105 hover:shadow-xl"
        >
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            
            <div className="relative bg-transparent p-6 h-full transition-all duration-300 group-hover:opacity-30">
                <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
                <p className="text-gray-200">{technologies.join(', ')}</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl">
                <div className="text-white p-6 flex flex-col items-center justify-center">
                    <p className="mb-4">{description}</p>
                    {link && (
                        <a href={link} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Learn More</a>
                    )}
                </div>
            </div>
            <div className="absolute inset-0 transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"></div>
        </div>
    );

    return link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block">
            {content}
        </a>
    ) : (
        content
    );
};

const Projects = ({ isDarkMode }) => {
    const projects = [
        {
            title: "Access.io",
            description: "Web application that gathers user-reported accessibility features of locations, generating an “accessibility score”",
            technologies: ["Java", "JSP", "MySQL"],
            link: "https://github.com/camshannon/CSCI201_Group_6/",
            image: Accessio
        },
        {
            title: "Trojan Check In/Out",
            description: "An Android app for students to check in/out of buildings via QR code and managers to track building capacities",
            technologies: ["Java", "Firebase", "zxing (QR code library)"],
            link: "https://github.com/michelleran/TrojanCheckInOut",
            image: TrojanCheckInOut
        },
        {
            title: "Boeing Design Challenge",
            description: "Placed 1st out of 20 teams in designing/setting parameters for a space vehicle on an asteroid capture return mission.",
            technologies: ["Placed 1st in the Boeing Design Challenge at USC"],
            link: "",
            image: Boeing
        },
        {
            title: "PwC Case Competition",
            description: "Provided advisory services to an online consumer marketplace company looking to relocate.",
            technologies: ["Placed 2nd in the PwC Case Competition at USC"],
            link: process.env.PUBLIC_URL + '/assets/PwC_Challenge.pdf',
            image: PwC
        },
    ];

    return (
        <GradientBackground isDarkMode={isDarkMode}>
          <Navbar />
          <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
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