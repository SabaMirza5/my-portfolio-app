import React from 'react'
import Hero_section_props from './Hero_section_props'

function Hero() {
  return (
    <>
{/* <Hero_section_props heading="Welcome To <br> My Personal Portfolio"/> */}
<Hero_section_props heading={<div>Welcome To <br /> My Personal Portfolio</div>} 
main_pera={<div>The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.</div>}/>

    </>
  )
}

export default Hero
