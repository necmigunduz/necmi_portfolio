import React from 'react'
const degrees = [
  { school: 'Istanbul University', degree: 'Bachelor of Economics', years: '1996-2000' },
  { school: 'Florida International University', degree: 'Master of Economics', years: '2005-2008' },
  { school: 'Pamukkale University', degree: 'Master of Economics', years: '2001-2005' }
]
export default function Education() {
  return (
    <section className="mb-10" id="education">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="space-y-3">
        {degrees.map((d, i) => (
          <div key={i} className="p-3 bg-white rounded shadow-sm">
            <div className="flex justify-between">
              <div>
                <div className="font-semibold">{d.school}</div>
                <div className="text-sm text-gray-600">{d.degree}</div>
              </div>
              <div className="text-sm text-gray-500">{d.years}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}