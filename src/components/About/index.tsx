import React from 'react'
import AboutDetails from './AboutDetails'

function index() {
  return (
    <div>
      <header className="bg-gray-800 text-white py-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-white">Our Awesome Company</h1>
        </div>
      </header>
      <AboutDetails />
    </div>
  )
}

export default index