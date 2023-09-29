import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='fixed top-0 z-50 w-full flex flex-row justify-between items-center bg-indigo-900 text-white px-3'>
      <div className='flex justify-between gap-6'>
        <Link href='#'>Le Football de Table</Link>
        <Link href='#'>Calendrier des Tournois</Link>
      </div>
      <Image src='/logo.png' alt='logo TFT' width={100} height={100} />
      <div className='flex justify-between gap-6'>
        <Link href='#'>Rejoignez Nous (Licence)</Link>
        <Link href='#'>Contactez Nous</Link>
      </div>
    </nav>
  )
}

export default Navbar
