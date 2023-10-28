import Link from 'next/link'
import { MdHome } from 'react-icons/md'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='pt-[8vh] md:pt-[13vh] pattern-hexagons-purple-400/5'>
      <div className='text-purple-500 text-lg pl-3 hidden md:block md:mb-6 xl:pl-9 2xl:max-w-[1500px] 2xl:mx-auto'>
        <Link href='/' className='border-2 border-purple-500 rounded-2xl p-2'>
          <MdHome className='inline align-text-bottom mr-1' />
          Accueil
        </Link>
      </div>
      {children}
    </div>
  )
}

export default Layout
