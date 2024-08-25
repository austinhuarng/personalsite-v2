import React from 'react';
import { Home, User, Briefcase, FileText, Mail, Menu, X, Linkedin, Github } from 'lucide-react';
import Navbar from './Navbar';
import GradientBackground from './GradientBackground';

const Portfolio = () => {
  const prev_experiences = [
    { company: 'Capital One', role: 'Software Engineer Intern', logo: require('../logos/capital_one_logo.jpeg'), date: 'Summer 2021' },
    { company: 'WeMo Scooter', role: 'Software Engineer Intern', logo: require('../logos/wemo_scooter_logo.jpeg'), date: 'Summer 2020' },
    { company: 'Microsoft', role: 'Software Engineer Intern', logo: require('../logos/microsoft_logo.jpeg'), date: 'Summer 2019' },
  ];

  return (
    <GradientBackground>
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl text-gray-900">
            Hey, I'm Austin Huang
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700">
            I'm a primarily backend developer, currently optimizing the Amazon Alexa app to be performant and stable. 💻 🚀 ⏱️
          </p>
          <div className="bg-white bg-opacity-90 shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Current Role
              </h2>
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                <img src={require('../logos/amazon_logo.jpeg')} alt="Amazon Alexa logo" className="mb-2 sm:mb-0 sm:mr-4 rounded-full w-16 h-16" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Amazon</h3>
                  <p className="text-lg text-gray-600">Software Development Engineer II, Alexa Mobile Performance Engineering</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Building tooling and telemetry for early regression detection on the Alexa mobile app.
                Driving down latency and crash rate on Android, iOS, and FireOS.
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Previous Experience
              </h2>
              <div className="relative border-l-2 border-gray-300 pl-4">
                {prev_experiences.map((exp, index) => (
                  <div key={index} className="mb-8 relative">
                    <div className="absolute -left-6 mt-5 w-4 h-4 rounded-full bg-gray-300"></div>
                    <div className="flex items-center mb-2">
                      <img src={exp.logo} alt={`${exp.company} logo`} className="mr-4 w-12 h-12 rounded-md" />
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{exp.company}</h3>
                        <p className="text-base sm:text-lg text-gray-600">{exp.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">{exp.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white bg-opacity-90 shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Education
              </h2>
              <div className="flex items-center">
                <img src={require('../logos/usc_logo.jpeg')} alt="USC logo" className="mr-4 w-16 h-16 rounded-full" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">University of Southern California</h3>
                  <p className="text-lg text-gray-600">B.S. in Computer Science and Business Administration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="text-gray-500 flex items-center justify-center py-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-8">
            <a href="https://www.linkedin.com/in/austin-y-huang/" className="hover:text-black cursor-pointer">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/austinhuarng" className="hover:text-black cursor-pointer">
              <Github size={24} />
            </a>
            <a href="mailto:austinhuang11@gmail.com" className="hover:text-black cursor-pointer">
              <Mail size={24} />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="/#/projects" className="text-gray-500 hover:text-black hover:underline">
              /projects
            </a>
            <span className="mx-4">|</span>
            <a href="/#/resume" className="text-gray-500 hover:text-black hover:underline">
              /resume
            </a>
          </div>
        </div>
      </footer>
    </GradientBackground>
  );
};

export default Portfolio;