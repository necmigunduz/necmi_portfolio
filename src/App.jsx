import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import StillLearning from './components/StillLearning'

export default function App() {
  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900">
      {/* Left sidebar hero */}
      <aside className="w-1/3 lg:w-1/5  md:w-1/4 bg-slate-300 shadow-lg p-6 fixed h-full">
        <Hero />
      </aside>



      {/* Main content */}
      <main className="ml-[33%] lg:ml-[25%] w-3/5 lg:w-2/5 px-6 py-12 flex flex-col gap-6">
        <Header />
        <About />
        <Experience />
        <Education />
        <Skills />
        <StillLearning />
        <div>
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  )
}