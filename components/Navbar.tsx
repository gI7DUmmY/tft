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
import { FaFileSignature } from 'react-icons/fa6'

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
                href='#'
                scroll={false}
                onClick={() => setToggleMenu(false)}
              >
                <MdMenuBook className='inline align-text-bottom mr-2' />
                Le Football de Table
              </Link>
            </li>
            <li>
              <a
                href='https://www.ffft.fr/tournois-2023-2024'
                onClick={() => setToggleMenu(false)}
                target='_blank'
              >
                <MdEvent className='inline align-text-bottom mr-2' />
                Calendrier des Tournois
              </a>
            </li>
            <li>
              <Link
                href='/licence'
                scroll={false}
                onClick={() => setToggleMenu(false)}
              >
                <FaFileSignature className='inline align-text-bottom mr-2' />
                Rejoignez Nous (Licence)
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

      <div className='flex flex-row justify-between items-center max-md:hidden'>
        <div className='flex justify-between gap-6'>
          <Link href='#' scroll={false}>
            Le Football de Table
          </Link>
          <a href='https://www.ffft.fr/tournois-2023-2024' target='_blank'>
            Calendrier des Tournois
          </a>
        </div>
        <Image src={logo} alt='logo TFT' className='h-24 w-auto py-1' />
        <div className='flex justify-between gap-6'>
          <Link href='/licence' scroll={false}>
            Rejoignez Nous (Licence)
          </Link>
          <Link
            href='mailto:contact@toulouseft.fr?subject=Contact-site-TFT'
            scroll={false}
          >
            Contactez Nous
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
