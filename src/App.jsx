import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
        <footer className="mt-12 text-center text-sm text-gray-600">
          <Footer />
        </footer>
      </div>
    </div>
  )
}