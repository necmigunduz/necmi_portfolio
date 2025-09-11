import React from 'react'
const items = [
  { title: 'Software Developer', date: 'May 2020 - Current', org: 'Microverse, Kingstone Labs, Smartup Networks' },
  { title: 'Regional Development Expert', date: 'May 2010 - May 2016', org: 'Thrace Regional Development Agency' },
  { title: 'Curriculum Development Specialist & Consultant', date: 'Sep 2008 - May 2010', org: 'ADFIMI' }
]
export default function Experience() {
  return (
    <section className="mb-10" id="experience">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="space-y-4">
        {items.map((it, i) => (
          <div key={i} className="p-4 bg-white rounded shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{it.title}</h3>
                <p className="text-sm text-gray-600">{it.org}</p>
              </div>
              <div className="text-sm text-gray-500">{it.date}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}