import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

export default function Work() {
  const projects = [
    { 
      title: 'Allergy Detector', 
      description: 'A chatbot that detects possible food allergies using Aria and Allegro APIs.', 
      image: '/placeholder.svg',
      liveLink: 'https://example.com/allergy-detector',
      githubLink: 'https://github.com/yourusername/allergy-detector'
    },
    { 
      title: 'Feel Better Buddy', 
      description: 'A chatbot that helps mentally stressed individuals manage workload using Llama 3.2.', 
      image: '/placeholder.svg',
      liveLink: 'https://example.com/feel-better-buddy',
      githubLink: 'https://github.com/yourusername/feel-better-buddy'
    },
    { 
      title: 'Design Hand', 
      description: 'A web-based app that transforms bland rooms into aesthetically pleasing spaces.', 
      image: '/placeholder.svg',
      liveLink: 'https://example.com/design-hand',
      githubLink: 'https://github.com/yourusername/design-hand'
    },
  ]

  return (
    <section id="work" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeIn hover-lift">
              <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center">
                    <ExternalLink size={18} className="mr-1" /> Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 flex items-center">
                    <Github size={18} className="mr-1" /> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

