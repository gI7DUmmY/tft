'use client'

import React, { useState } from 'react'
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi'

const Accordeon = ({
  children,
  header,
}: {
  children: React.ReactNode
  header: string
}) => {
  const [active, setActive] = useState(false)

  return (
    <div className='border-2 border-slate-500 rounded-lg shadow-sm shadow-slate-500 bg-slate-100 my-3 p-2'>
      <h4
        className='flex flex-row justify-between font-medium text-sm uppercase my-1'
        onClick={() => setActive(prev => !prev)}
      >
        {header}
        {active === false ? (
          <FiPlusCircle className='align-text-top text-lg text-blue-800 ml-3' />
        ) : (
          <FiMinusCircle className='align-text-top text-lg text-blue-800 ml-3' />
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
