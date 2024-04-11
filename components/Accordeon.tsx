'use client'

import React, { useState } from 'react'
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi'

const Accordeon = ({
  children,
  header,
  number,
}: {
  children: React.ReactNode
  header: string
  number?: React.ReactNode
}) => {
  const [active, setActive] = useState(false)

  return (
    <div className='border-2 border-slate-500 rounded-lg shadow-sm shadow-slate-500 bg-slate-100 mx-auto my-3 p-2 md:max-w-[1024px]'>
      <h4
        className='flex flex-row justify-between text-left font-medium text-sm uppercase my-1 cursor-pointer'
        onClick={() => setActive(prev => !prev)}
      >
        <div>
          {number}
          {header}
        </div>
        {active === false ? (
          <FiPlusCircle className='align-text-top text-lg stroke-blue-800 ml-3 shrink-0' />
        ) : (
          <FiMinusCircle className='align-text-top text-lg stroke-blue-800 ml-3 shrink-0' />
        )}
      </h4>
      <div
        className={`duration-200 ease-in-out ${active ? 'block' : 'hidden'}`}
      >
        {children}
      </div>
    </div>
  )
}

export default Accordeon
