import Link from 'next/link'
import logo from '../public/logo.png'
import Image from 'next/image'

const notFound = () => {
  return (
    <main
      className='h-screen w-full bg-white bg-no-repeat bg-bottom text-black text-center'
      id='not-found'
    >
      <h1 className='uppercase pt-16 text-2xl md:text-6xl font-extrabold'>
        Page Introuvable
      </h1>
      <div className='mt-12'>
        <Link
          href='/'
          className='uppercase font-bold text-base md:text-3xl btn h-24'
        >
          <Image
            src={logo}
            alt='logo TFT'
            height={30}
            width={30}
            className='inline mr-3'
          />
          Revenir &agrave; l&apos;accueil
        </Link>
      </div>
    </main>
  )
}

export default notFound
