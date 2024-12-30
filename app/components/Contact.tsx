import { Mail, Phone, MapPin, Linkedin, Github, Code2 } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="animate-slideIn">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Contact Information</h3>
            <div className="space-y-4">
              <p className="flex items-center text-gray-600 dark:text-gray-300">
                <Mail className="mr-2" /> sana.raxa321@gmail.com
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-300">
                <Phone className="mr-2" /> +92(332)348-3555
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-300">
                <MapPin className="mr-2" /> Karachi, Pakistan
              </p>
            </div>
            <div className="mt-6">
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Connect with me</h4>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300">
                  <Github size={24} />
                </a>
                <a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-800 dark:text-yellow-400 dark:hover:text-yellow-300">
                  <Code2 size={24} />
                </a>
              </div>
            </div>
          </div>
          <form className="space-y-4 animate-fadeIn">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white" required></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

