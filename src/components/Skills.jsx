import React from 'react'
const skills = ['Microeconomics', 'Macroeconomics', 'Statistics', 'Econometrics', 'Economic Development', 'JavaScript', 'React', 'NextJS', 'NodeJS', 'Express', 'TailwindCSS', 'Bootstrap', 'MongoDB', 'PostgreSQL']
export default function Skills() {
  return (
    <section className="mb-10" id="skills">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((s, i) => <span key={i} className="px-3 py-1 bg-white rounded shadow-sm text-sm">{s}</span>)}
      </div>
    </section>
  )
}