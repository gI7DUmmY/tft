import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'

const Navbar = () => {
  return (
    <nav className='fixed top-0 z-50 w-full flex flex-row justify-between items-center bg-indigo-900 text-white px-3'>
      <div className='flex justify-between gap-6'>
        <Link href='#'>Le Football de Table</Link>
        <Link href='#'>Calendrier des Tournois</Link>
      </div>
      <Image src={logo} alt='logo TFT' className='h-24 w-auto' />
      <div className='flex justify-between gap-6'>
        <Link href='#'>Rejoignez Nous (Licence)</Link>
        <Link href='#'>Contactez Nous</Link>
      </div>
    </nav>
  )
}

export default Navbar
