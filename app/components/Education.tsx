import { GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Education</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 animate-fadeIn hover-lift">
            <div className="flex items-center mb-4">
              <GraduationCap className="text-blue-500 dark:text-blue-400 mr-4" size={32} />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">NED University of Engineering and Technology</h3>
                <p className="text-gray-600 dark:text-gray-300">Bachelor of Biomedical Engineering</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2">Nov 2017 - Oct 2021</p>
            <p className="text-gray-600 dark:text-gray-300">CGPA: 3.47/4.00</p>
            <a href="https://www.neduet.edu.pk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mt-2 inline-block">
              Visit University Website
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

