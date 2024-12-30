'use client'

import Link from 'next/link'
import { useTheme } from './ThemeProvider'
import { Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Header() {
  const { isDark, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="#" className="text-2xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
            YourName
          </Link>
          <ul className="flex space-x-6">
            {['About', 'Leadership', 'Work', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
          </button>
        </div>
      </nav>
    </header>
  )
}

