'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'
import {
  MdClose,
  MdEmail,
  MdEvent,
  MdHome,
  MdMenu,
  MdMenuBook,
} from 'react-icons/md'
import { AiOutlineIdcard } from 'react-icons/ai'
import { FaFileSignature } from 'react-icons/fa6'
import { TbCircleLetterC } from 'react-icons/tb'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleOpenMenu = () => {
    setToggleMenu(prev => !prev)
  }

  const handleCloseMenu = () => {
    setToggleMenu(prev => !prev)
  }

  return (
    <nav className='fixed top-0 z-50 w-full bg-indigo-900 text-white px-3 font-sans'>
      {toggleMenu === true ? (
        <div>
          <Image
            src={logo}
            alt='logo TFT'
            className='w-auto h-[100px] mx-auto mt-6'
          />

          <MdClose
            className='fixed top-2 right-2 text-purple-500 text-4xl md:hidden'
            onClick={handleCloseMenu}
          />
        </div>
      ) : (
        <MdMenu
          className='fixed top-2 right-2 text-purple-500 text-4xl md:hidden'
          onClick={handleOpenMenu}
        />
      )}

      {/* menu smartphones */}
      {toggleMenu === true && (
        <div className='h-screen text-xl pt-12 md:hidden'>
          <ul className='flex flex-col justify-start gap-6'>
            <li>
              <Link
                href='/'
                scroll={false}
                onClick={() => setToggleMenu(false)}
              >
                <MdHome className='inline align-text-bottom mr-2' />
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href='/pages/pratique'
                scroll={false}
                onClick={() => setToggleMenu(false)}
              >
                <MdMenuBook className='inline align-text-bottom mr-2' />
                Pratiquer
              </Link>
            </li>
            <li>
              <a
                href='https://ffft.tablesoccer.org/tournaments/'
                onClick={() => setToggleMenu(false)}
                target='_blank'
              >
                <MdEvent className='inline align-text-bottom mr-2' />
                Calendrier des Tournois
              </a>
            </li>
            <li>
              <a
                href='https://app.tablesoccer.org/login'
                target='_blank'
                className='shrink-0'
              >
                <TbCircleLetterC className='inline align-bottom text-2xl' />
                oral
              </a>
            </li>
            <li>
              <Link
                href='/pages/licence'
                scroll={false}
                onClick={() => setToggleMenu(false)}
              >
                <FaFileSignature className='inline align-text-bottom mr-2' />
                Rejoignez Nous (Licence)
              </Link>
            </li>
            <li>
              <Link
                href='/pages/about'
                scroll={false}
                onClick={() => setToggleMenu(false)}
              >
                <AiOutlineIdcard className='inline align-text-bottom mr-2' />
                Qui Nous Sommes
              </Link>
            </li>
            <li>
              <Link
                href='mailto:contact@toulouseft.fr?subject=Contact-site-TFT'
                scroll={false}
                onClick={() => setToggleMenu(false)}
              >
                <MdEmail className='inline align-text-bottom mr-2' />
                Contactez Nous
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* menu md et + */}
      <div className='grid grid-cols-7 place-items-center gap-3 text-center max-md:hidden'>
        <Link href='/pages/pratique' scroll={false}>
          <MdMenuBook className='inline align-text-bottom mr-1' />
          Pratiquer
        </Link>
        <a href='https://ffft.tablesoccer.org/tournaments/' target='_blank'>
          <MdEvent className='inline align-text-bottom mr-1' />
          Tournois
        </a>
        <a
          href='https://app.tablesoccer.org/login'
          target='_blank'
          className='shrink-0'
        >
          <TbCircleLetterC className='inline align-bottom text-2xl' />
          oral
        </a>

        <Image src={logo} alt='logo TFT' className='h-24 w-auto mx-auto py-1' />
        <Link href='/pages/about' scroll={false} className='text-balance'>
          <AiOutlineIdcard className='inline align-text-bottom mr-2' />
          Qui Nous Sommes
        </Link>
        <Link href='/pages/licence' scroll={false}>
          <FaFileSignature className='inline align-text-bottom mr-1' />
          Licences
        </Link>
        <Link
          href='mailto:contact@toulouseft.fr?subject=Contact-site-TFT'
          scroll={false}
          className='text-balance'
        >
          <MdEmail className='inline align-text-bottom mr-1' />
          Contactez Nous
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
