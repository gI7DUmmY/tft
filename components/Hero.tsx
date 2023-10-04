import React from 'react'

const Hero = () => {
  return (
    <section className='w-full h-screen parallax md:h-[92vh]' id='hero'>
      <div className='text-center pt-[10vh] md:pt-[25vh]'>
        <h1 className='font-extrabold text-3xl text-white drop-shadow-white font-mono'>
          Toulouse Football de Table
        </h1>
        <h2 className='font-semibold text-lg text-white drop-shadow-white font-sans'>
          Un esprit, un club, une même passion
        </h2>
      </div>
    </section>
  )
}

export default Hero
