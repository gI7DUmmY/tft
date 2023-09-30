import React from 'react'

const Hero = () => {
  return (
    <section className='w-full relative parallax' id='hero'>
      <div className='absolute top-4 inset-x-0'>
        <h1 className='text-center font-extrabold text-3xl text-white drop-shadow-2xl'>
          Toulouse Football de Table
        </h1>
        <h2 className='text-center font-semibold text-lg text-white drop-shadow-md'>
          Un esprit, un club, une même passion
        </h2>
      </div>
    </section>
  )
}

export default Hero
