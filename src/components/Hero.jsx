import React from 'react'
import Profile from '../assets/necmi.jpg'

export default function Hero() {
  return (
    <div className="flex flex-col h-full justify-between items-center text-center">
      <img src={Profile} alt="profile photo" width={300} className='rounded-full' />
      <div>
        <h1 className="text-3xl font-extrabold">Necmi Gunduz</h1>
        <p className="mt-2 text-lg">Economist • Software Developer</p>
        <p className="mt-2 text-lg">• Economics and Statistics Tutor</p>
          <p className="mt-4 text-sm text-gray-600">
            I teach Economics (AP Microeconomics, <br />AP Macroeconomics, AP Statistics,  College Economics Courses, and Statistics) and a Software Developer <br />(JavaScript, React, NextJs, Node.js, Data Science).
          </p>
        <p className="mt-4 text-sm text-gray-600">Remote or Ankara, Türkiye</p>
        <p className="text-sm text-gray-600">necmigunduz@gmail.com</p>
        <p className="text-sm text-gray-600">+90 (507) 694 9863</p>
      </div>
      <div className="mt-6">
        <a className="inline-block px-4 py-2 bg-black text-white rounded" href="#contact">Book an appointment</a>
      </div>
    </div>
  )
}