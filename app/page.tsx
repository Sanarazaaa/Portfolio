import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Leadership from './components/Leadership'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Education />
      <Leadership />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

