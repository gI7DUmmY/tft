'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MdChevronRight } from 'react-icons/md'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname().split('/')

  return (
    <div className='mt-[8vh] md:mt-[13vh]'>
      <div className='text-purple-500 text-lg pl-3 hidden md:block'>
        <Link href='/'>Accueil</Link>
        <MdChevronRight className='inline align-middle text-slate-500 text-2xl' />
        <span className='capitalize select-none'>{pathName[2]}</span>
      </div>
      {children}
    </div>
  )
}

export default Layout
