import React from 'react'


export default function StillLearning() {
    const items = ['Machine Learning', 'Game Development with Unity (2D&3D)', 'Advanced Mathematics', 'Advanced Statistics', 'API Development', 'Cloud Computing']
    return (
        <section className="mb-10" id="still-learning">
            <h2 className="text-2xl font-bold mb-4">Still Learning</h2>
            <div className="flex flex-wrap gap-2">
                {items.map((s, i) => (
                    <span key={i} className="px-3 py-1 bg-white rounded shadow-sm text-sm">{s}</span>
                ))}
            </div>
        </section>
    )
}