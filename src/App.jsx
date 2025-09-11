import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'


export default function App() {
  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900">
      {/* Left sidebar hero */}
      <aside className="w-1/3 lg:w-1/5  md:w-1/4 bg-slate-300 shadow-lg p-6 fixed h-full">
        <Hero />
      </aside>


      {/* Main content */}
      <main className="ml-[33%] lg:ml-[25%] w-2/3 lg:w-3/4 px-6 py-12">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
        <footer className="mt-12 text-center text-sm text-gray-600">© {new Date().getFullYear()} Necmi Gunduz</footer>
      </main>
    </div>
  )
}