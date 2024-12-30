import Image from 'next/image'

export default function About() {
  const skills = ['Python', 'MATLAB', 'R', 'Pandas', 'Numpy', 'Leaflet.js', 'OpenCV', 'Excel', 'SPSS', 'SQLite']

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-blue-500 rounded-full animate-float"></div>
              <Image 
                src="/placeholder.svg" 
                alt="Sana Raza" 
                width={250} 
                height={250} 
                className="rounded-full absolute inset-2 object-cover animate-fadeIn" 
              />
            </div>
          </div>
          <div className="md:w-1/2 animate-slideIn">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a Biomedical Engineer with a passion for solving real-world problems through technology. I've participated in international competitions, including the NASA Space Apps Challenge, and led teams in four hackathons.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Key Achievements:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4">
              <li>Ranked 5th in a class of 69 students in university</li>
              <li>Achieved 7.5 bands in IELTS</li>
              <li>Ranked among top 15 teams in a competitive coding competition by UC Berkeley</li>
              <li>Secured 1st position in Harvard CS50 puzzle 2024 by solving 9/9 puzzles</li>
            </ul>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

