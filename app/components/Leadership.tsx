import { Award, Users, BookOpen } from 'lucide-react'

export default function Leadership() {
  const experiences = [
    { 
      title: 'Python Trainer', 
      org: 'ICode Guru', 
      date: 'Oct 2024 - Present',
      description: 'Taught Python basics to diverse participants, adapting training materials to fit their needs.',
      icon: Users
    },
    { 
      title: 'IELTS Trainer', 
      org: 'ICode Guru', 
      date: 'May 2024 - August 2024',
      description: 'Taught underprivileged students about IELTS, providing individual training and feedback.',
      icon: BookOpen
    },
    { 
      title: 'Maths Trainer', 
      org: 'MIT Emerging Talent Program', 
      date: 'Oct 2024',
      description: 'Taught foundational math topics for the MIT Emerging Talent Program Entry Exam.',
      icon: Award
    },
  ]

  return (
    <section id="leadership" className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-shadow">Leadership & Volunteer Experience</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-effect p-6 rounded-lg animate-slideIn hover-lift">
              <exp.icon className="w-12 h-12 mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-sm text-blue-200 mb-2">{exp.org} | {exp.date}</p>
              <p className="text-gray-200">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

