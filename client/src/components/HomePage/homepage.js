import React from 'react'
import Hero from './hero'
import Featuredservice from './FeaturedService'
import About from './About'
import Client from './client'
import ContactUs from './ContactUs'

function Homepage() {
    return (
        <div>
            <Hero />
            <Featuredservice />
            <About />
            <Client />
          

            <ContactUs />
        </div>
    )
}

export default Homepage
