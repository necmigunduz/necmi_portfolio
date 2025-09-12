import React from 'react'


export default function Header() {
    return (
        <header className="fixed top-10 left-5 w-28 bg-white shadow-md z-20 flex flex-col items-start p-6 opacity-50 hover:opacity-100 rounded-3xl">
            <nav className="flex flex-col space-y-4 text-base font-semibold">
                <a href="#about" className="hover:text-blue-600">About</a>
                <a href="#experience" className="hover:text-blue-600">Experience</a>
                <a href="#education" className="hover:text-blue-600">Education</a>
                <a href="#skills" className="hover:text-blue-600">Skills</a>
                <a href="#still-learning" className="hover:text-blue-600">Still Learning</a>
                <a href="#contact" className="hover:text-blue-600">Contact</a>
            </nav>
        </header>
    )
}